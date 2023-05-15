import { ENV } from './env';
const isLive = true;
const getEnvBasedUrl = () => {
    let BASE_URL = '';
    let LOGIN_URL = '';
    let IMAGE_BASE_URL = '';
    let WEB_BASE_URL = '';
    let USER_URL = '';
    let Link_URL = '';
    if (ENV === 'DEV') {
        LOGIN_URL = 'https://prepinstaprime.com/admin/wp-json/wp/v2/';
        // BASE_URL = 'http://localhost:3900/api/v2/'
        BASE_URL = 'http://65.1.94.220:3900/api/v2/';
        // USER_URL = 'http://localhost:4200/api/v2/'
        USER_URL = 'http://65.1.94.220:4200/api/v2/';
        Link_URL = 'https://assessments.prepinstaprime.com/';
    }
    if (ENV === 'PROD') {
        LOGIN_URL = 'https://prepinstaprime.com/admin/wp-json/wp/v2/';
        BASE_URL = 'https://institutionsbackend.prepinstaprime.com/api/v2/';
        USER_URL = 'https://assessmentsbackend.prepinstaprime.com/api/v2/';
        Link_URL = 'https://assessments.prepinstaprime.com/';
    }
    if (ENV === 'QA') {
        BASE_URL = 'https://prepinstaprime.com/admin/wp-json/wp/v2/';
    }
    if (ENV === 'UAT') {
        BASE_URL = 'https://prepinstaprime.com/admin/wp-json/wp/v2/';
    }
    return { BASE_URL, IMAGE_BASE_URL, WEB_BASE_URL, LOGIN_URL, USER_URL, Link_URL };
};
export default {
    LOGIN_URL: getEnvBasedUrl().LOGIN_URL,
    USER_URL: getEnvBasedUrl().USER_URL,
    BASE_URL: getEnvBasedUrl().BASE_URL,
    IMAGE_BASE_URL: getEnvBasedUrl().IMAGE_BASE_URL,
    WEB_BASE_URL: getEnvBasedUrl().WEB_BASE_URL,
    squareAppId: getEnvBasedUrl().squareAppId,
    LOCATION_ID: getEnvBasedUrl().LOCATION_ID,
    Link_URL: getEnvBasedUrl().Link_URL,

    /********************************** * URL ***********************************/

    URL: {
        LOGIN: 'collegeLogin',
        ASSESSMENT: 'assessment',
        SECTION: 'section',
        QUESTION: 'question',
        ADMIN_LOGIN: 'admin/login',
        QUESTION_LIBRARY: 'questionLibrary',
        QSNS_ADD: 'addQuestionFromLibrary',
        FILTER: 'getFilterDetails?college_id='
    },
    /****************************** ACTION TYPE********************* */
    ACTION_TYPE: {
        LOGIN_REQUEST: 'LOGIN_REQUEST',
        LOGIN_FAIL: 'LOGIN_FAIL',
        LOGIN_SUCCESS: 'LOGIN_SUCCESS',
        LOGIN_RESET: 'LOGIN_RESET',
        ADD_ASSESSMENT: 'ADD_ASSESSMENT',
        ADD_CURRENT_REPORT: 'ADD_CURRENT_REPORT',
        ADD_PERCENTILE_REPORT: 'ADD_PERCENTILE_REPORT',
        ADD_QUESTION_LIB: 'ADD_QUESTION_LIB',
        LOGOUT_USER_REQUEST: 'LOGOUT_USER_REQUEST',
        LOGOUT_ADMIN_SUCCESS: 'LOGOUT_ADMIN_SUCCESS',
        LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL',
        ADD_ASSESSMENT_LIBRARY: 'ADD_ASSESSMENT_LIBRARY',
        ADD_LEADERBOARD: 'ADD_LEADERBOARD',
        LOGOUT_CLEAR: 'LOGOUT_CLEAR',
        ADD_BRANCH: 'ADD_BRANCH'
    }
};
