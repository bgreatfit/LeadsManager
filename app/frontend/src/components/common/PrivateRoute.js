// @flow
import  React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";


//
// type
// Props = {
//
// };
const PrivateRoute = ({component:Component, auth, ...rest}) => {
    console.log({component:Component, auth, ...rest}, "private");
    console.log({...rest}, "rest");
    return (
        <Route
            {...rest}
            render={(props)=>{
                console.log(props,'popo');
            if(auth.isLoading){
                return <h2> loading</h2>
            }else if(!auth.isAuthenticated){
                return <Redirect to="/Login" />
            }else{
                return <Component {...props}/>
            }

        }}/>
    );
};
const mapStateToProps = (state)=>{
    return {auth:state.auth}
};

export default connect(mapStateToProps)(PrivateRoute)