import Login from "./component/Login"
import Dashboard from "./component/Dashboard"
import { useAuth } from "./contextAPI/AuthContext";

function App() {
  
  const { isAuthenticated, loading } = useAuth(); 

  return (
    <>
    {!isAuthenticated ? <Login /> : <Dashboard />}
    </>
  )
}

export default App
