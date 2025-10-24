import React from 'react'
import '@fontsource-variable/dm-sans';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
