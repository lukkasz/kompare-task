import axios from 'axios';
const URL = '/api/users';

export const fetchUsers = () => (dispatch) => {
  dispatch({
    type: 'FETCH_USERS_REQUEST'
  });
  
  return axios.get(URL).then((response) => {
    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      payload: response.data
    });
  }, (e) => {
    dispatch({
      type: 'FETCH_USERS_FAILURE',
      payload: 'Došlo je do greške!'
    });
  });
};

export const addUser = (newUser) => (dispatch) => (
  axios.post(URL, newUser).then((response) => {
    dispatch({
      type: 'ADD_USER_SUCCESS',
      payload: response.data
    });
  }, (e) => console.warn(e))
);

export const removeUser = (id) => (dispatch) => (
  axios({
    method: 'delete', 
    url: URL, 
    data: {id: id}
  }).then((response) => {
    dispatch({
      type: 'REMOVE_USER_SUCCESS',
      payload: response.data
    });
  })  
);