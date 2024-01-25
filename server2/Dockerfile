FROM node:16-alpine

WORKDIR /service2-app

COPY . /service2-app/

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]