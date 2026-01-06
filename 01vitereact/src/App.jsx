import Card from "./components/card"
import Counter from "./components/Counter"

function App() {
const userData = {
  name: "Rakesh Pawar",
  age: 25,
  email: "rakeshpawar@example.com",
  dob: "21-10-1987",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

  return (

    <div className="container mx-auto px-4 pt-10 pb-10">
      <Counter />
      <Card userData={userData}  />
    </div>

  )
}

export default App
