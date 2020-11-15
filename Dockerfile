# Dockerfile
FROM node:11.13.0-alpine

# this quick hack invalidates the cache
ADD https://www.google.com /time.now

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# set environment variables
ENV NODE_ENV production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

# copy the app, note .dockerignore
RUN git clone http://github.com/openjusticebe/ecli-frontend.git /usr/src/app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
