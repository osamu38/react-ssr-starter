/* @flow */

import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routerActions } from 'react-router-redux';
import { compose, lifecycle } from 'recompose';
import * as userActions from 'actions/user';
import * as uiActions from 'actions/ui';
import App from 'components/App/App';
import type { Dispatch } from 'types';

type PrevProps = {
  history: {
    action: string,
  },
  location: {
    pathname: string,
  },
};

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
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  hot(module),
  lifecycle({
    componentDidUpdate(prevProps: PrevProps) {
      const {
        history: { action },
        location: { pathname: prevPathname },
      } = prevProps;
      const {
        location: { pathname: nextPathname },
        uiActions: { closeMenu },
      } = this.props;
      const isNotPop = action !== 'POP';
      const isChengedPathname = prevPathname !== nextPathname;

      if (isNotPop && isChengedPathname) {
        window.scrollTo(0, 0);
        closeMenu();
      }
    },
  })
)(App);
