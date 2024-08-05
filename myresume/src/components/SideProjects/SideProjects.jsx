import React from 'react';
import './SideProjects.css';

const SideProjects = () => {
  const projects = [
    {
      title: 'VictoryThreads',
      description: 'An Ecommerce website for selling sports jerseys.',
      technologies: ['React','javascript', 'Node','Express', 'Tailwind', 'MongoDB'],
      githubLink: 'https://github.com/adityaRaj712/victory_threads'
    },
    {
      title: 'ExpenseEase',
      description: 'An expense tracker app built with React Hooks and Context API.',
      technologies: ['React', 'Javascript', 'CSS'],
      githubLink: 'https://github.com/adityaRaj712/Expenseease'
    },
    {
      title: 'Ninja Pen',
      description: 'NinjaPen is my own version of CodePen, built for coders who want a straightforward and efficient way to write and test HTML, CSS, and JavaScript.',
      technologies: ['React', 'CSS', 'TypeScript', 'Codemirror'],
      githubLink: 'https://ninja-pen.vercel.app/'
    },
    // Add more projects here...
  ];

  return (
    <section className="side-projects">
      <h2> Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default SideProjects;
