import axios from 'axios'
import {returnErrors} from "./messages";
import {USER_LOADING, USER_LOADED,AUTH_ERROR,
    LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./types";

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

// CHECK LOGIN USER
export const login = (data) => (dispatch)=>{

    //load User
    axios.post('api/auth/login',data)
        .then(res=>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err.response.data, err.response.status, 'Login error');
            returnErrors(err.response.data, err.response.status);
            dispatch({type:LOGIN_FAIL});
        })


};
// LOGOUT USER
export const logout = () => (dispatch, getState)=>{
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
    axios.post('api/auth/logout',null, config)
        .then(res=>{
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err.response.data, err.response.status, 'Login error');
            returnErrors(err.response.data, err.response.status);
            dispatch({type:LOGOUT_FAIL});
        })


};

