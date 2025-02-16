import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Connect from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'

const App = () => {
  return (
    <div className='bg-[#120f28] w-full min-h-screen text-white'>
      <Navbar />
      <Hero />
        <About />
        <Skills />
        <Project />
        <Connect />
      <Footer />
    </div>
  )
}

export default App
