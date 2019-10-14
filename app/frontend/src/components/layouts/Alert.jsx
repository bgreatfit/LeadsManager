import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Alert extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        }

    }
    static propTypes = {
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        if(error !== prevProps.error){
            if(error.msg.name) this.setState({name:"Error in Name Field"});
            if(error.msg.email) this.setState({email:"Error in Email Field"});
            if(error.msg.message) this.setState({message:"Error in Message Field"});
        }

        console.log(this.props, 'Props');
        console.log(prevProps, 'prev');
    }

    render() {
        const  errors = this.props.error.msg;
        console.log(Object.values(errors),'Error');
        console.log(errors,'Message');

        return (
            <div>
                {/*{errors.map(error => (*/}
                {/*  <p key={error}>Error: {error}</p>*/}
                {/*))}*/}

            <p>{this.state.name}</p>
            <p>{this.state.email}</p>
            <p>{this.state.message}</p>
            <p>{this.props.error.status}</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>(
    {
         error : state.errors
    }
);


export default connect(mapStateToProps)(Alert);
