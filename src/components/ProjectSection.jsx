import React from 'react';

import 'aos/dist/aos.css';

import '../css/Project.css';

function ProjectSection({ project }) {
  return (
    <div className="project-text-container">
      {project.map((obj, index) => (
        <div key={index}>
          <div
            data-aos="fade-up"
            className={
              `project-row number${index} ` + (index % 2 === 0 ? 'even' : 'odd')
            }
          >
            <div className="text">
              <h1>{obj.title}</h1>
              {obj.text.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          {index !== project.length - 1 && <div className="seperator"></div>}
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
