import React from 'react';
import {Link } from 'react-router-dom'
import "./style.css";
class Home extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <div className='container'>
                    <div className="container--text">Gaza Sky Geeks  Code Academy</div>
                    <div className='container-buttons'>
                        <div className="button">
                            <Link to='/students' className='links'>Current Cohort</Link>
                        </div>
                        <div className="button">
                            <a href='https://gazaskygeeks.com/code/' className='links'>Code Academy</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default Home;