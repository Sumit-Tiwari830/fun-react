import React, { useState } from 'react'
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo.trim()) return
        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex group shadow-sm">
            <input
                type="text"
                placeholder="What needs to be done?"
                className="w-full border border-white/20 rounded-l-lg px-4 outline-none duration-200 bg-white/10 py-2.5 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-green-500/50"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-6 py-2.5 bg-green-500 text-white font-semibold shrink-0 hover:bg-green-600 active:scale-95 transition-all duration-150 shadow-lg shadow-green-900/20"
            >
                Add Task
            </button>
        </form>
    )
}

export default TodoForm