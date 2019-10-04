# react-ssr-starter

All have been introduced React environment.

## Features

- [preact](https://preactjs.com/)
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

Basically page component is implemented using React.PureComponent.

`src/pages/Home/index.js`

```jsx
/* @flow */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from 'components/Button';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import UserList from 'components/UserList';
import { fetchUsers } from 'actions/user';
import type { PageProps, Ctx } from 'types';

function HomePage(props: PageProps) {
  const {
    state: {
      user: { userList },
    },
    actions: {
      userActions: { logout },
    },
  } = props;

  return (
    <>
      <Helmet title="Home" />
      <Title>Home Page</Title>
      <SubTitle>User List</SubTitle>
      <UserList userList={userList} />
      <Button
        onClick={() => {
          logout();
        }}
        isCenter
      >
        Logout
      </Button>
    </>
  );
}

HomePage.loadData = async (ctx: Ctx) => {
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
