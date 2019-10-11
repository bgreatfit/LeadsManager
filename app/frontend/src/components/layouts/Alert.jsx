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

    // componentDidUpdate(prevProps) {
    //     const {error,alert} = this.props;
    //     if(error.error !== prevProps.error){
    //         // if(error.msg.name) this.setState({name:"Error in Name Field"});
    //         // if(error.msg.email) this.setState({name:"Error in Email Field"});
    //         // if(error.msg.message) this.setState({name:"Error in Message Field"});
    //     }
    //
    //     console.log(this.props, 'Props');
    //     console.log(prevProps, 'prev');
    // }

    render() {
        return (
            <div>

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
