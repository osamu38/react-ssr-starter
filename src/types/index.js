/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';
import type { Reducers } from 'reducers';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line no-undef
export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line no-undef

export type Action =
  | { type: 'LOGOUT' }
  | { type: 'LOGGED_IN' }
  | {
      type: 'FETCH_USER',
      payload: Object,
    }
  | {
      type: 'FETCH_USERS',
      payload: Array<Object>,
    }
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'HIDE_ERROR' }
  | {
      type: 'SHOW_ERROR',
      payload: Object,
    };
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => ReduxState;
export type Store = ReduxStore<ReduxState, Action>;
