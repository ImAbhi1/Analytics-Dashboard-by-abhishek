import GLOBALS from 'helpers/constants/index';
const INITIAL_STATE = {
    assessmentData: [],
    currentReport: [],
    percentileReport: [],
    questionLibrary: [],
    assessmentLibrary: [],
    leaderBoard: []
};
const { ACTION_TYPE } = GLOBALS;
function assessment(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.ADD_ASSESSMENT:
            return { ...state, assessmentData: action.response };
        case ACTION_TYPE.ADD_QUESTION_LIB:
            return { ...state, questionLibrary: action.response };
        case ACTION_TYPE.ADD_CURRENT_REPORT:
            return { ...state, currentReport: action.response };
        case ACTION_TYPE.ADD_PERCENTILE_REPORT:
            return { ...state, percentileReport: action.response };
        case ACTION_TYPE.ADD_ASSESSMENT_LIBRARY:
            return { ...state, assessmentLibrary: action.response };
        case ACTION_TYPE.ADD_LEADERBOARD:
            return { ...state, leaderBoard: action.response };
        case ACTION_TYPE.LOGOUT_CLEAR:
            return {
                ...state,
                leaderBoard: [],
                assessmentData: [],
                currentReport: [],
                percentileReport: [],
                assessmentLibrary: [],
                questionLibrary: []
            };
        default:
            return state;
    }
}
export default assessment;
