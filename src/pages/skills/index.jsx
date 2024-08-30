import React from 'react';
import Header from '../../components/Header';
import { SiHyperskill } from "react-icons/si";
import { skillsData } from '../../utilies/skills';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './style.scss';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Header headerText="My Skills" icon={<SiHyperskill />} />
      <div className="skills__content">
        {skillsData.map((skill, index) => (
          <div key={index} className="skills__content__inner-data">
            <Animate
              play
              delay={0.5}
              duration={1}
              start={{ transform: 'translateX(-200px)' }}
              end={{ transform: 'translateX(0)' }}
            >
              <h3 className="skills__content__inner-data__title">{skill.label}</h3>
              <div className="progress-bars">
                {skill.data.map((item, i) => (
                  <AnimateKeyframes
                    key={i}
                    play
                    delay={0.5}
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount={1}
                  >
                    <div className="progress-bar" key={i}>
                      <p>{item.skillName}</p>
                      <Line
                        percent={item.percentage}
                        strokeWidth="2"
                        strokeColor="var(--main-color)"
                        trailWidth="2"
                        strokeLinecap= 'round'
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
