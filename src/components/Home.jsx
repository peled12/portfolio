import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Social from './Social';

import '../css/home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="home-container" data-aos="fade">
      <div className="home-content">
        <h1>Peled Koren</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2>I&apos;m&nbsp;a&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ['full stack developer', 'react developer'],
            }}
          />
        </div>
        <Social />
      </div>
    </div>
  );
}

export default Home;
