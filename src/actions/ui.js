export const openMenu = () => {
  return (dispatch) => {
    dispatch({ type: 'OPEN_MENU' });
  };
};
export const closeMenu = () => {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_MENU' });
  };
};
export const showError = (error) => {
  return (dispatch) => {
    dispatch({
      type: 'SHOW_ERROR',
      payload: {
        error,
      },
    });
  };
};
export const hideError = () => {
  return (dispatch) => {
    dispatch({ type: 'HIDE_ERROR' });
  };
};
