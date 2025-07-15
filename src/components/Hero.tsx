import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="home" ref={ref} className="hero-section">
      <div className="container mx-auto px-4 py-20">
        <div className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Content */}
          <div className="hero-content order-2 lg:order-1">
            <h1 className="hero-title">
              Hi, I'm <span className="text-accent">Areeba Memon</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Web Developer
            </h2>
            
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly web experiences that make a difference.
            </p>
            
            <div className="cta-container">
              <a 
                href="https://drive.google.com/file/d/1QzwdpPlmQsEUd7S_7lZoEhwX1eIwX1Hr/view?usp=sharing" 
                className="cta-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="hero-image-container order-1 lg:order-2">
            <img
              src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Areeba Memon"
              className="profile-image"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 text-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;