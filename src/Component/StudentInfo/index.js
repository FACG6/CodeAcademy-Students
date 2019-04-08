import React from 'react';
import { Link } from 'react-router-dom';
import getStudents from '../helpers/getStudent';
import { Redirect } from 'react-router-dom'
import './student.css';
require('dotenv').config();
class StudentInfo extends React.Component {
  state = {
    name: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    organizations: '',
    repos_No: 0,
    repo_url: [],
    res: false,
    error: false
  }
  getstdnt = (x) => {
    return getStudents(x).then(res => 
      {if(res == Error){
      return;
      }
      else{
        return res.json()
    }}
    
    )
  }
  componentDidMount() {
    if (this.props.userInfo[0]) {
      const url = 'https://api.github.com/users/';
      const info = this.props.userInfo[0];
       this.getstdnt(`${url}${info.login}?access_token=${process.env.REACT_APP_TOKEN}`).then(res => {
        if (res) {
          return this.setState({
            followers: res.followers,
            name: res.name,
            following: res.following,
            avatar_url: res.avatar_url,
            res: true

          })
        }else return 
      })
      this.getstdnt(`${url}${info.login}/repos?access_token=${process.env.REACT_APP_TOKEN}`).then(res => {
        if(res)
       { let repos_url = [];
        res.forEach(repo => {
          repos_url.push(repo.html_url)
        })
        this.setState({
          repos_No: repos_url.length,
          repo_url: repos_url
        })} else return

      })

      this.getstdnt(`${url}${info.login}/orgs/access_token=${process.env.REACT_APP_TOKEN }`).then(res => {
        let string = ':';
        if(res){
        res.forEach(x => {
          string += `, ${x.login}`;
        })}
        this.setState({ organizations: string })
      })
    }
  }
  render() {
    
    if (this.state.name && this.state.repos_No) {
      return (
        <div className='card'>
        <img className='studentImg' src={this.state.avatar_url} alt='Student avatar' />
        <h2 className='studentName'>{this.state.name}</h2>
        <p className='studentName'>Followers {this.state.followers}</p>
        <p className='studentName'>Following {this.state.following}</p>
        <p className='studentName'>Organizations{this.state.organizations}</p>
        <p>Repos No. :{this.state.repos_No}</p>
        <ul>
          {this.state.repo_url.map((repo, index) => <li> Repo No {index}:{repo}</li>)}
        </ul>
      </div>
      )
    } else if (this.state.error)
      return <Redirect to='/Errorpage' />
    else {
      return <div>loading  {this.state.res}</div>
    }
  }
}
export default StudentInfo;
