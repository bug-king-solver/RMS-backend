FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY prisma/schema.prisma prisma/

RUN yarn prisma:generate

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:dev" ]