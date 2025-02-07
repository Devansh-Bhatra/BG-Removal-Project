import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Result from './Pages/Result'
import BuyCredit from './Pages/BuyCredit'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w -full min-h-screen bg-slate-50'>
      <NavBar></NavBar>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result/>} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
