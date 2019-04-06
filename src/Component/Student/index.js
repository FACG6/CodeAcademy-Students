import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import getStudent from '../helpers/getStudent';


class Student extends React.Component {
  render() {
    console.log(546451651220);
    const { id } = this.props.individual;
    return (
      <React.Fragment>
      <div>
        <button onChange={this.props.renderStudent.bind(this, id)}>{<Link to='/studentInfo'>Link</Link> }</button>
      </div>
      </React.Fragment>
    )
  }
}
export default Student;