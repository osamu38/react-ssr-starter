/* @flow */

import * as React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import Error from 'components/Error';
import withExtendRouter from 'components/withExtendRouter';
import * as userActions from 'actions/user';
import * as uiActions from 'actions/ui';
import meta from 'utils/meta';
import link from 'utils/link';
import routes from 'routes';
import { isDevelopment } from 'config/env';
import GlobalStyle from 'styles';
import type { Dispatch, PageProps } from 'types';

class App extends React.PureComponent<PageProps> {
  componentDidUpdate(prevProps: PageProps) {
    const {
      history: { action },
      location: { pathname: prevPathname },
      state: {
        ui: { isOpenMenu },
      },
    } = prevProps;
    const {
      location: { pathname: nextPathname },
      actions: {
        uiActions: { closeMenu },
      },
    } = this.props;
    const isNotPop = action !== 'POP';
    const isChengedPathname = prevPathname !== nextPathname;

    if (isNotPop && isChengedPathname) {
      window.scrollTo(0, 0);
      if (isOpenMenu) {
        closeMenu();
      }
    }
  }

  render() {
    const {
      location: { pathname },
      state: {
        user: {
          status: { isLoggedIn },
        },
        ui: { isOpenMenu, error },
      },
      actions: {
        uiActions: { openMenu, closeMenu, hideError },
      }
    } = this.props;
    const auth = routes[0];
    const metaData = meta.get(pathname);
    const linkData = link.get(pathname);

    return (
      <Container>
        <Helmet meta={metaData} link={linkData} />
        <GlobalStyle />
        {error ? <Error hideError={hideError}>{error}</Error> : null}
        <Header
          isLoggedIn={isLoggedIn}
          isOpenMenu={isOpenMenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
        <Main>
          {/* eslint-disable-next-line */}
          <Route render={() => <auth.component {...this.props} />} />
        </Main>
        <Footer />
      </Container>
    );
  }
}
function mapStateToProps<S>(state: S): { state: S } {
  return { state };
}
function mapDispatchToProps() {
  // $FlowFixMe
  return (dispatch: Dispatch) => ({
    dispatch,
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
      uiActions: bindActionCreators(uiActions, dispatch),
    },
  });
}

const enhancers = [
  withExtendRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
];

if (isDevelopment) {
  const { hot } = require('react-hot-loader');

  enhancers.push(hot(module));
}

export default compose(...enhancers)(App);
