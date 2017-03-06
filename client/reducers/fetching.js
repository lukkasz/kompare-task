import { combineReducers } from 'redux';

  
const isFetching = (state=false, action) => {
  switch(action.type) {
    case 'FETCH_USERS_REQUEST':
      return true;
    case 'FETCH_USERS_SUCCESS':
    case 'FETCH_USERS_FAILURE':
      return false;
    default:
      return state;
  }
};

const errorMessage = (state=null, action) => {
  switch(action.type) {
    case 'FETCH_USERS_FAILURE':
      return action.payload;
    case 'FETCH_USERS_REQUEST':
    case 'FETCH_USERS_SUCCESS':
      return null;
    default:
      return state;
  }
};
  
const fetching = combineReducers({
    isFetching,
    errorMessage
  });
  


export default fetching;