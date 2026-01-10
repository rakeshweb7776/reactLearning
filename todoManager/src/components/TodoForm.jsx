import { useState } from "react";
import { useTodo } from "../contextApi/TodoContext";


function TodoForm() {

    const [todo, settodo] = useState()

    const { addTodo } = useTodo()

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(
            {
                id: Date.now(),
                text: todo,
                isTaskComplete: false
            }
        )
    }

    return (
        <form onSubmit={handleAddTodo} className="flex gap-2 p-4 bg-white shadow-md rounded-xl">
            <input
                type="text"
                placeholder="Add a new todo..."
                onChange={(e) => settodo(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm