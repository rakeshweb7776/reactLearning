import React, { use, useContext, useState } from 'react'
import { useAuth } from '../contextAPI/AuthContext'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  // Getting auto methods and values
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password })
  }

  return (
    <>
      <form className='mt-10' onSubmit={handleLogin}>
        <input
          className='bg-gray-200 p-2'
          type="text"
          placeholder='User Name'
          onChange={(e) => setEmail(e.target.value)}
          value={email}

        />
        <br />
        <br />
        <input
          className='bg-gray-200 p-2'
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <br />
        <button
          className='bg-orange-500 p-3 text-white rounded-sm'
          type="submit">Login</button>
        <br />
        <br />
      </form>
    </>
  )
}

export default Login