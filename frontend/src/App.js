import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('/api/category/all').then(response=>{
      console.log(response)
    })
  }
  render() {
    return (
      <div className="App">
        <div>App works</div>
      </div>
    );
  }
}

export default App;
