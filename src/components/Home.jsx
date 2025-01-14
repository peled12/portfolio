import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Social from './Social';

import AOS from 'aos';
import 'aos/dist/aos.css';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

/*
  TODO: make my repositories public (decide if also the bucks fan page)
  TODO: change the logo of this website (can use ai to generate the new one)
  TODO: build the education page
*/

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div style={styles.mainContainer} data-aos="fade">
      <h1 style={styles.nameStyle}>Peled Koren</h1>
      <div style={{ flexDirection: 'row' }}>
        <h2 style={styles.inlineChild}>I&apos;m&nbsp;a&nbsp;</h2>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            strings: ['react developer', 'full stack developer'],
          }}
        />
      </div>
      <Social />
    </div>
  );
}

export default Home;
