import {USER_LOADING, USER_LOADED, AUTH_ERROR,
    LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS,
REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null
};


export default function (state = initialState, action){
    switch (action.type) {
        case USER_LOADING:
            return {
            ...state,
            isLoading:true
        }
        case USER_LOADED:
            return {
            ...state,
            isLoading:false,
            isAuthenticated:true,
            user: action.payload
        }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false

            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
            ...state,
            token:null,
            isLoading:false,
            use: null,
            isAuthenticated:false
        }
        default:
            return state
    }
}