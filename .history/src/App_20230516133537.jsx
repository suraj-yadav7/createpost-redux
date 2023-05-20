import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Create />} />
    <Route exact path="/read" element={<Read />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
