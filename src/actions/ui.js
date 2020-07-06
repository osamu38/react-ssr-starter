export function openMenu() {
  return (dispatch) => {
    dispatch({ type: 'OPEN_MENU' });
  };
}
export function closeMenu() {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_MENU' });
  };
}
export function showError(error) {
  return (dispatch) => {
    dispatch({
      type: 'SHOW_ERROR',
      payload: {
        error,
      },
    });
  };
}
export function hideError() {
  return (dispatch) => {
    dispatch({ type: 'HIDE_ERROR' });
  };
}
