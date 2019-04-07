import React from 'react';
import { Link } from 'react-router-dom';
import getStudents from '../helpers/getStudent';

import './style.css'

class Student extends React.Component {
  
 
  
  render() {
    const {login, id, avatar_url } = this.props
    return (
      <React.Fragment>
        <div className="user-container">
          <img src={avatar_url} alt='Student avatar' className="studen-img" />
          <p className="login-name">{login}</p>
          <button onClick={this.props.renderStudent.bind(this,id)} className="view-button">
            {<Link to='/studentInfo' className="view-link">View</Link>}
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default Student;


