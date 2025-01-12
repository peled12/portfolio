import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import Social from './Social';

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
  return (
    <Fade>
      <div style={styles.mainContainer}>
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
    </Fade>
  );
}

export default Home;
