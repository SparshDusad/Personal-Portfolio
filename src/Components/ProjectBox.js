import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TodoDesc: 'A React To do App',
    TodoGithub: "https://github.com/SparshDusad/React-To-Do.git",
  //  RogFreeWebsite: ,

    NewsletterDesc: 'A Real time CryptoPrice Tracker.',
    NewsletterGithub: 'https://github.com/SparshDusad/Cryptocurrency-Price-Tracker.git',
    // NewsletterWebsite:
  };

  const githubLink = desc[projectName + 'Github'];
  const showGithubButton = githubLink !== '';

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt='Project display' />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        {showGithubButton && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'>
              <FaGithub /> Github
            </button>
          </a>
        )}

        <a href={desc[projectName + 'Website']} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'>
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
