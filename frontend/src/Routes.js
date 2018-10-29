import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/';
import Layout from './hoc/Layout';
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
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
