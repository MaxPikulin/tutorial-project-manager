import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = (props) => {
  return (
    <div className="project-list section">
    {['', '', '', ''].map((project, i) => {
      return <ProjectSummary data={project} key={i} />
    })}
    </div>
  );
};

export default ProjectList;