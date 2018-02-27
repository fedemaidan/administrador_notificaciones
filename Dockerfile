FROM node:8.9.1
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
RUN npm install body-parser
RUN npm install mercadolibre
RUN npm install cors
RUN npm install needle
RUN npm install mongoose
RUN npm install node-cron

COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]