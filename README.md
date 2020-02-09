# Adonis API application

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Adonis%20REST%20Api&uri=https%3A%2F%2Fgist.githubusercontent.com%2Fleandrocodes%2F6bf84425573867c5222006951f932ac4%2Fraw%2F2e30c29760ecfa036a09f4cb55616c39b3055661%2Fadonis-rest.json)

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
