import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'Jul 2024 - Present',
      title: 'Senior Frontend Developer - Heisenware',
      description: 'Responsible for leading the development and maintenance of all graphical interfaces (UI) of the company’s proprietary platform. Working closely with the technical co-founder to ensure the UI and UX meet the highest standards.',
      technologies: ['React', 'JavaScript', 'NodeJS', 'Material UI', 'Tailwind CSS', 'Figma', 'UI/UX']
    },
    {
      date: 'Mar 2024 - May 2024',
      title: 'Mid-Level Frontend Developer - KnX Group',
      description: 'Handled project initiation to customer delivery, collaborated with backend colleagues, and focused on user needs and ease of use.',
      technologies: ['React', 'Chakra-UI', 'TypeScript']
    },
    // Add more experiences here...
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="job">
          <h3>{exp.title}</h3>
          <p>{exp.date}</p>
          <p>{exp.description}</p>
          <div className="technologies">
            {exp.technologies.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
