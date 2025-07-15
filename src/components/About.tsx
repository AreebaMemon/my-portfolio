import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3/Sass', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Node', level: 80 },
  ];

  return (
    <section id="about" ref={ref} className="section bg-secondary">
      <div className="container mx-auto px-4 py-20">
        <div className={`transition-all duration-1000 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="about-content">
              <p className="about-text">
                I'm a passionate front-end developer with over 3 years of experience creating 
                modern, responsive web applications. I specialize in translating design concepts 
                into clean, efficient code that provides exceptional user experiences.
              </p>
              
              <p className="about-text">
                My journey in web development began with a curiosity about how websites work, 
                and it has evolved into a deep appreciation for the intersection of creativity 
                and technology. I'm constantly learning new technologies and best practices 
                to stay current in this ever-evolving field.
              </p>
              
              <p className="about-text">
                When I'm not coding, you can find me exploring new design trends, contributing 
                to open-source projects, or sharing my knowledge through technical writing and 
                mentoring aspiring developers.
              </p>
            </div>
            
            <div className="skills-section">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isIntersecting ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;