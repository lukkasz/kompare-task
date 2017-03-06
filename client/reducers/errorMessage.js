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
}