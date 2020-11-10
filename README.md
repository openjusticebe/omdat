# ECLI frontend

Developed by OpenJustice.be with ❤️.
Licensed with GPLv3.

## Build Setup without Docker

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Build Setup with Docker
```bash
# build image
docker build -t ecli-frontend .

# ... and launch server
docker run -it -p 3000:80 ecli-frontend
```
