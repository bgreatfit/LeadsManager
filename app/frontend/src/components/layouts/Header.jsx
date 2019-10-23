import React, {Component} from 'react';;
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from '../../actions/auth'

export class Header extends Component {

        static propTypes = {
            auth: PropTypes.object.isRequired
        };
    render(){
        const {isAuthenticated, user} = this.props.auth;
        const authLink = (
             <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <link className="nav-link" to="/">Home <span className="sr-only">(current)</span></link>
                        </li>
                        <button className="nav-item btn btn-info btn-sm" >
                            LOGOUT
                        </button>
                    </ul>
        );
        const guestLink = (
             <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
        );
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Leads Manager</a>
                   (isAuthenticated)? authLink:guestLink;
                </div>
            </nav>
        )


    }
}
const mapStateToProps = state=>(
    {
        auth: state.auth
    }
);
export default connect(mapStateToProps, {logout})(Header)