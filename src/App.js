import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home/index.js';
 import Nav from './Component/Nav/index'
 import Students from './Component/Students/index'
// import Student from './Component/Student/index'
import {BrowserRouter,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <div className="App">
      <Route  exact path="/" component={Home} />
      <Route  path="/students" component={Nav} />
       <Route  path="/students" component={Students} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
