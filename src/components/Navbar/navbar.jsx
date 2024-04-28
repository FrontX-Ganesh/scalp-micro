import React , {useEffect, useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import logo2 from '../../assets/user-4.png'

const navbar = () => {
    const [sticky , setSticky] = useState(false);
    useEffect(() => {
       window.addEventListener('scroll' , () => {
           window.scrollY>50?setSticky(true):setSticky(false);
       }) 
    },[sticky])
  return (
    <nav className={`container1 ${sticky ? 'dark-nav' : 'normal-nav'}`} >
        <img src={`${sticky ? logo2 : logo}`} alt='' className={` ${sticky ? 'dark-logo' : 'normal-logo'}`} />
        <ul>
            {/* <li>Treatments</li>
            <li>Trainings</li> */}
            <li><button className="consultation-button">Book a Free Consultation</button></li>
        </ul>
    </nav>
  )
}

export default navbar