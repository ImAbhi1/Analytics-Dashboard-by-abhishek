import { combineReducers } from 'redux';

// reducer import
import authReducer from './adminLogin';
import assessment from './assessment';
// ==============================|| COMBINE REDUCER ||============================== //
const reducer = combineReducers({
    authReducer: authReducer,
    assessment: assessment
});

export default reducer;
