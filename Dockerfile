FROM node:18.16.0-alpine

WORKDIR /nodeapp/test

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URI=mongodb://192.168.2.187:27017

EXPOSE 5000

CMD ["npm","start"]