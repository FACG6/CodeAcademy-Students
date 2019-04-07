import React from 'react';
import { Link } from 'react-router-dom';
class StudentInfo extends React.Component {
  render() {
    if (this.props.userInfo) {
      const { login, avatar_url, followers_url, following_url, organizations_url, repos_url, subscriptions_url, url } = this.props.userInfo[0];
      return (
        <div>
            <h2>{login}</h2>
           <img src={avatar_url} alt='Student avatar' />
        </div>
      )
    }else{
    return <h3>click <Link to='/students'>here</Link> to select a Student to view..</h3>;
   } }
}
export default StudentInfo;