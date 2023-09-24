import './App.css';
import TodoList from './Components/TodoList/TodoList';
import Navbars from './Components/Navbar/Navbar.js';
import { useAuth } from './Authorization';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login.js';

function App() {


  const { loggedIn } = useAuth();


  return (
    <>
      <Navbars />
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
        {loggedIn ? <Navigate to='/todolist' /> : <Navigate to='/login' />}
      </div>
    </>
  );
}

export default App;
