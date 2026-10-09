import React from 'react'
import Header from './components/Header'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Blog from './Pages/Blog'
import Products from './Pages/Products'
import Reveiws from './Pages/Reviews'
import Login from './Pages/Login'
import Register from './Pages/Register'
import HomeLayout from './layouts/HomeLayout'


const App = () => {
  return (
    <div>


      <Routes>

        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reveiws />} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>


    </div>
  )
}

export default App