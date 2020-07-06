import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withExtendRouter from 'components/withExtendRouter';
import customPush from 'utils/customPush';

function mapStateToProps(state) {
  return { state };
}
function mapDispatchToProps() {
  return (dispatch) => ({
    dispatch,
  });
}

function PreloadLink(props) {
  const {
    href,
    children,
    history: { push },
    dispatch,
    state,
  } = props;

  return React.cloneElement(children, {
    href,
    onClick: async (e) => {
      e.preventDefault();
      await customPush(href, push, dispatch, state);
    },
  });
}

const enhancers = [
  withExtendRouter,
  connect(mapStateToProps, mapDispatchToProps),
];

export default compose(...enhancers)(PreloadLink);
