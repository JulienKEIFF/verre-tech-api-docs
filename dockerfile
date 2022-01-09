FROM alpine:3.11
RUN apk --no-cache add nodejs npm
RUN npm i
CMD ["node", "./bin/www"]