import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#0f172a] min-h-screen py-12 px-4 selection:bg-green-500/30 text-white">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl p-6 md:p-10">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 text-center mb-2">
                Task Master
              </h1>
              <p className="text-slate-400 text-center text-sm font-medium tracking-wide uppercase">
                {todos.length > 0
                  ? `${completedCount} of ${todos.length} tasks completed`
                  : "Organize your day"}
              </p>

              {todos.length > 0 && (
                <div className="w-48 h-1.5 bg-white/10 mx-auto mt-4 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 transition-all duration-500 ease-out"
                    style={{ width: `${(completedCount / todos.length) * 100}%` }}
                  ></div>
                </div>
              )}
            </header>

            <div className="mb-8 transform hover:scale-[1.01] transition-transform duration-200">
              <TodoForm />
            </div>

            <div className="flex flex-col gap-y-4">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))
              ) : (
                <div className="text-center py-12 border-2 border-dashed border-white/5 rounded-2xl">
                  <span className="text-5xl block mb-4">📝</span>
                  <p className="text-slate-500 font-medium">No tasks yet. Add one to get started!</p>
                </div>
              )}
            </div>
          </div>

          <footer className="mt-8 text-center text-slate-600 text-xs">
            Press <kbd className="bg-slate-800 px-1 rounded">Enter</kbd> to quickly add a task
          </footer>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App