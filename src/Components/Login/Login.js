import React, { useContext } from 'react'
import { AuthorizeContext } from '../../Authorization';

const Login = () => {

    const login = useContext(AuthorizeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login');

        const data = new FormData(e.target);

        const username = data.get('username');
        const password = data.get('password');

        login(username, password);

    }

    return (


        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Username' />
            <input type='password' placeholder='Enter Password' />
            <button type='submit'>Login</button>
        </form>

    )
}

export default Login