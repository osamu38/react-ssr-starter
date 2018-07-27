# react-ssr-starter

All have been introduced React environment.

## Features

- [react](https://reactjs.org/)
- [react-router](https://reacttraining.com/react-router/)
- [react-helmet](https://github.com/nfl/react-helmet)
- [react-hot-loader](http://gaearon.github.io/react-hot-loader/)
- [recompose](https://github.com/acdlite/recompose)
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

Basically page component is implemented using SFC and recompose.

`src/pages/Home/component.js`

```jsx
/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Button, Title, SubTitle, UserList } from 'components';
import { PageProps } from 'types';

export default function Home(props: PageProps) {
  const {
    user: { userList },
    userActions: { logout },
  } = props;

  return (
    <div>
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
    </div>
  );
}
```

`src/pages/Home/index.js`

```javascript
/* @flow */

import loadable from 'loadable-components';
import { compose, lifecycle, pure, setStatic } from 'recompose';
import { fetchUsers as fetchUsersFromServer } from 'actions/user';

export default compose(
  setStatic('loadData', dispatch => dispatch(fetchUsersFromServer())),
  lifecycle({
    componentDidMount() {
      const {
        user: {
          status: { isFetchedUserList },
        },
        userActions: { fetchUsers },
      } = this.props;

      if (!isFetchedUserList) {
        fetchUsers();
      }
    },
  }),
  pure
)(loadable(() => import('pages/Home/component')));
```

Add your pages in `src/routes.js`.

```javascript
import Home from 'pages/Home';

...
  {
    path: url.endpoint.home,
    isLoggedIn: true,
    component: Home,
  },
```
