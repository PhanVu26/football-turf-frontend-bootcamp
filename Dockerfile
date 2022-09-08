FROM node:16

ENV NODE_ENV=production

WORKDIR /app


COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8082

CMD ["npm", "start"]

