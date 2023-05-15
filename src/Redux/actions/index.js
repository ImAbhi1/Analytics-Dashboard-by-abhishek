import axios from 'axios';
import GLOBALS from '../constants/index';
import Swal from 'sweetalert2';
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
const { ACTION_TYPE, URL, LOGIN_URL } = GLOBALS;

export function login(logindata) {
  return async (dispatch) => {
    dispatch({ type: ACTION_TYPE.LOGIN_RESET });
    dispatch({ type: ACTION_TYPE.LOGIN_REQUEST });
    try {
      let params = {
        userEmail: logindata.email,
        userPass: logindata.password
      };
      const json = await axios.post(LOGIN_URL + URL.LOGIN, {
        userEmail: params.userEmail, userPass: params.userPass,
        headers: {
          'content-type': 'application/json'
        }
      })
     
      if (json.data.status == 'pass') {
        
        dispatch({
          type: ACTION_TYPE.LOGIN_SUCCESS,
          payload: json.data.user_data,
        });
       
        dispatch(getbranch())

      } else {
        if (json.data.status == 'fail') {
          Swal.fire({
            text: json.data.msg,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonColor: "red",
            width: 100 > 1000 ? '' : '60vw',
          });
        }
      }
    } catch (error) {
      dispatch({
        type: ACTION_TYPE.ERROR,
        payload: error.problem === 'NETWORK_ERROR' ? 'CHECK_NETWORK' : 'TRY_AGAIN',
      });
      dispatch({
        type: ACTION_TYPE.LOGIN_FAIL,
        payload: error,
      });
    }
  };
}



