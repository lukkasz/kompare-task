import {combineReducers} from 'redux';
import users from './users';
import fetching from './fetching';

const usersReducer = combineReducers({
  users,
  fetching
});

export default usersReducer;