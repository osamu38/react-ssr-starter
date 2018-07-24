/* @flow */

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { routerActions } from 'connected-react-router';
import Helmet from 'react-helmet';
import { compose, lifecycle, pure } from 'recompose';
import { Container, Footer, Header, Main, Error } from 'components';
import * as userActions from 'actions/user';
import * as uiActions from 'actions/ui';
import meta from 'utils/meta';
import link from 'utils/link';
import routes from 'routes';
import { isDevelopment } from 'servers/env';
import 'styles';
import type { Dispatch, PageProps } from 'types';

export function App(props: PageProps) {
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
      {error ? <Error hideError={hideError}>{error}</Error> : null}
      <Header
        isLoggedIn={isLoggedIn}
        isOpenMenu={isOpenMenu}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <Main>
        <Route render={() => <auth.component {...props} />} />
      </Main>
      <Footer />
    </Container>
  );
}
function mapStateToProps<S>(state: S): S {
  return state;
}
function mapDispatchToProps() {
  return (dispatch: Dispatch) => ({
    routerActions: bindActionCreators(routerActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch),
  });
}

const enhancers = [
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidUpdate(prevProps: PageProps) {
      const {
        history: { action },
        location: { pathname: prevPathname },
        ui: { isOpenMenu },
      } = prevProps;
      const {
        location: { pathname: nextPathname },
        uiActions: { closeMenu },
      } = this.props;
      const isNotPop = action !== 'POP';
      const isChengedPathname = prevPathname !== nextPathname;

      if (isNotPop && isChengedPathname) {
        window.scrollTo(0, 0);
        if (isOpenMenu) {
          closeMenu();
        }
      }
    },
  }),
  pure,
];

if (isDevelopment) {
  const { hot } = require('react-hot-loader');

  enhancers.push(hot(module));
}

export default compose(...enhancers)(App);
