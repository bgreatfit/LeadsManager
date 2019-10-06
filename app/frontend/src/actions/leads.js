import axios from 'axios';
import {GET_LEADS,DELETE_LEAD, ADD_LEAD} from '../actions/types.js';

//GET LEADS
export const getLeads = ()=>dispatch=>{
    axios
        .get('/api/leads/')
        .then(res=>{
            dispatch({
                type:GET_LEADS,
                 payload:res.data
            })
        })
        .catch(err=>console.log(err))
};
export const deleteLead = (id)=>dispatch=>{
    axios
        .delete(`/api/leads/${id}`)
        .then(res=>{
            dispatch({
                type:DELETE_LEAD,
                 payload:id
            })
        })
        .catch(err=>console.log(err,'Here'));
};

export const addLead = (data)=>dispatch=>{
    axios
        .post(`/api/leads/`,data)
        .then(res=>{
            dispatch({
                type:ADD_LEAD,
                 payload:res.data
            })
        })
        .catch(err=>console.log(err,'Here'));
};
