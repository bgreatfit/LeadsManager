import React, {Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header.jsx';
import Clock from './layouts/Clock.jsx';
import Dashboard from "./leads/Dashboard.jsx";
import {FilterableProductTable} from "./leads/Product.jsx";
import {Provider} from 'react-redux';
import store from '../store';
import Alert from "./layouts/Alert.jsx";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import {loadUser} from "../actions/auth";
class App extends Component {
    componentDidMount() {
        console.log('did mount');
        store.dispatch(loadUser());
    }

    render(){
      return(
          <Provider store={store}>
              <Router>
                  <Fragment>
                       <Header/>
                       <Alert/>
                       <Clock/>
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                            </Switch>
                        </div>
                      <FilterableProductTable products={this.props.products}/>
                  </Fragment>
              </Router>
          </Provider>


      )
  }
}
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('app'));
