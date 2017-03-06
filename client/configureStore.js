import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import users from './reducers';

const configureStore = () => {
  const middlewares = [thunk];
  
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());  
  }
  
  return createStore(
    users,
    applyMiddleware(...middlewares)
  );
  
};


export default configureStore;