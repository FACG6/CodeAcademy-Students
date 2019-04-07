import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home/index';
import Students from './Component/Students/index'
import './App.css';
import Nav from './Component/Nav/index'
import StudentInfo from './Component/StudentInfo/index'
import token from './token';

class App extends Component {
  state = {
    studntsData: [],
    user: [],
  }
  componentDidMount() {
    fetch(`https://api.github.com/orgs/facg6/members?access_token=${token}`)
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
              if (x.login === users[i]) {
                return true;
              }
            }
          })
          this.setState({ studntsData: result })
        }
      }).catch(() => {
        throw new Error(`Error, reload the page..`)
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
  render() {
    if (!this.state.studntsData) {
      return <h3>Loading</h3>;
    }
    return (
      <Router>
        <div className="App">
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
        </div>
      </Router>
    );
  }
}

export default App;
