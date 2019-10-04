/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';
import typeof { bindActionCreators } from 'redux';
// import type { Match } from 'react-router-dom';
import type { Reducers } from 'reducers';
import type { UserAction } from 'types/user';
import type { UiAction } from 'types/ui';
import type { ExtendRouterProps } from 'components/withExtendRouter';
import * as userActions from 'actions/user';
import * as uiActions from 'actions/ui';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>;
export type Action = UserAction | UiAction;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Action[]
) => any;
export type GetState = () => ReduxState;
export type Store = ReduxStore<ReduxState, Action>;
export type DispatchProps = {
  dispatch: Dispatch,
  actions: {
    uiActions: $Call<bindActionCreators, typeof uiActions, Dispatch>,
    userActions: $Call<bindActionCreators, typeof userActions, Dispatch>,
  },
};
export type StateProps = ExtendRouterProps & { state: ReduxState };
export type PageProps = DispatchProps & StateProps;
export type Ctx = {
  dispatch: Dispatch,
  state: ReduxState,
  params: any,
  query: any,
  route: any,
}
