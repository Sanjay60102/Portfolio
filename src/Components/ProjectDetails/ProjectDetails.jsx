import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Create a CSS file for ProjectDetails and import it

const ProjectDetails = () => {
  const { id } = useParams();

  // Sample project details, you can fetch from an API or data source
  const projectDetails = {
    1: {
      title: 'Sidebar Project',
      description: 'Details for Sidebar Project',
      image: 'path_to_image_1',
      // Add more project details
    },
    2: {
      title: 'Railway Management',
      description: 'Details for Railway Management',
      image: 'path_to_image_2',
      // Add more project details
    },
    3: {
      title: 'Web Application',
      description: 'Details for Web Application',
      image: 'path_to_image_3',
      // Add more project details
    },
  };

  const project = projectDetails[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt="" />
      {/* Add more project details, images, links, etc. */}
    </div>
  );
}

export default ProjectDetails;
