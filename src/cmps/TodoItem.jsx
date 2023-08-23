export const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => (
    <li>
        <label>
            <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
        </label>
        <button
            className='btn btn-danger'
            onClick={() => deleteTodo(id)}
            >
            x
        </button>
    </li>
)

// export default TodoItem

