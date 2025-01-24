# osn-discovery-webui

The current build is set so that it runs in conjunction with [osn-discovery-api-server repo](https://github.com/kevincoakley/osn-discovery-api-server) when using Docker.
The api-server runs the Dockerfile in this repo through a docker-compose and the build files are located on the host container.

### Running using Docker on the CLI (local)

To test if the build is being built correctly, comment out the last line in the Dockerfile:
```Docker
# CMD ["npm", "run", "build"]
```

and add:
```Docker
RUN npm run build

CMD ["tail", "-f", "/dev/null"]
```
With this, you should be able to check the contents inside the container. The build files should be located in `/app/dist/`

1. Make sure you are in the directory `osn-discovery-webui/osn-discovery-webui/` where you can see the Dockerfile

2. run the command `docker build -t [image_name] .` using whatever image name you want in place of `[image_name]`
    - e.g. `docker build -t dev-image .`

3. run the command `docker run -d --rm -p 5398:6142 --name [container_name] [image_name]` using any name for `[container _name]` and using the previously set `image_name` you chose.
    - e.g. `docker run -d --rm -p 5398:6142 dev-container dev-image`
    - `-d` flag stands for detached, meaning the container runs in the background so the command line is open to use
    - `--rm` flag means that the container will automatically be removed when stopped
    - `-p 5398:6142` maps the port between the host and the container; port 6142 inside the container is mapped ot port 5398 on the host machine.

If the Dockerfile is left unchanged, then the container will stop on its own.

If you wish to run the web app in development mode, then you can replace the last line as mentioned above:
```Docker
# CMD ["npm", "run", "build"]
```
with:
```Docker
CMD ["npm", "run", "dev"]
```
Then you go to [localhost:5398](localhost:5398).

When you are ready to stop the web app, run `docker stop [container_name]`
- e.g. `docker stop dev-container`

### Notes
Make sure to create a `.env` file and put in the API url in a variable called `VITE_API_BASE_URL`. Since this is not something super secret, you can just copy `.env.example`