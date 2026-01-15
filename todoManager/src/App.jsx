import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <>
      <div className="container m-auto mt-5">
        <h2 className="text-2xl font-bold text-center mb-4">Toto Managar</h2>
        <div className="border border-gray-300 p-5 rounded-lg">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
