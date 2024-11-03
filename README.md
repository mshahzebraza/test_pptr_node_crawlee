# Crawlee + PuppeteerCrawler + TypeScript project

This project is a typescript node project that uses crawlee and puppeteer crawler to scrape a website.

The project is not really focussed on the scraping aspect. It is more focussed on the setup, dockerization and deployment aspects.

## Technologies used

- Node.js
- TypeScript
- Crawlee
- Puppeteer
- Docker
- AWS EC2


## Workflow

### Local Development
- Creation of project from crawlee-typescript template using crawlee cli.
- Creation of a express server
- Integration of typescript with the express server and setup of build directory (with types of express and node)
- Connection of crawlee with the express server to expose an endpoint to trigger the crawler
- Creation of a Dockerfile

### Production Deployment
- Creation of AWS EC2 instance
- Setup of security group for the instance
- Association of Elastic IP to the instance to make it reachable from web
- Uploading of the code to the instance via `scp` or `git`
- Copying of the environment variables to the instance via `scp`
- Installation of docker in the instance
- Building the docker image in the instance (Managing the permissions and permission groups)
- Running the docker container
- Testing the application by triggering the crawler through the exposed endpoint