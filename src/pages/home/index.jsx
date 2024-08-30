import React from 'react'
import './style.scss'
import {Animate} from  'react-simple-animate'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()

  const handleNavigateToContact = () => {
    navigate('/contact')
  }
  return (
   <section className="home" id='home'>
    <div className='home-text'>
      <h1>
        Hi, I'm Muhammad Ahmed
        <br />
        MERN Stack Developer

      </h1>

    </div>

    <Animate 
    play
    duration={2}
    delay={1}
    start={{
      transform: 'translateY(550px)',

    }}
    end={{
      transform: 'translatex(0px)',
    }}
    >
    <div className='home-button' >
      <button onClick={handleNavigateToContact} >
        Hire Me
      </button>
    </div>
    </Animate>
   </section>
)}

export default Home 
