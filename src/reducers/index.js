import tokenReducer from './token';
import loggedReducer from './isLogged';
import personal_info_Reducer from './personal_info';
import education_info_Reducer from './education_info';
import personality_info_Reducer from './personality_info';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    token : tokenReducer,
    isLogged : loggedReducer,
    personal : personal_info_Reducer,
    education : education_info_Reducer,
    personality: personality_info_Reducer,
});
export default allReducer;