import { useState, useEffect } from 'react'
import './styles.css'
import { NewTodoForm } from './cmps/NewTodoForm.jsx'
import { TodoList } from './cmps/TodoList.jsx'
import { storageService } from './storage.service.js'

const App = () => {
  const [todos, setTodos] = useState(storageService.loadFromStorage("ITEMS"))

  useEffect(() => {
    storageService.saveToStorage("ITEMS", todos)
  }, [todos])

  const addTodo = (title) => {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false }
    ])
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>What do I have todo?</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default App
