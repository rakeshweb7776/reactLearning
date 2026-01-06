import ColorChanger from "./components/ColorChanger"
import Card from "./components/Card"
import Counter from "./components/Counter"

import PasswordGenerator from "./components/PasswordGenerator"

function App() {
  // const userData = {
  //   name: "Rakesh Pawar",
  //   age: 25,
  //   email: "rakeshpawar@example.com",
  //   dob: "21-10-1987",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  // }

  return (

    <div className="w-full h-full">
      {/* <Counter /> */}
      {/* <Card userData={userData}  /> */}
      {/* <ColorChanger /> */}
      <PasswordGenerator />      
    </div>

  )
}

export default App
