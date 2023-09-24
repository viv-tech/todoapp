import './App.css';
import TodoList from './Components/TodoList/TodoList';
import Navbars from './Components/Navbar/Navbar.js';
import { useContext } from 'react';
import { AuthorizeContext, useAuth } from './Authorization';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.js';

function App() {


  const { authData, login, logout } = useAuth();



  // const list = "/todolist:" + authData.user;
  return (
    <>
      <Navbars />
      <div className="App">
        <Routes>

          {authData.loggedIn ? <Route path='/todo' element={<TodoList />} /> : <Route path='/' element={<Login />} />}
        </Routes>
        <TodoList />
      </div>
    </>
  );
}

export default App;
