import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home/index.js';
import Nav from './Component/Nav/index'

import StudentInfo from './Component/StudentInfo/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Students from './Component/Students';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Route exact path="/" component={Home} />

          <Route path="/students" render={
            component => (
              <div>
                <Nav /> 
                <Students />
              </div>
            )
          } />
          <Route path="/studentInfo" render={
            component=>(
              <div>
              <Nav />
              <StudentInfo />
            </div>
            )
             
            
          } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
