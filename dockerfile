FROM node:lts-alpine
COPY package*.json ./
COPY . .
RUN npm i
EXPOSE 3000
CMD ["node", "./bin/www"]