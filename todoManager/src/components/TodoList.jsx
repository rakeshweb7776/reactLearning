
import { useState } from 'react'
import { useTodo } from '../contextApi/TodoContext'

function TodoList() {

    const { todos, updateTodo, completeTodo, deleteTodo } = useTodo()

    const [editId, setEditId] = useState("")
    const [editedTask, setEditedTask] = useState("")

    const handleComplte = (id) => {
        completeTodo(id)
    }

    const handleDelete = (id) => {
        deleteTodo(id)
    }

    const handleEdit = (id, task) => {
        setEditId(id)
        setEditedTask(task)
    }

    const handleUpdate = (id) => {
        updateTodo(id, editedTask)
        setEditId("")
    }

    return (
        <>
            {/* List */}
            < ul className="mt-6 space-y-3" >
                {
                    todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg  border border-gray-300"
                        >
                            <div className="flex items-center gap-3">
                                {editId != todo.id &&
                                    <input
                                        type="checkbox"
                                        checked={todo.isTaskComplete}
                                        onChange={() => handleComplte(todo.id)}
                                        className="w-4 h-4"
                                    />
                                }

                                {editId != todo.id && <span
                                    className={`${todo.isTaskComplete
                                        ? "line-through text-gray-400"
                                        : ""
                                        }`}
                                >
                                    {todo.text}
                                </span>}
                                {editId == todo.id &&
                                    <input
                                        className='border-1 border-gray-400 p-1'
                                        type="text"
                                        value={editedTask}
                                        onChange={(e) => setEditedTask(e.target.value)}
                                    />}
                            </div>

                            <div className="flex gap-2">

                                <button
                                    onClick={() => handleEdit(todo.id, todo.text)}
                                    className={`text-blue-600 hover:text-blue-800 text-sm 
                                        ${todo.isTaskComplete || editId == todo.id
                                            ? "hidden"
                                            : ""
                                        }`}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className={`text-blue-600 hover:text-blue-800 text-sm 
                                        ${editId == todo.id
                                            ? ""
                                            : "hidden"
                                        }`}
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(todo.id)}
                                    className="text-red-500 hover:text-red-700 text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul >
        </>
    )
}

export default TodoList