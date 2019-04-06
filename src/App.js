import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home/index';
import Students from './Component/Students/index'
import Navbar from './Component/Nav/index';
import './App.css';

class App extends Component {
  state = {
    studntsData: [],
    user:{},
  }

  addUsers = (received) => {
    this.setState({ studntsData: received });
  }
  rnder = (rcevdId) => {
    this.setState({ user: this.state.users.map(user => {
      if(user.id === rcevdId ){
        return user;
      }
    }) })
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
                <Students users={this.state.studntsData} addUsers={this.addUsers} rnder={this.rnder} />
              </React.Fragment>
            )
          } />
          <Route path='/studentInfo'>
            <React.Fragment>
              
            </React.Fragment>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
