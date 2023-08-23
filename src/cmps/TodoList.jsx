import { TodoItem } from './TodoItem.jsx'

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {

    return (
        <ul className='list'>
            {todos.length === 0 && "Nothing!"}
            {todos.map(todo => {
                return <TodoItem 
                {...todo} 
                key={todo.id} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} />
            })}
        </ul>
    )
}

// export default TodoList