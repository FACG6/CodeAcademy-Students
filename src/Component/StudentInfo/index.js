import React from 'react'
import { Redirect } from 'react-router-dom';

class StudentInfo extends React.Component {
  render() {
    if (this.props.userInfo[0]) {
      const { login, avatar_url, followers_url, following_url, organizations_url, repos_url, subscriptions_url, url } = this.props.userInfo[0];
      return (
        <div>
            <h2>{login}</h2>
           <img src={avatar_url} alt='Student avatar' />
        </div>
      )
    }else{
    return <h3>Select a Student to view..</h3>;
   } }
}
export default StudentInfo;