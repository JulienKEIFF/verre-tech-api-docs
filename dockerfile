FROM node:lts-alpine
COPY package*.json ./
RUN npm i
EXPOSE 3000
CMD ["node", "./bin/www"]