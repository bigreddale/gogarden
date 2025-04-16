# GOGarden

Demo Garden Info Application

This repository contains two applications.

## /harper-app

This folder contains a Harper application. This application manages
the DB and related RESTful API endpoints. To run this application you should have
harperdb [installed globally](https://docs.harperdb.io/docs/getting-started).

To start it up in dev mode use

```
cd harper-app
harperdb dev .
```

## /web-app

This folder contains a React app scaffolded with Vite.
In order for this application to function you must have the Harper application running to supply data.

To start it up in dev mode use

```
cd web-app
npm install
npm run dev
```

# Assumptions

- There is only one user connected to the DB at a time. This application does not validate changes to data in the DB
  after the initial fetch. Upon successful post/put/delete the values are updated in application state rather than
  refetching.
- This is a happy-path POC. There is need for error handling and messaging and the hooks are there in the Redux store
  but no user notification or interaction is coded.
- Everything needs testing. Vitest has been configured and sample tests exist for the custom button component only.