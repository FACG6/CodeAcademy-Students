import React from 'react';
import Student from '../Student/index';
import './style.css'

class Students extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="users--container">
        <div className="current--cohort-container">
        <h1 className="current--cohort-text">Current Cohort Students :</h1>
        </div>
        <div className="students">
          {this.props.users.map((stdnt) => (
            <Student {...stdnt} renderStudent={this.props.rnder} />
          )
          )}</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Students;