import {USER_LOADING, USER_LOADED, AUTH_ERROR} from '../actions/auth'

const initialState = {
    token:"",
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
            isLoading:true
        }
        case AUTH_ERROR:
            return {
            ...state,
            isLoading:true
        }
        default:
            return state
    }
}