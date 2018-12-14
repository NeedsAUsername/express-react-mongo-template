import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import currentUser from './current_user_reducer';

const rootReducer = combineReducers({
  currentUser: currentUser,
  users: usersReducer
});

export default rootReducer;
