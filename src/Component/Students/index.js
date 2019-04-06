import React from 'react';
import Student  from '../Student/index'
class Students extends React.Component {
    state = {
        users: [],
    }
    componentDidMount() {
        fetch('https://api.github.com/orgs/facg6/members?access_token=3ef9f57c5e5505ba2bc016fb7c6ff4c08dd5d1fc').then(res => res.json()).then(res => {
            const users = ["AbdallahAmmar96", "AhmedAl-Almi", "alaabadra", "aminalakhsham", "Angham116", "Anies12", "AymanAlqoqa", "denaHS", "engshorouq", "Fatmasiam", "IsraaSulaiman", "Jamalat-shamallakh", "KhaderMurtaja", "mohammedmh", "naremanhilles", "ahmedisam99"]
            if (res) {
                const result = res.filter((x) => {
                    for (let i = 0; i < users.length; i++) {
                        if (x.login === users[i]) {
                            return true;
                        }
                    }
                })
                this.setState({ users: result })
            }
        })
    }
    render() {
        return this.state.users.map((stdnt) => (
                <Student individual={stdnt} user={this.users}  renderStudent={this.props.rnder} />
            )
            )
    }
}
export default Students;