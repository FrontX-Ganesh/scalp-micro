import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/program'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Programs/>
      </div>
      </div>
  )
}

export default App