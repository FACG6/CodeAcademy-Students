import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/index';
import Students from './Component/Students/index'
import './App.css';
import Nav from './Component/Nav/index'
import StudentInfo from './Component/StudentInfo/index'
import getStudents from './Component/helpers/getStudent';
import Errorpage from './Component/Errorpage/index';
import { Redirect } from 'react-router-dom';
require('dotenv').config();

const token = process.env.REACT_APP_TOKEN;
class App extends Component {
  state = {
    studntsData: [],
    user: [],
    error: false,
  }
  componentDidMount() {
    console.log('Token',token)
    getStudents(`https://api.github.com/orgs/facg6/members?access_token=${token}`)
      .then(res => res.json())
      .then(res => {
        const users = [
          "AbdallahAmmar96",
          "AhmedAl-Almi",
          "alaabadra",
          "aminalakhsham",
          "Angham116",
          "Anies12",
          "AymanAlqoqa",
          "denaHS",
          "engshorouq",
          "Fatmasiam",
          "IsraaSulaiman",
          "Jamalat-shamallakh",
          "KhaderMurtaja",
          "mohammedmh",
          "naremanhilles",
          "ahmedisam99"
        ]
        if (res) {
          const result = res.filter((x) => {
            for (let i = 0; i < users.length; i++) {
              if (x.login === users[i]) 
                return true;
            }
          
          })
          this.setState({ studntsData: result })
        }
      })
      .catch(() => {
        console.log(`Error, reload the page..`);
        return this.setState({ error: true });
      })
  }

  rnder = (rcevdId) => {
    this.setState({
      user: this.state.studntsData.map(user => {
        if (user.id === rcevdId) {
          return user;
        } else {

        }
      }).filter(x => x),
    })
  }
  redirct = () => {
    if (this.state.error) {
      this.setState({ error: false });
      return <Redirect to='/Errorpage' />;
  }
}

  render() {
    if (!this.state.studntsData) {
      return <h3>Loading</h3>;
    }
    this.redirct()
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/students' render={
              () => (
                <React.Fragment>
                  <Nav />
                  <Students users={this.state.studntsData} rnder={this.rnder} />
                </React.Fragment>
              )
            } />
            <Route path='/studentInfo' render={() => (
              <React.Fragment>
                <div>
                  <Nav />
                  <StudentInfo userInfo={this.state.user} />
                </div>
              </React.Fragment>
            )} />
            <Route path='/Errorpage' component={Errorpage} />
            <Route render={() => (<Redirect to='/Errorpage' />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
