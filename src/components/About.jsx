import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';

import ScrollReveal from 'scrollreveal';

import AboutSection from './AboutSection';

import profileImg from '../images//about/profile.png';

import quickScroll from './utils/quickScroll';

import '../css/about.css';

const text = [
  {
    title: 'About Me',
    text: "<p>My name is Peled Koren, a 17-year-old junior full-stack developer with hands-on experience in building end-to-end web applications using ReactJS, Node.js, MongoDB and Socket.IO.</p><p>I am passionate about solving real-world problems through echnology and continuously learning to expand my skill set. Currently, I'm also advancing my Next.js + TypeScript skills with MySQL and Prisma TailwindCSS to enhance my development workflow and build more scalable and efficient applications.</p><p>Beyond coding, I enjoy playing basketball and am a dedicated fan of the Milwaukee Bucks NBA team. Combining my love for basketball and web development, I created a Bucks fan page (link to my project), where users can interact, create content, build their own fantasy rosters and much more.</p><p>This project not only allowed me to channel my passion but also significantly improved my skills in frontend design, API integration, and database management.</p>",
  },
  {
    title: 'What I Bring To The Table',
    text: "<p><b>Problem-Solving Mindset</b>: I thrive on tackling challenges, whether it's debugging a tricky issue or optimizing a complex system.</p><p><b>Self-Motivation</b>: At just 17, I independently built a full-stack project, demonstrating my ability to manage a project from start to finish.</p><p><b>Attention to Detail</b>: From crafting intuitive user interfaces to writing efficient backend code, I focus on delivering high-quality results.</p><p><b>Collaboration Skills</b>: While I often work independently, I also value teamwork and have collaborated with others on side projects and open-source contributions.</p>",
  },
  {
    title: 'Key Technical Skills',
    text: '<p><b>Frontend</b>: ReactJS, HTML, CSS, JavaScript.</p><p><b>Backend</b>: Node.js, Express.</p><p><b>Database</b>: MongoDB.</p><p><b>Version Control</b>: Git/GitHub.</p><p><b>Deployment</b>: Netlify, Render.</p><p><b>Testing & Optimization</b>: Basic knowledge of Cypress and debugging techniques.</p>',
  },
  {
    title: 'Why Choose Me?',
    text: '<p><b>Passion for Learning</b>: I’m eager to learn new technologies and adapt to the ever-evolving tech landscape. Currently, I’m improving Next.js and TypeScript skills to enhance my development workflow and build more scalable applications.</p><p><b>Clear Documentation and Problem-Solving</b>: While I’m still building professional experience, I’ve developed strong communication habits by documenting my projects clearly, writing clean code and breaking down complex problems into manageable steps. This mindset helps me convey ideas effectively.</p><p><b>Commitment to Excellence</b>: I am determined to contribute meaningfully to a team, offering dedication, creativity, and problem-solving skills. My focus is on continuous improvement and delivering high-quality work.</p>',
  },
];

/*
  TODO: fix styling with quickScroll
*/

function About() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.about-reveal > p', {
      origin: 'bottom',
      distance: '100px',
      duration: '800',
      delay: '25',
      opacity: '0',
      easing: 'ease',
      reset: false,
    });
  }, []);

  function aboutQuickScroll(textNumber) {
    quickScroll('.about-text.number', textNumber);
  }

  return (
    <>
      <Header title="About Me" />
      <div className="about-quick-scrolls">
        <h3>Quick scroll</h3>
        <p onClick={() => aboutQuickScroll(0)}>about Me</p>
        <p onClick={() => aboutQuickScroll(1)}>What I Bring To The Table</p>
        <p onClick={() => aboutQuickScroll(2)}>Key Technical Skills</p>
        <p onClick={() => aboutQuickScroll(3)}>Why Choose Me?</p>
      </div>
      <div className="section-content-container about-container">
        <Fade>
          <div className="text-container">
            {text.map((obj, index) => (
              <AboutSection
                key={index}
                text={obj.text}
                title={obj.title}
                number={index}
              />
            ))}
            <div className="expandor"></div>
          </div>
          <div className="img-container">
            <img src={profileImg} alt="A picture of me" />
          </div>
        </Fade>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
