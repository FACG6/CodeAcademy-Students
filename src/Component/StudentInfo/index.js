import React from 'react';
import { Link } from 'react-router-dom';
import getStudents from '../helpers/getStudent';

class StudentInfo extends React.Component {
  state = {
    followers: 0,
    following: 0,
    organizations:'',
  }

  getstdnt = (x) => {
    return getStudents(x).then(res => res.json())
      }
  


  componentDidMount() {
    if (this.props.userInfo[0]) {
      const url = 'https://api.github.com/users/';
      const info = this.props.userInfo[0];
      this.getstdnt(`${url}${info.login}`).then(res => {
        this.setState({ followers: res.followers })
      })
      this.getstdnt(`${url}${info.login}`).then(res => {
        this.setState({ following: res.following })
      })
      this.getstdnt(`${url}${info.login}/orgs`).then(res => {
        let string = ':';
        res.forEach( x => {
          string += `, ${x.login}`;
         }) 
        this.setState({organizations: string})
      })
    }
  }

  render() {
    if (this.props.userInfo[0]) {
      const { login, avatar_url, organizations_url, repos_url, subscriptions_url} = this.props.userInfo[0];
      return (
        <div>
          <h2>{login}</h2>
          <img src={avatar_url} alt='Student avatar' />
          <p>Followers {this.state.followers}</p>
          <p>Following {this.state.following}</p>
          <p>Organizations{this.state.organizations}</p>
        </div>
      )
    } else {
      return <h3>click <Link to='/students'>here</Link> to select a Student..</h3>;
    }
  }
}
export default StudentInfo;