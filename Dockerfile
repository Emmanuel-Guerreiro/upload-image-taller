FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i 

COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i 

COPY . .

COPY --from=development /usr/src/app/build ./build

CMD ["node", "build/app.js"]