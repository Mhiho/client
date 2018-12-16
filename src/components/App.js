import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import {connect} from 'react-redux';
import * as actions from '../actions';
import Testin from './Testin/Testin';
import Login from './Landing/Login';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
    // this.props.loginUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Route exact path="/testin" component={Testin} />
          <Route path="/log" component={Login} />
          <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
