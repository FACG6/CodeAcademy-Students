import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home/index';
import Students from './Component/Students/index'
import Navbar from './Component/Nav/index';
import './App.css';

class App extends Component {
  state = {
    studntsData:[],
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/students' render={
            elements => (
              <React.Fragment>
                <Navbar />
                <Students />
              </React.Fragment>
            )
          } />
        </div>
      </Router>
    );
  }
}

export default App;
