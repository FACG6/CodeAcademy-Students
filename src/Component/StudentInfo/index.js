import React from 'react';
import { Link } from 'react-router-dom';
import getStudents from '../helpers/getStudent';
require('dotenv').config();
class StudentInfo extends React.Component {
  state = {
    name:'',
    avatar_url:'',
    followers: 0,
    following: 0,
    organizations:'',
    repos_No :0 ,
    repo_url:[]
  }
  getstdnt = (x) => {
    return getStudents(x).then(res => res.json())
  }
  componentDidMount() {
    if (this.props.userInfo[0]) {
      const url = 'https://api.github.com/users/';
      const info = this.props.userInfo[0];
      
      this.getstdnt(`${url}${info.login}?access_token=${process.env.REACT_APP_TOKEN }`).then(res => {
        this.setState({ 
          followers: res.followers ,
          name:res.name,
          following:res.following,
          avatar_url:res.avatar_url

         })
      })
      this.getstdnt(`${url}${info.login}/repos?access_token=${process.env.REACT_APP_TOKEN }`).then(res => {
        let repos_url =[];
        res.forEach(repo=>{
          repos_url.push(repo.html_url)
        })
        this.setState({ 
          repos_No :repos_url.length,
          repo_url:repos_url
         })
      })
    
      this.getstdnt(`${url}${info.login}/orgs/access_token=${process.env.REACT_APP_TOKEN }`).then(res => {
        let string = ':';
        res.forEach(x => {
          string += `, ${x.login}`;
        })
        this.setState({ organizations: string })
      })
    }
  }
  render() {
    if (this.state.name && this.state.repos_No) {
      return (
        <div>
          <h2>{this.state.name}</h2>
          <img src={this.state.avatar_url} alt='Student avatar' />
          <p>Followers {this.state.followers}</p>
          <p>Following {this.state.following}</p>
          <p>Organizations{this.state.organizations}</p>
          <p>Repos No. :{this.state.repos_No}</p>
          
        </div>
      )
    } else {
      return <h3>click <Link to='/students'>here</Link> to select a Student..</h3>;
    }
  }
}
export default StudentInfo;
