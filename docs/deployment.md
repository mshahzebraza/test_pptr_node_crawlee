### Building and running the docker image

```bash
docker build -t [image-name] .
docker run -p [80/443]:[PORT] --name [container-name] [image-name]
```

Currently, the image name is `test-scraper` and the container name is `test-scraper`. So the command to build and run the container would be:

```bash
docker build -t test-scraper .
docker run -p 80:3000 --name test-scraper test-scraper
```

After running the container, you can access the application at `http://<host>:3000`.

where `<host>` is the host of the machine running the container.

- In local development, it would be `localhost`.
- In ec2, it would be the public IP address of the instance (i.e. the elastic IP address allocated to the instance).