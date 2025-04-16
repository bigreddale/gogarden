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