import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shopping from './components/Shopping'
import Products from './components/Products'
import login from './components/login'




const App = () => {
  return (
      <div className='App'>
      <Navbar/>
      <Shopping/>
      <Products/>
      <login/>
      <footer/>
    </div>
  )
}

export default App
