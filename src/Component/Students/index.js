import React from 'react';

class Students extends React.Component{
    state = {
        users :[],
    }
    componentDidMount(){
    
        fetch('https://api.github.com/orgs/facg6/members?access_token=3ef9f57c5e5505ba2bc016fb7c6ff4c08dd5d1fc').then(res => res.json()).then(res => this.setState(
            {users:res} ))
            console.log(this.state.users);
    }
    display = () => {
        console.log(this.state.users);
    }
    render(){
        return(
            <div>
            <h1>Studedtdyents</h1>
            <button onClick={this.display}>button</button>
        </div>
            )
    }
}
export default Students;