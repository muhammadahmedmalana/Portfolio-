import React from 'react'
import Header from '../../components/Header'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import './style.scss'

const personalDetails = [
  {
    label: 'Name',
    value: 'Muhammad Ahmed'
  },
  {
    label: 'Age',
    value: '25'
  },
  {
    label: 'Gender',
    value: 'Male'
  },
  {
    label: 'Occupation',
    value: 'MERN Stack Developer'
  },
  {
    label: 'Address',
    value: 'Gulgasth Multan, Pakistan'
  },
  {
    label: 'Email',
    value: 'ahm876592@gmail.com'
  },
  {
    label: 'Contact Number',
    value: '+92-3068765592'
  }
] 

const jobSummary = "I am a MERN Stack Developer with a passion for building scalable and efficient web applications. I have experience in designing user interfaces, implementing RESTful APIs, and managing databases. I am proficient in JavaScript, React.js, and MongoDB, and have a strong understanding of the MERN stack. My expertise in these technologies allows me to create robust and secure web applications that meet the needs of users."




const About = () => {
  return (
    <section className="about" id='about'>
      <Header headerText="About Me" icon={<BsInfoCircleFill />} />
      <div className='about-content'>
      <div className='about-content-personalDetails'>
      <Animate
    play
    duration={2}
    delay={0}
    start={{
      transform: "translateX(-900px)"
    }}
    end={{
      transform: "translateX(0px)"
    }}
    >
    <h3>MERN Stack Developer</h3> <p>{jobSummary}</p> 

    <h3 className='personalDetails-title'>Personal Details</h3>
   
      <ul>
      {
      personalDetails.map((i, index) => (
        <li key={index}>
          <span className='title'>{i.label}</span>
          <span className='value'>{i.value}</span>
        </li>
      
          

  
      )  )
    }
    </ul> 
    </Animate>

        
         </div>
         <div className='about-content-servicesDetails'> 
    <Animate
  play
  duration={2}
  delay={0.5}
  start={{
  transform: "translateX(600px)"
}}
end={{
transform: "translateX(0px)"
}}>

   
     <div className='about-content-servicesDetails-logos'>
     <div> 
        <FaReact color='#61DBFB' size={60} />
      </div>
      <div>
        <IoLogoNodejs color='#68a063' size={60} />
      </div>
      <div>
        <BiLogoMongodb color=' #589636' size={60} />
      </div>
      <div>
        <FaJs color=' #f0db4f' size={60} />
      </div>
     </div>
      
    </Animate>
    </div>
    
    
       </div>
    </section>
   
  )
}

export default About

