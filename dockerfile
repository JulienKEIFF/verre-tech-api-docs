FROM node:lts-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN npm i
EXPOSE 3000

CMD ["node", "./bin/www"]