# react-ssr-starter

All have been introduced React environment.

Features
--------

- [react](https://reactjs.org/)
- [react-router](https://reacttraining.com/react-router/)
- [react-helmet](https://github.com/nfl/react-helmet)
- [react-hot-loader](http://gaearon.github.io/react-hot-loader/)
- [redux](https://rackt.github.io/redux/)
- [styled-components](https://www.styled-components.com/)
- [loadable-components](https://github.com/smooth-code/loadable-components)
- [express](http://expressjs.com/)
- [workbox](https://developers.google.com/web/tools/workbox/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [prettier](https://prettier.io/)
- [flow](https://flow.org/)
- [jest](https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)

## Install

```
$ git clone git@github.com:osamu38/react-ssr-starter.git
$ cd react-ssr-starter
$ npm i
```

## Run

```
$ npm start
```

Go to `http://localhost:2525/`.

## Build

```
$ npm run build
$ npm run build:client (Only build client)
$ npm run build:server (Only build server)
```

## Build and analyze

```
$ npm run build:analyze
$ npm run build:client:analyze
$ npm run build:server:analyze
```

## Run for production

```
npm run start:prod
```

Go to `http://localhost:2525/`.



## Adding pages

Add your pages in `src/routes.js`.

```javascript
  {
    path: url.endpoint.about,
    component: loadable(() => import('pages/About')),
  }
```

## Adding components

Add your components in `src/components/index.js`.

```javascript
  Button: loadable(() => import('components/Button')),
```
