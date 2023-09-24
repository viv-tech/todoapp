import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbars = () => {

    return (
        <div className='navbar'>
            TODO APP
            <Link to='/login'><p>login</p></Link>
        </div>
    )
}

export default Navbars;
