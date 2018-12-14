import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import current_user from './current_user_reducer';

const rootReducer = combineReducers({
  current_user: current_user,
  users: usersReducer
});

export default rootReducer;
