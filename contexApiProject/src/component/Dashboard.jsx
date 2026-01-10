import React, { useContext } from 'react'
import { useAuth } from '../contextAPI/AuthContext'

function Dashboard() {
    const {logout} = useAuth();    
  return (
    <>
    <div>Dashboard</div>
    <button
    onClick={logout}
          className='bg-orange-500 p-3 text-white rounded-sm'          
          >Logout</button>
    </>

  )
}

export default Dashboard