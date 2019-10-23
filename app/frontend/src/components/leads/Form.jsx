import React, {Component} from 'react';
import {addLead} from "../../actions/leads";
import {connect} from "react-redux";
import PropTypes from "prop-types";



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
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                  <h2 className="text-left">Add Lead</h2>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={this.handleInputChange}
                        value={name}
                      />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.handleInputChange}
                        value={email}
                      />
                    </div>

                    <div className="form-group">
                      <label>Message</label>
                      <input
                        type="text"
                        className="form-control"
                        name="message"
                        onChange={this.handleInputChange}
                        value={message}
                      />
                    </div>
                  </form>
                </div>
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