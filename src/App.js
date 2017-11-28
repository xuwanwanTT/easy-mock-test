import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  render() {
    axios.get('https://www.easy-mock.com/mock/5a1d898d8e6ddb24964d0a02/user/xww').then(res=>{
      console.log(res.data)
    });
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
