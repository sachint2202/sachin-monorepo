# sachin-monorepo

Space for multiple projects at a single place using Nx. Will modify as it suits the need.

## Angular Project

Run below code to see it running.

```sh
    npx nx serve ng-app
```

Visit the Angular application at [http://localhost:4200](http://localhost:4200).

[![Netlify Status](https://api.netlify.com/api/v1/badges/362e8b5c-3fa3-425c-9823-db1089345cc6/deploy-status)](https://app.netlify.com/sites/sachin-monorepo-angular/deploys)

## React Project

Run below code to see it running.

```sh
    npx nx serve react-app
```

Visit the React application at [http://localhost:4201](http://localhost:4201).

## NodeJS Project

Run below code to see it running.

```sh
    npx nx serve api-app
```

Visit the Node API application at [http://localhost:4202](http://localhost:4202).

---

Run all projects at the same time with below code.

```sh
    npx nx run-many --target=serve --projects=ng-app,react-app,api-app --parallel
```
