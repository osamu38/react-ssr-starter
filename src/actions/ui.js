/* @flow */

import type { Dispatch } from 'types';

export function openMenu() {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'OPEN_MENU' });
  };
}
export function closeMenu() {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'CLOSE_MENU' });
  };
}
export function showError(error: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'SHOW_ERROR',
      payload: {
        error,
      },
    });
  };
}
export function hideError() {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'HIDE_ERROR' });
  };
}
