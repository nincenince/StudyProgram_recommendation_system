import tokenReducer from './token';
import loggedReducer from './isLogged';
import personal_info_Reducer from './personal_info';
import education_info_Reducer from './education_info';
import personality_info_Reducer from './personality_info';
import comefromReducer from './comefrom';
import adminlockReducer from './isAdmin';
import recommend_info_reducer from './recommend_info'
import recommend_payload_reducer from './recPayload'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    token : tokenReducer,
    isLogged : loggedReducer,
    personal : personal_info_Reducer,
    education : education_info_Reducer,
    personality: personality_info_Reducer,
    comefrom: comefromReducer,
    isAdmin: adminlockReducer,
    recommend: recommend_info_reducer,
    recPayload: recommend_payload_reducer
});
export default allReducer;