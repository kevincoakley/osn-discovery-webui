# Declare base image
FROM node:lts-alpine3.14
# Build Step
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
# Define port number container should expose
EXPOSE 6142

CMD ["npm", "run", "dev"]