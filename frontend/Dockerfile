FROM node:18-alpine

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build
RUN npm i sharp

CMD ["npm", "run", "start"]