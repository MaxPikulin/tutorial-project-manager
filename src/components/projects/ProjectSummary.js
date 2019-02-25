import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Max Pikulin</p>
        <p className="grey-text">22nd February, 12:29</p>
      </div>
    </div>
  );
};

export default ProjectSummary;