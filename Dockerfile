FROM node:22-alpine

WORKDIR /usr/app

COPY package*.json ./

COPY ./components ./components
COPY ./connector ./connector
COPY ./routes ./routes
COPY ./app.js ./app.js
COPY ./.env ./.env

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]