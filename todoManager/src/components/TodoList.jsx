
import { useTodo } from '../contextApi/TodoContext'

function TodoList() {
    
    const { todos , updateTodo} = useTodo()

    const handleToggle = (id) => {
        updateTodo(id)
    }

    return (
        <>
            {/* List */}
            < ul className="mt-6 space-y-3" >
                {
                    todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={todo.isTaskComplete}
                                    onChange={() => handleToggle(todo.id)}
                                    className="w-4 h-4"
                                />

                                <span
                                className={`${todo.isTaskComplete
                                    ? "line-through text-gray-400"
                                    : ""
                                  }`}
                                >
                                    {todo.text}
                                </span>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                    Edit
                                </button>
                                <button
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