import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure est omnis repellat odit a exercitationem pariatur reprehenderit dolorem! Ipsam accusamus necessitatibus blanditiis molestiae ipsum qui numquam hic natus. Excepturi.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Max Pikulin</div>
          <div>22nd February, 12:21</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;