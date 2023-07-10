import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {name: 'My HTML Webpage', url: 'https://mypage--tritran43.repl.co/'},
    {name: 'DOM-Game', url: 'https://github.com/talentran/DOM-Based-Game'},
    {name: 'Debt Manager App', url: 'https://talentran.github.io/Mod-2-React-App-Project---Debt-Manager/'},
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.name}</h3>
          <a href={project.url} target="_blank" rel="noreferrer">Demo</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
