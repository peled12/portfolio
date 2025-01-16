import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Header from './Header';

import AOS from 'aos';
import 'aos/dist/aos.css';

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

import JS_IMG from '../images/skills/js.png';
import TS_IMG from '../images/skills/typescript.png';
import MONGO_DB_IMG from '../images/skills/mongo-db.png';
import MY_SQL_IMG from '../images/skills/mysql.png';
import JAVA_IMG from '../images/skills/java.png';
import C_IMG from '../images/skills/c.png';
import SOCKET_IO_IMG from '../images/skills/socket-io.png';
import REACT_IMG from '../images/skills/react.png';
import CSS_IMG from '../images/skills/css.png';
import NODEJS_IMG from '../images/skills/nodejs.png';
import GIT_IMG from '../images/skills/git.png';

/*
  TODO: add nextJS
*/

const SKILLS = [
  {
    title: 'Languages & Databases',
    items: [
      { icon: JS_IMG, title: 'JavaScript' },
      { icon: TS_IMG, title: 'TypeScript' },
      { icon: MONGO_DB_IMG, title: 'Mongo DB' },
      { icon: MY_SQL_IMG, title: 'MySQL' },
      { icon: JAVA_IMG, title: 'Java' },
      { icon: C_IMG, title: 'C' },
    ],
  },
  {
    title: 'Frameworks & Technologies',
    items: [
      { icon: REACT_IMG, title: 'React' },
      { icon: NODEJS_IMG, title: 'Nodejs' },
      { icon: CSS_IMG, title: 'CSS' },
      { icon: SOCKET_IO_IMG, title: 'SocketIO' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [{ icon: GIT_IMG, title: 'Git' }],
  },
];

const SKILLS_INTRO =
  'I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:';

/*
  TODO: make sure to include more skills
*/

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  return (
    <>
      <div data-aos="fade">
        <Header title="Skills" />
      </div>
      <div className="section-content-container" data-aos="fade">
        <Container>
          {renderSkillsIntro(SKILLS_INTRO)}
          {SKILLS.map((rows) => (
            <div key={rows.title}>
              <br />
              <h3>{rows.title}</h3>
              {rows.items.map((item) => (
                <div key={item.title} style={{ display: 'inline-block' }}>
                  <img
                    style={styles.iconStyle}
                    src={item.icon}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
