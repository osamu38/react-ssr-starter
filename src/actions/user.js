import axios from 'axios';

export const fetchUser = (id) => {
  return (dispatch) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch({
          type: 'FETCH_USER',
          payload: res.data,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
};
export const fetchUsers = () => {
  return (dispatch) =>
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch({
          type: 'FETCH_USERS',
          payload: res.data,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
};
