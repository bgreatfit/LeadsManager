import axios from 'axios';
import {GET_LEADS,DELETE_LEAD, ADD_LEAD, GET_ERRORS} from '../actions/types.js';
import {returnErrors} from "./messages";
import {tokenConfig} from './auth'

//GET LEADS
export const getLeads = ()=>(dispatch, getState)=>{

    axios
        .get('/api/leads/',tokenConfig(getState))
        .then(res=>{
            dispatch({
                type:GET_LEADS,
                 payload:res.data
            })
        })
        .catch(err=>{
            dispatch(returnErrors(err.response.data,err.response.status))
        })
};
export const deleteLead = (id)=>(dispatch,getState)=>{
    axios
        .delete(`/api/leads/${id}`,tokenConfig(getState))
        .then(res=>{
            dispatch({
                type:DELETE_LEAD,
                 payload:id
            })
        })
        .catch(err=>console.log(err,'Here'));
};

export const addLead = (data)=>(dispatch,getState)=>{
    axios
        .post(`/api/leads/`,data,tokenConfig(getState))
        .then(res=>{
            dispatch({
                type:ADD_LEAD,
                 payload:res.data
            })
        })
        .catch(err=>{
            dispatch(returnErrors(err.response.data,err.response.status))

        });
};
