import React from 'react';
import Student from '../Student/index';


class Students extends React.Component {

  render() {
    return this.props.users.map((stdnt) => (
      <Student individual={stdnt}
        renderStudent={this.props.rnder} addUser={this.props.addUser} />
    )
    )
  }
}
export default Students;