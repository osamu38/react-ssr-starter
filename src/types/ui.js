/* @flow */

export type UiState = {
  isOpenMenu: boolean,
  error: string,
};
export type UiAction =
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'HIDE_ERROR' }
  | {
      type: 'SHOW_ERROR',
      payload: {
        error: string,
      },
    };
