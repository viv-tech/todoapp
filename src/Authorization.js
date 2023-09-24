import React, { createContext, useState, useContext } from 'react'

const AuthorizeContext = createContext();

const useAuth = () => {
    return useContext(AuthorizeContext);
};

const Authorization = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = (username, password) => {

        const user = username === 'admin' && password === 'admin';

        console.log(user);
        if (user) {
            setLoggedIn(true);
        } else {
            alert('username or password is wrong');
        }
    };

    const logout = () => {
        setLoggedIn(false);
    };




    return (
        <AuthorizeContext.Provider value={{ loggedIn, login, logout }}>
            {children}
        </AuthorizeContext.Provider>
    );
}

export default Authorization;
export { useAuth };