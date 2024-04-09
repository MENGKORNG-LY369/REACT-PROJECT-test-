import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Trending from './pages/Trending'
import Restaurant from './pages/Restaurant'
import Search from './pages/Search'
import Profile from './pages/Profile'
import ForgotPass from './pages/ForgotPass'
import Footer from './components/templates/Footer'

function App() {
  const route = [
    {"/": <Home />},
    {"/signin": <Signin />},
    {"/signout": <Signout />},
    {"/cart": <Cart />},
    {"/order": <Order />},
    {"/trending": <Trending />},
    {"/restaurant": <Restaurant />},
    {"/restaurant": <Restaurant />},
    {"/search": <Search />},
  ]
  return (
    <>
      <div className='bg-white min-h-screen'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signout' element={<Signout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/search' element={<Search />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/verify' element={<ForgotPass />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App