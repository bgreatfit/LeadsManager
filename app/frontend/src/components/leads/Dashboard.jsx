import React, {Fragment} from 'react'
import Leads from './Leads.jsx'
import Form from './Form.jsx'


export default function  Dashboard(props){
    console.log(props,'Propa');
    return (
        <Fragment>
            <Form />
            <Leads name={'Add Leads'} />
        </Fragment>
    )
}