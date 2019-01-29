import { combineReducers } from 'redux';
import errorReducer from './reducers/errorReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    user: userReducer
});