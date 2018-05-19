/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';
import { Container, Footer, Header, Main, Error } from 'components';
import meta from 'utils/meta';
import link from 'utils/link';
import routes from 'routes';
import 'styles';

type Props = {
  user: Object,
  ui: Object,
  uiActions: Object,
  history: Object,
  location: {
    pathname: string,
  },
};

export default function App(props: Props) {
  const {
    location: { pathname },
    user: {
      status: { isLoggedIn },
    },
    ui: { isOpenMenu, error },
    uiActions: { openMenu, closeMenu, hideError },
  } = props;
  const auth = routes[0];
  const metaData = meta.get(pathname);
  const linkData = link.get(pathname);

  return (
    <Container>
      <Helmet meta={metaData} link={linkData} />
      {error && <Error hideError={hideError}>{error}</Error>}
      <Header
        isLoggedIn={isLoggedIn}
        isOpenMenu={isOpenMenu}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <Main>
        <Route
          render={() => <auth.component {...props} routes={auth.routes} />}
        />
      </Main>
      <Footer />
    </Container>
  );
}
