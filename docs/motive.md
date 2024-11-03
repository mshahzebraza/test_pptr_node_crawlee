# Motive of the project

This project was created to recreate and resolve a bug when trying to deploy a typescript node project with crawlee-puppeteer on AWS EC2 to scrape a website.

### Problem Context

Running puppeteer in production requires that a bundled chromium browser is available to the puppeteer instance. The installation path of the chromium browser must also be provided to puppeteer configuration via the `launchOptions` parameter or environment variable `PUPPETEER_CHROMIUM_PATH`.

Before implementation of crawlee, the puppeteer instance was managed manually. The app was dockerized in a linux environment. The bundled chromium was installed in the image. The chromium path was provided to puppeteer configuration via the docker environment variable `PUPPETEER_CHROMIUM_PATH` at the time of container build.

After implementation of crawlee, the puppeteer instance was managed using crawlee. However, the downloading of the chromium browser was still handled manually. (crawlee offers their own docker image with chromium pre-installed, but it was not used)

Since, under the hood, crawlee uses puppeteer, the same configuration of browser was expected to work. However, it did not, atleast not in production.

### Observations

- It worked in local development environment.
- It worked in docker desktop environment.
- It did not work in production environment.
- The errors were cryptic and mentioned something about the chromium browser not being found.

### Solution
- Tried building a docker image based on the apify/actor-puppeteer docker image.
  - The image was built successfully.
  - The container was able to run successfully when tested locally using docker desktop.
  - However, when tested in production in AWS EC2, it failed to run with the same error as before.
  - Conclusion: The issue is not with the downloading of the chromium browser.

- Observed that the logs stated something about security policies and sandboxing. Though not recommended, an option to provide some sandbox related arguments in puppeteer configuration were logged in the errors.
  - Added the arguments to the puppeteer configuration. (i.e. `args: ["--no-sandbox", "--disable-setuid-sandbox"]`)
  - The application started working.
  - Conclusion: The issue was related to the security/sandboxing and puppeteer configuration. When switched to crawlee, the configuration was not copied over from the manual puppeteer instance. However, this is not a permanent solution. The error must be investigated further.
