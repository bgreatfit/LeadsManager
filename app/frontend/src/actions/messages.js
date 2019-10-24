import {GET_ERRORS} from "./types";

export const returnErrors = (msg,status)=>{
    console.log(msg,status,'here message');
    return {
        type: GET_ERRORS,
        payload:{msg,status}

    }
};