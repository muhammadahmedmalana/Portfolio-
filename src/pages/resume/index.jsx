import React from 'react'
import Header from '../../components/Header'
import { PiReadCvLogoBold } from "react-icons/pi";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { resume } from '../../utilies/resume';
import { MdWork } from 'react-icons/md'
import { FaGraduationCap } from "react-icons/fa6";
import './style.scss'
const Resume = () => {
  return (
    <section className="resume" id='resume'>
      <Header headerText=" My Resume" icon={<PiReadCvLogoBold />} />

      <div className="resume-content">
        <div className='resume-content__education'>
         <h3 className='resume-content__education__title'>Education</h3>
         <VerticalTimeline
         layout='1-column'
         lineColor='var(--main-color)'
         
         >
          {
            resume.education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className='resume-content__education__element'
                contentStyle={{
                  background: 'none',
                  color: 'var(--text-color)',
                  border: '1.5px solid  var(--main-color)',

                }}
              
                icon= {<FaGraduationCap/>}
                iconStyle={{
                  color: 'var(--main-color)',
                  background: '#181818',
                }}
              >
                <div className='element-title-wrapper'>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                 </div>
                 <p className='description'>{item.description}</p>
                 <p className='date'>{item.date}</p>
                 

              </VerticalTimelineElement>
            ))
          }

         </VerticalTimeline>
         
        </div>
        <div className='resume-content__experience'>
          <h3 className='resume-content__experience__title'>Experience</h3>
          <VerticalTimeline
         layout='1-column'
         lineColor='var(--main-color)'
         
         >
          {
            resume.experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className='resume-content__education__element'
                contentStyle={{
                  background: 'none',
                  color: 'var(--text-color)',
                  border: '1.5px solid  var(--main-color)',

                }}
               
                icon= {<MdWork/>}
                iconStyle={{
                  color: 'var(--main-color)',
                  background: '#181818',
                }}
                
              >
                <div className='element-title-wrapper'>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                 </div>
                 <p className='description'>{item.description}</p>
                 <p className='date'>{item.date}</p>

              </VerticalTimelineElement>
            ))
          }

         </VerticalTimeline>
         
        </div>

      </div>

     
    </section>
  )
}

export default Resume 
