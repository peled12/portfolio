import React, { useEffect } from 'react';
import Header from './Header';

import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutSection from './AboutSection';

import profileImg from '../images/about/my_img.jpg';

import quickScroll from './utils/quickScroll';

import '../css/about.css';

const TEXT = [
  {
    title: 'About Me',
    text: '<p>My name is Peled Koren, a 17-year-old junior full-stack developer who lives in Hadera, Israel with hands-on experience in building end-to-end web applications using React, Node.js, MongoDB and plenty of other technologies.</p><p>I am passionate about solving real-world problems through technology and continuously learning to expand my skill set. I am currently working on a project to gain more experience, enhance my existing skills, and explore new technologies, helping me grow as a developer.</p><p>Beyond coding, I enjoy playing basketball and am a dedicated fan of the Milwaukee Bucks NBA team. Combining my love for basketball and web development, I created a Bucks fan page <a href="https://bucks-fan-page.vercel.app/">(link to it)</a>, where users can interact, create content, build their own fantasy rosters and much more.</p><p>This project not only allowed me to channel my passion but also significantly improved my skills in frontend design, API integration, and database management.</p>',
  },
  {
    title: 'What I Bring To The Table',
    text: "<p><b>Problem-Solving Mindset</b>: I thrive on tackling challenges, whether it's debugging a tricky issue or optimizing a complex system.</p><p><b>Self-Motivation</b>: At just 17, I independently built a full-stack project, demonstrating my ability to manage a project from start to finish.</p><p><b>Attention to Detail</b>: From crafting intuitive user interfaces to writing efficient backend code, I focus on delivering high-quality results.</p><p><b>Collaboration Skills</b>: While I often work independently, I also value teamwork and have collaborated with others on side projects and open-source contributions.</p>",
  },
  {
    title: 'Why Choose Me?',
    text: '<p><b>Passion for Learning</b>: I’m eager to learn new technologies and adapt to the ever-evolving tech landscape. Currently, I’m improving Next.js and TypeScript skills to enhance my development workflow and build more scalable applications.</p><p><b>Clear Documentation and Problem-Solving</b>: While I’m still building professional experience, I’ve developed strong communication habits by documenting my projects clearly, writing clean code and breaking down complex problems into manageable steps. This mindset helps me convey ideas effectively.</p><p><b>Commitment to Excellence</b>: I am determined to contribute meaningfully to a team, offering dedication, creativity, and problem-solving skills. My focus is on continuous improvement and delivering high-quality work.</p>',
  },
];

/*
  TODO: adapt the text
  TODO: put a qulitive picture of myself here
  TODO: include that while buillding my current project, i learned nestJS and has
        significantly improved my backend skills
*/

function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 25,
      offset: 10,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  function aboutQuickScroll(textNumber) {
    quickScroll('.about-text.number', textNumber);
  }

  return (
    <>
      <div data-aos="fade">
        <Header title="About Me" />
      </div>
      <div className="about-quick-scrolls" data-aos="fade">
        <h3>Quick scroll</h3>
        <div className="links">
          {TEXT.map((obj, index) => (
            <div key={index}>
              <p onClick={() => aboutQuickScroll(index)}>{obj.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-content-container about-container">
        <div className="text-container">
          {TEXT.map((obj, index) => (
            <AboutSection
              key={index}
              text={obj.text}
              title={obj.title}
              number={index}
            />
          ))}
          <div className="expandor"></div>
        </div>
        <div className="img-container" data-aos="fade">
          <img src={profileImg} alt="A picture of me" />
        </div>
      </div>
    </>
  );
}

export default About;
