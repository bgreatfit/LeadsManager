import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                  <h2 className="text-center">Login</h2>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.onChange}
                        value={username}
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                    <p>
                      Don't have an account? <Link to="/register">Register</Link>
                    </p>
                  </form>
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
