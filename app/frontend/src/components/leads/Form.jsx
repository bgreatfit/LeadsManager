import React, {Component} from 'react';
import {addLead} from "../../actions/leads";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";



export class Form extends Component {
    constructor(prop){
        super(prop);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
                name:"",
                email:"",
                message:""
            };
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    };
    handleSubmit = (event)=> {
        event.preventDefault();
       const data = this.state;
       console.log(data);
       this.props.addLead(data);
       this.setState({
                name:"",
                email:"",
                message:""
            });
    };
    handleInputChange(event) {
        this.setState({[event.target.name]:event.target.value})
  }
    render() {
        const{name,email,message} = this.state;
        return (
            <div>
                <h1>Add  Leads</h1>
                <form className="form-group-sm form-control" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleInputChange} value={name}/>
                    <input type="email" name="email" onChange={this.handleInputChange} value={email}/>
                    <input type="text" name="message" onChange={this.handleInputChange} value={message}/>
                    <button> SUBMIT</button>
                </form>
            </div>
        );
    }
}


// function mapDispatchToProps(dispatch) {
//   return {
//     leads: lead => dispatch(postLead(lead))
//   };
// }

export default connect(null,{addLead})(Form);