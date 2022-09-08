## DEV
# FROM node:16
# ENV NODE_ENV=production
# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --production
# COPY . .
# EXPOSE 4200
# CMD ["npm", "start"]


## PRO
FROM node:16
RUN npm install -g serve
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 
COPY . .
CMD ["npm", "run", "build"]
CMD serve -p $PORT -s dist

