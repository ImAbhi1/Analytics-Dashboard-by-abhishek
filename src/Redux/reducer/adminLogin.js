// project imports
import GLOBALS from 'helpers/constants/index';
const INITIAL_STATE = {
    isLoggedIn: false,
    isLoading: false,
    loginData: null,
    branches: null
};
const { ACTION_TYPE } = GLOBALS;
function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case ACTION_TYPE.LOGIN_RESET /* RESET LOGIN */:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                loginData: null
            };
        case ACTION_TYPE.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                loginData: action.payload
            };
        case ACTION_TYPE.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                loginData: null
            };
        case ACTION_TYPE.LOGOUT_ADMIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                loginData: null,
                isLoading: false
            };

            return {
                ...state,
                branches: action.payload
            };
        case ACTION_TYPE.ERROR:
            return { ...state, isLoading: false, programData: null };
        default:
            return state;
    }
}

export default authReducer;
