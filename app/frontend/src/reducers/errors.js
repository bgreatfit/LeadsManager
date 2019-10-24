import {GET_ERRORS} from '../actions/types';

const initialState = {
    msg:{},
    status: null
};

export default function (state=initialState, action) {
                console.log(action, 'enter');

    switch(action.type){
        case GET_ERRORS:
            console.log('Reducedr');
            return{
            msg: action.payload.msg,
            status: action.payload.status,
        }
        default:
            {
                return  state;
             }
    }

}