import React, { createContext, useState, useContext } from 'react'
import App from './App';

const AuthorizeContext = createContext();

const useAuth = () => {
    return useContext(AuthorizeContext);
}

const Authorization = ({ children }) => {

    const usersList = [{
        username: 'admin',
        password: 'admin'
    }];
    localStorage.setItem('credentials', JSON.stringify(usersList));

    const users = JSON.parse(localStorage.getItem('credentials')) || [];
    console.log(users);
    const [authData, setAuthData] = useState({
        loggedIn: false,
        user: '',
    });

    const login = (username, password) => {

        const user = users.find(user => user.username === username && user.password === password);

        console.log(user);
        if (user) {
            setAuthData({
                loggedIn: true,
                user: user.username,
            });
        } else {
            alert('username or password is wrong');
        }
    };

    const logout = () => {
        setAuthData({ loggedIn: false, currentUser: null });
    };




    return (
        <AuthorizeContext.Provider value={{ ...authData, login, logout }}>
            <App />
        </AuthorizeContext.Provider>
    );
}

export default Authorization;
export { AuthorizeContext, useAuth };