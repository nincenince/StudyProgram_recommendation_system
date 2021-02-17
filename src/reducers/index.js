import tokenReducer from './token';
import loggedReducer from './isLogged';
import personal_info_Reducer from './personal_info';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    token : tokenReducer,
    isLogged : loggedReducer,
    personal : personal_info_Reducer,
});
export default allReducer;