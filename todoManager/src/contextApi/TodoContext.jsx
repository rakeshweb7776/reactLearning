import { createContext, useState, useContext, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

// Create Context
const TodoContext = createContext();


// Export Provider
export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, todo]);
    }

    const completeTodo = (id) => {
        // console.log(id)
        setTodos((prev) =>
            prev.map((task) => (task.id === id ? { ...task, isTaskComplete: !task.isTaskComplete } : task))
        )
    }

    const updateTodo = (id,updatedTask) => {
        console.log('ID',id)
        console.log('Updated',updatedTask)

        /* Already Exitst */
        const existTask = todos.some((item)=> item.text == updatedTask && item.id != id )
        if (existTask) {
            toast.error('Task already exists');
            return
        }

        setTodos((prev) =>
            prev.map((task) => (task.id === id ? { ...task, text: updatedTask } : task))
        )
        toast.success('Task updated successfully');
    }

    const deleteTodo = (id) => {
        let updatedTodos = todos.filter((item)=> item.id != id )
        setTodos(updatedTodos)
        toast.success('Task Deleted successfully');
    }

    const value = {
        todos,
        addTodo,
        completeTodo,
        updateTodo,
        deleteTodo
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])




    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


// Export 
export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('use Auth must be used withing AuthProvider')
    }
    return context
}