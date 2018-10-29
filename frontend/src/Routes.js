import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Index';
import axios from 'axios';

import './App.css';

class Routes extends Component {
  componentDidMount() {
    axios.get('/api/category/all').then(response=>{
      console.log(response);
    })
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    );
  }
}

export default Routes;
