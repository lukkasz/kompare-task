const users = (state = [], action) => {
  switch (action.type) {

    case 'FETCH_USERS_SUCCESS':
      return action.payload;

    case 'ADD_USER_SUCCESS':
      return [...state, action.payload];

    case 'REMOVE_USER_SUCCESS':
      const index = state.findIndex((user)=>{
        return user.id === action.payload.id;
      });
      return [
        ...state.slice(0,index),
        ...state.slice(index + 1 )
      ];

    default: 
      return state;
  }
};

export default users;