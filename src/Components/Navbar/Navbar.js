import React, { useEffect } from 'react'
import './Navbar.css';
import { useAuth } from '../../Authorization';

const Navbars = () => {

    const { loggedIn, logout } = useAuth();

    useEffect(() => {
        console.log(loggedIn);
    });

    return (
        <div className='navbar'>
            TODO APP
            {loggedIn && <button onClick={logout}>Logout</button>}
        </div>
    )
}

export default Navbars;
