FROM node:16-alpine

WORKDIR /service1-app

COPY . /service1-app/

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]