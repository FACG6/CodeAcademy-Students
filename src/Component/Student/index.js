import React from 'react'
import {Link} from 'react-router-dom'
 class Student extends React.Component{
     render(){
        return(
            <div>
                <div>
               <h3> {this.props.login}</h3>
               <img src={this.props.avatar_url} />
               <Link to='/studentInfo' username={this.props.login}>View</Link>
                </div>
                
            </div>
        )
     }
 }
    


export default Student;
 
