FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app
#CMD gets called when container is initialized
CMD node index.js

EXPOSE 8080
