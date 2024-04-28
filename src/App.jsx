import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/program';
import Services from './components/Services/Services';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Programs/>
        <Services/>
      </div>
    </>
  )
}

export default App