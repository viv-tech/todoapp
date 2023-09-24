import { useState, useEffect, useContext } from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import { AuthorizeContext } from '../../Authorization';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [showTodos, setShowTodos] = useState(true);
    const [newTodo, setNewTodo] = useState('');
    const [id, setId] = useState(4);
    const { authData } = useContext(AuthorizeContext);
    const [database, setDatabase] = useState('');

    setDatabase('todo-' + authData.user);

    useEffect(() => {

        const StartTodoList = [{
            id: 1,
            content: 'hello world'
        }, {
            id: 2,
            content: 'JS Training'
        }, {
            id: 3,
            content: 'React Training'
        }];


        setTodos(StartTodoList);
        localStorage.setItem(database, JSON.stringify(todos));

        return saveTodos;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveTodos = () => {
        const storedTodos = JSON.parse(localStorage.getItem(database)) || [];
        setTodos(storedTodos);
    }

    const addTodos = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: id, content: newTodo }]);
            setNewTodo('');
            setId(id + 1);
        }

    }

    const removeTodos = (index) => {
        const data = todos.filter((_, iterator) => iterator !== index);
        setTodos(data);
    }

    const manageInputValue = (e) => {
        setNewTodo(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const toggleData = () => {
        setShowTodos(!showTodos)
    };

    return (
        <div className='AddHeader'>
            <input type='text' placeholder='Enter New Task' value={newTodo} onChange={manageInputValue} />
            <button onClick={addTodos} >Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <TodoListItem key={index + 1} index={index} todo={todo} removeTodo={removeTodos} />
                ))}
            </ul>

        </div>
    )



}

export default TodoList;