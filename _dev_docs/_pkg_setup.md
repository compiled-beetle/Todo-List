# Packages Setup

## Project Packages

```bash
npm install --save dotenv @hapi/hapi knex pg joi
```

## Dev Packages

```bash
npm install --save-dev nodemon eslint @hapi/eslint-plugin
```

eslint config

```bash
npm init @eslint/config
```

eslint run on file

```bash
npx eslint file.js

```

> missing hapi-swagger -> marked to be adde at later date -> [hapi-swagger](https://github.com/glennjones/hapi-swagger)

## adding docs

```bash
npm install --save-dev hapi-swagger @hapi/inert @hapi/vision
npx install-peerdeps hapi-swagger
```

> not working -> "Failed to fetch /swagger.json" error, I can't findout why.
