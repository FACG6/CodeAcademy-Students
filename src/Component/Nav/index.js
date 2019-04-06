import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar(){
    return (
        <header>
        <img src={'https://gazaskygeeks.com/wp-content/uploads/2018/08/gsg-website-logo-colored-280-50.png'} alt='GazaSkyGeeks' className='img'/>
        <Link to='/'>Home</Link> | <Link to='/students'>Students</Link>
        </header>
    )
}
export default Navbar;