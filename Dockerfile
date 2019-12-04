FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 7778

CMD node server.js