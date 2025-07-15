import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Weather Website',
      description: 'A comprehensive weather application built with REST API integration. Features real-time weather data, location-based forecasts, and responsive design for optimal user experience across all devices.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'REST API', 'CSS3', 'HTML5'],
      liveUrl: 'https://github.com/AreebaMemon/express-weather-api',
      githubUrl: 'https://github.com/AreebaMemon/express-weather-api'
    },
    {
      id: 2,
      title: 'Todo List Application',
      description: 'Full-stack todo list application with backend functionality. Features task management, user authentication, data persistence, and intuitive user interface for productivity enhancement.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'Backend', 'Database', 'CRUD Operations'],
      liveUrl: 'https://github.com/AreebaMemon/codealpha_tasks/tree/main/ToDoList',
      githubUrl: 'https://github.com/AreebaMemon/codealpha_tasks/tree/main/ToDoList'
    },
    {
      id: 3,
      title: 'Election Management System',
      description: 'Comprehensive election management system built with JavaScript and PHP. Features voter registration, candidate management, secure voting mechanisms, and real-time result tracking.',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'PHP', 'MySQL', 'Security'],
      liveUrl: 'https://github.com/AreebaMemon/election-management-system',
      githubUrl: 'https://github.com/AreebaMemon/election-management-system'
    },
    {
      id: 4,
      title: 'GPA-CGPA Calculator',
      description: 'Interactive academic performance calculator built with pure JavaScript. Features grade calculation, semester tracking, cumulative GPA computation, and user-friendly interface for students.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'DOM Manipulation', 'Local Storage', 'Responsive Design'],
      liveUrl: 'https://areebamemon.github.io/gpa-cgpa-calculator/',
      githubUrl: 'https://github.com/AreebaMemon/gpa-cgpa-calculator'
    }
  ];

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container mx-auto px-4 py-20">
        <div className={`transition-all duration-1000 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card-responsive transition-all duration-500 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="project-image-container-responsive">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-responsive"
                    loading="lazy"
                  />
                  <div className="project-overlay-responsive">
                    <div className="project-links-responsive">
                      <a 
                        href={project.liveUrl} 
                        className="project-link-responsive" 
                        aria-label="View live project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="project-link-responsive" 
                        aria-label="View GitHub repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content-responsive">
                  <h3 className="project-title-responsive">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags-responsive">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-responsive">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-buttons">
                    <a 
                      href={project.liveUrl} 
                      className="project-button primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="project-button secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;