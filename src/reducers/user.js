export const initialState = {
  user: {
    address: {
      city: '',
      geo: {
        lat: '',
        lng: '',
      },
      street: '',
      suite: '',
      zipcode: '',
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: '',
  },
  userList: [],
  status: {
    isFetchedUserList: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'FETCH_USERS':
      return {
        ...state,
        userList: action.payload,
        status: {
          ...state.status,
          isFetchedUserList: true,
        },
      };
    default:
      return state;
  }
};
