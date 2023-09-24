import './Login.css';
import { useAuth } from '../../Authorization';

const Login = () => {

    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login');

        const data = new FormData(e.target);
        console.log(data);
        const username = data.get('username');
        const password = data.get('password');
        console.log(username);
        login(username, password);

    }

    return (


        <form onSubmit={handleSubmit}>
            <label>Username</label><br />
            <input type='text' placeholder='Enter Username' name='username' />
            <label>Password</label><br />
            <input type='password' placeholder='Enter Password' name='password' />
            <button type='submit'>Login</button>
        </form>

    )
}

export default Login