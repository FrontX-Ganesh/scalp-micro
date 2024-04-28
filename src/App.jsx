import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/program';
import Services from './components/Services/Services';
import Faq from './components/Faq/Faq';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Programs/>
        <Services/>
        <Faq />
      </div>
    </>
  )
}

export default App