import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
 import hair from '../../assets/hair.mp4'
const Hero = () => {
  return (
    <div className='hero container2'>
        <div className="hero-text">
        <video autoPlay muted loop playsInline className="hero-video">
      <source src={hair} type="video/mp4" />
    </video>
    <div className="beat-hair-loss-text">
                    <div style={{ color: 'white' }}>Beat Hair Loss with</div>
                    <div style={{ color: 'lightgreen' }}>Scalp Micropigmentation</div>
                    <p style={{ whiteSpace: 'pre-line', color: 'white' }}>Scalp Micropigmentation is a highly effective, non-invasive, low maintenance solution to hair loss that{'\n'}delivers immediate, long term results.</p>
                    <button className="free-quote-button">GET A FREE QUOTE</button>
                </div>
        {/* <button className="btn">Explore more<img src={dark_arrow} alt="" /></button> */}
        </div>
        </div>
  )
}

export default Hero