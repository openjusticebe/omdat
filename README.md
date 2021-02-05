# Omdat - ECLI frontend of OpenJustice.be

Frontend of **ECLI API** : <https://github.com/openjusticebe/ecli-api>

## Build Setup without Docker

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost
$ yarn serve

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Build Setup with Docker

```bash
# build image
docker build -t omdat .

# ... and launch server
docker run -it -p 80:80 omdat
```

# Credits
- Project led by **OpenJustice.be** in collaboration with [Liège Legal Tech Lab](https://legaltech.uliege.be/) of **University of Liège**🎓.
