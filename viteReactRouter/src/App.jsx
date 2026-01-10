import React from 'react'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';
import Github, { gitHubinfoLoader } from './components/Github/Github';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        path="github"
        element={<Github user="rakeshweb7776" />}
        loader={gitHubinfoLoader}
      />
      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Route>

    <Route path="/login" element={<Login />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
