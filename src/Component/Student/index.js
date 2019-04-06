import React from 'react';
import { Link } from 'react-router-dom';


class Student extends React.Component {
  render() {
    console.log(546451651220);
    const { id, avatar_url } = this.props.individual;
    return (
      <React.Fragment>
        <div>
          <h3> {this.props.login}</h3>
          <img src={avatar_url} alt='Student avatar' />
          <button onChange={this.props.renderStudent.bind(this, id)}>{<Link to='/studentInfo'>View</Link>}</button>
        </div>
      </React.Fragment>
    )
  }
}
export default Student;


