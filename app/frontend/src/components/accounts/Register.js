import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import  {connect} from  'react-redux'
import {Redirect} from 'react-router-dom'
import  {register} from '../../actions/auth'

class Register extends Component {
     state = {
        username: "",
        email: "",
        password: "",
        password2: "",
    };
       static  propTypes = {
          register: PropTypes.func.isRequired,
          isAuthenticated: PropTypes.bool,
        };



      handleOnSubmit = e => {
        e.preventDefault();
        this.props.register(this.state);
        this.setState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

      };

      handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
          return <Redirect to="/" />;
        }
        const {username, email,password, password2} = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                  <h2 className="text-center">Register</h2>
                  <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleInputChange}
                        value={username}
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
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.handleInputChange}
                        value={password}
                      />
                    </div>
                      <div className="form-group">
                      <label>Password Confirmation</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password2"
                        onChange={this.handleInputChange}
                        value={password2}
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                    <p>
                      Have an account? <Link to="/login">Login</Link>
                    </p>
                  </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(state){
     return {isAuthenticated:state.auth.isAuthenticated}

};

export default connect(mapStateToProps, {register})(Register);
