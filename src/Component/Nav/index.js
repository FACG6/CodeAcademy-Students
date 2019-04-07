import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar(){
    return (
        <div className="Nav">
        <img src={'https://gazaskygeeks.com/wp-content/uploads/2018/08/gsg-website-logo-colored-280-50.png'} alt='GazaSkyGeeks' className='img'/>
       <div>

        <Link to='/'>Home</Link> |
         <Link to='/students'>
         FACG
        <img src="https://avatars3.githubusercontent.com/u/37267794?s=200&v=4"  className="img--facg"/>
         Students</Link>
       </div>
        </div>
    )
}
export default Navbar;
