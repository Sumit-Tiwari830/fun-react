import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center border border-white/20 rounded-xl px-4 py-3 gap-x-4 shadow-sm transition-all duration-300 group
            ${todo.completed
                    ? "bg-[#ecfccb] border-green-200/50 opacity-75"
                    : "bg-white hover:shadow-md hover:border-indigo-200"
                }`}
        >
            {/* Custom Checkbox Wrap */}
            <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer accent-green-600 rounded-lg transition-transform active:scale-90"
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            {/* Todo Text / Input */}
            <input
                type="text"
                className={`flex-1 bg-transparent outline-none text-gray-800 font-medium transition-all duration-200
                ${isTodoEditable ? "bg-gray-50/50 px-2 ring-1 ring-indigo-300 rounded-md py-0.5" : "border-transparent"}
                ${todo.completed ? "line-through text-gray-500 italic" : "text-slate-700"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Action Buttons Container */}
            <div className="flex items-center gap-x-2">
                {/* Edit/Save Button */}
                <button
                    className={`inline-flex w-9 h-9 rounded-lg text-lg border border-black/5 justify-center items-center transition-all shrink-0
                    ${todo.completed ? "hidden" : "hover:bg-indigo-50 hover:text-indigo-600 bg-gray-50 text-gray-600"}
                    ${isTodoEditable ? "bg-green-50 text-green-600 border-green-200" : ""}`}
                    onClick={() => {
                        if (todo.completed) return
                        if (isTodoEditable) {
                            editTodo()
                        } else setIsTodoEditable((prev) => !prev)
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "✅" : "✏️"}
                </button>

                {/* Delete Button */}
                <button
                    className="inline-flex w-9 h-9 rounded-lg text-lg border border-black/5 justify-center items-center bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shrink-0"
                    onClick={() => deleteTodo(todo.id)}
                >
                    🗑️
                </button>
            </div>
        </div>
    )
}

export default TodoItem