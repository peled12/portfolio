import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return <div></div>;
}

export default Education;
