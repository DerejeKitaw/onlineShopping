import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/Layout';
// import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import './App.css';

class App extends Component {
  // componentDidMount() {
  //   axios.get('/api/category/all').then(response => {
  //     console.log(response);
  //   });
  // }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="container">
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
