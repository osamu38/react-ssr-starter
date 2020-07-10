# react-ssr-starter

All have been introduced React environment.

## Features

- [react](https://reactjs.org/)
- [react-router](https://reacttraining.com/react-router/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async/)
- [react-hot-loader](http://gaearon.github.io/react-hot-loader/)
- [redux](https://rackt.github.io/redux/)
- [styled-components](https://www.styled-components.com/)
- [loadable-components](https://www.smooth-code.com/open-source/loadable-components/)
- [express](http://expressjs.com/)
- [workbox](https://developers.google.com/web/tools/workbox/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [prettier](https://prettier.io/)
- [jest](https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)
- [storybook](https://storybook.js.org/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)

## Install

```
$ git clone https://github.com/osamu38/react-ssr-starter.git
$ cd react-ssr-starter
$ npm i
```

## Run

```
$ npm run dev
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
npm start
```

Go to `http://localhost:2525/`.

## Adding pages

Basically page component is implemented using Functional Component.

`pages/home/index.js`

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import UserList from 'components/UserList';
import { fetchUsers } from 'actions/user';

const HomePage = (props) => {
  const {
    state: {
      user: { userList },
    },
  } = props;

  return (
    <>
      <Helmet title="Home" />
      <Title>Home Page</Title>
      <SubTitle>User List</SubTitle>
      <UserList userList={userList} />
    </>
  );
};

HomePage.loadData = async (ctx) => {
  const {
    dispatch,
    state: {
      user: { userList },
    },
  } = ctx;

  if (!userList.length) {
    return dispatch(fetchUsers());
  }
  return Promise.resolve();
};

export default HomePage;
```
