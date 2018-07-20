/* @flow */

import type { UiState, UiAction } from 'types/ui';

export const initialState = {
  isOpenMenu: false,
  error: '',
};
export default (state: UiState = initialState, action: UiAction) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        isOpenMenu: true,
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        isOpenMenu: false,
      };
    case 'SHOW_ERROR':
      return {
        ...state,
        ...action.payload,
      };
    case 'HIDE_ERROR':
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
