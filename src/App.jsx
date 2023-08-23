import { useState, useEffect } from 'react'
import './styles.css'
import { NewTodoForm } from './cmps/NewTodoForm.jsx'
import { TodoList } from './cmps/TodoList.jsx'
import { storageService } from './storage.service.js'



export default function App() {

  const [todos, setTodos] = useState(storageService.loadFromStorage("ITEMS"))

  useEffect(() => {
    storageService.saveToStorage("ITEMS", todos)
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo

      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>What do I have todo?</h1>
      <TodoList todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
    </>
  )
}

