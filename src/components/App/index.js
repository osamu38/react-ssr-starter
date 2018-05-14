/* @flow */

import * as React from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { routerActions } from 'react-router-redux';
import Helmet from 'react-helmet';
import { Container, Footer, Header, Main, Error } from 'components';
import * as userActions from 'actions/user';
import * as uiActions from 'actions/ui';
import meta from 'utils/meta';
import link from 'utils/link';
import routes from 'routes';
import 'styles';
import type { Dispatch } from 'types';

type Props = {
  user: Object,
  ui: Object,
  uiActions: Object,
  history: Object,
  location: {
    pathname: string,
  },
};

function App(props: Props) {
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
    <Container {...props}>
      <Helmet meta={metaData} link={linkData} />
      <Error hideError={hideError}>{error}</Error>
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
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps() {
  return (dispatch: Dispatch) => ({
    routerActions: bindActionCreators(routerActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch),
  });
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(hot(module)(App))
);
