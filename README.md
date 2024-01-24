# osn-discovery-webui

### Running using Docker on the CLI

1. Make sure you are in the directory `osn-discovery-webui/osn-discovery-webui/` where you can see the Dockerfile

2. run the command `docker build -t [image_name] .` using whatever image name you want in place of `[image_name]`
    - e.g. `docker build -t dev-image .`

3. run the command `docker run -d --rm -p 5398:6142 [container_name] [image_name]` using any name for `[container _name]` and using the previously set `image_name` you chose.
    - e.g. `docker run -d --rm -p 5398:6142 dev-container dev-image`

When you are ready to stop the web app, run `docker stop [container_name]`
- e.g. `docker stop dev-container`

### Notes
Make sure to create a `.env` file and put in the API url in a variable called `VITE_API_BASE_URL`