import axios from 'axios'
import {returnErrors} from "./messages";
import {USER_LOADING, USER_LOADED,
        AUTH_ERROR, LOGIN_FAIL,
        LOGIN_SUCCESS} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState)=>{
// User Loading
    dispatch({type: USER_LOADING});
// get token from state
   const token = getState().auth.token;
    //Headers
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    };

    // if token, set authorization with token
    config.headers['Authorization'] = `Token ${token}`;

    //load User
    axios.get('api/auth/user', config)
        .then(res=>{
            dispatch({
                type: USER_LOADING,
                payload: res.data
            })
        })
        .catch(err=>{
            returnErrors(err.response.data, err.response.status);
            dispatch({type:AUTH_ERROR});
        })


};
// CHECK TOKEN & LOAD USER
export const login = (username, password) => (dispatch, getState)=>{
    //Headers
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    };

    const body = {username:username, password:password};

    //load User
    axios.post('api/auth/login',body)
        .then(res=>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            returnErrors(err.response.data, err.response.status);
            dispatch({type:LOGIN_FAIL});
        })


};