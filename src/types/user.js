/* @flow */

export type Address = {
  city: string,
  geo: {
    lat: string,
    lng: string,
  },
  street: string,
  suite: string,
  zipcode: string,
};
export type Company = {
  bs: string,
  catchPhrase: string,
  name: string,
};
export type User = {
  address: Address,
  company: Company,
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
};
export type UserState = {
  user: User,
  userList: User[],
  status: {
    isLoggedIn: boolean,
    isFetchedUserList: boolean,
  },
};
export type UserAction =
  | { type: 'LOGOUT' }
  | { type: 'LOGGED_IN' }
  | {
      type: 'FETCH_USER',
      payload: User,
    }
  | {
      type: 'FETCH_USERS',
      payload: User[],
    };
