import './TodoListItem.css';

const TodoListItem = ({ index, todo, removeTodo }) => {
    return (
        <li style={{ listStyle: 'none', textTransform: 'uppercase' }}>
            {todo.content}
            <button id='remove' onClick={() => removeTodo(index)}>Remove</button>
        </li>
    )
}

export default TodoListItem;