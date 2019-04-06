import React from 'react';
import { Link } from 'react-router-dom';


class Student extends React.Component {  
  render() {
    const {login, id, avatar_url } = this.props.individual;
    return (
      <React.Fragment>
        <div>
          <h3>{login}</h3>
          <img src={avatar_url} alt='Student avatar' />
          <button onClick={this.props.renderStudent.bind(this, id)}>
            {<Link to='/studentInfo'>View</Link>}
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default Student;


