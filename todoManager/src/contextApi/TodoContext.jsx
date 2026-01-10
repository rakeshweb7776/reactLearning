import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, todo]);
    }

    const updateTodo = (id) => {

        console.log(id)

    }

    const deleteTodo = (id) => {

    }

    const value = {
        todos,
        addTodo,
        updateTodo,
        deleteTodo
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem('todos'))
      if(todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [] )
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])




    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('use Auth must be used withing AuthProvider')
    }
    return context
}