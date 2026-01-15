import { useState } from "react";
import { useTodo } from "../contextApi/TodoContext";
import toast, { Toaster } from 'react-hot-toast';


function TodoForm() {

    const [todo, settodo] = useState("")

    const { todos, addTodo } = useTodo()

    const handleAddTodo = (e) => {
        e.preventDefault();


        /* Already Exitst */
        const existTask = todos.some((item) => item.text == todo)
        if (existTask) {
            toast.error('Task already exists');
            settodo("")
            return
        }

        if (todo != "") {
            addTodo(
                {
                    id: Date.now(),
                    text: todo,
                    isTaskComplete: false
                }
            )
            toast.success('Task added successfully');
            settodo("")
        }
    }

    return (
        <>
            <Toaster
                position="top-left"
                toastOptions={{
                    className: 'bg-white border border-gray-200 rounded-lg shadow-lg',
                    success: { className: 'bg-green-50 text-green-800 border-green-200' },
                    error: { className: 'bg-red-50 text-red-800 border-red-200' },
                }}
            />
            <form onSubmit={handleAddTodo} className="flex border gap-2 p-4 bg-white shadow-md rounded-xl">
                <input
                    type="text"
                    value={todo}
                    placeholder="Add a new todo..."
                    onChange={(e) => settodo(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoForm