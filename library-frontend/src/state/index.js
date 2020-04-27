import { combineReducers } from 'redux';
import { booksReducer } from './books';
import { booksLocationsReducer } from './books-locations/index';
import { ordersReducer } from './orders/index';
import { usersReducer } from './users/index';
import { sessionUserReducer } from './session-user/index';

const rootReducer = combineReducers({
  books: booksReducer,
  booksLocations: booksLocationsReducer,
  orders: ordersReducer,
  users: usersReducer,
  sessionUser: sessionUserReducer
});

export default rootReducer;
