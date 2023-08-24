FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY prisma/schema.prisma prisma/
RUN yarn prisma:generate
COPY . .
CMD [ "yarn", "start:dev" ]