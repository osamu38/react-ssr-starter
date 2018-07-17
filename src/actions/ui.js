/* @flow */

import type { Dispatch, ThunkAction } from 'types';

export function openMenu(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'OPEN_MENU' });
  };
}
export function closeMenu(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'CLOSE_MENU' });
  };
}
export function showError(error: string): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'SHOW_ERROR',
      payload: {
        error,
      },
    });
  };
}
export function hideError(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'HIDE_ERROR' });
  };
}
