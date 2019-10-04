/* @flow */

import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withExtendRouter from 'components/withExtendRouter';
import customPush from 'utils/customPush';
import type { PageProps } from 'types';

type Props = {
  href: string,
  children: any,
};

function mapStateToProps<S>(state: S): { state: S } {
  return { state };
}
function mapDispatchToProps() {
  // $FlowFixMe
  return (dispatch: Dispatch) => ({
    dispatch,
  });
}

function PreloadLink(props: PageProps & Props) {
  const {
    href,
    children,
    history: { push },
    dispatch,
    state,
  } = props;

  return React.cloneElement(children, {
    href,
    onClick: async e => {
      e.preventDefault();
      await customPush(href, push, dispatch, state);
    },
  });
}

const enhancers = [
  withExtendRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
];

export default compose(...enhancers)(PreloadLink);
