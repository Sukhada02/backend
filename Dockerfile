FROM node:14-alpine

COPY . .

RUN npm install

EXPOSE 9001

CMD [ "npm","start" ]