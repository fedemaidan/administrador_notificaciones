FROM node:8.9.1
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
RUN npm install body-parser
RUN npm install cors
RUN npm install node-cron

COPY . .
EXPOSE 8080
CMD [ "node", "app.local.js" ]