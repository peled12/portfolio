import React, { useEffect } from 'react';

import '../css/education.css';

import Header from './Header';

import AOS from 'aos';
import 'aos/dist/aos.css';

const TEXT = [
  "While being an highschool student, I've managed to still get some academic experience via The Open University of Israel.",
  "I'm currently working on my third course there, but planning to quit after it to persue my carreer as a full-stack developer.",
  'Most of my Bagrut exams are about to be completed by this summer, including math (I learn math in an accelerated 5-point class, which makes me finish the Bagrut by the end of the 11th grade).',
  'Because of those things, I will have a lot of free time to work in my first job as a full-stack developer, although still being a highschool student.',
  'Besides my education from educational institutions, I have and am continuosly educating myself as a developer, improving my skills everyday and learning new things.',
];

/*
  TODO: add and improve the text if needed
  TODO: add scroll animation if needed
  TODO: update the text when releavant
*/

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div data-aos="fade">
        <Header title="Education" />
      </div>
      <h4 className="education-intro" data-aos="fade">
        Here is the educational journey I have undertaken as a high school
        student.
      </h4>
      <div className="education-container" data-aos="fade">
        {TEXT.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default Education;
