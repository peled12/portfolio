import React, { useEffect } from 'react';

import '../css/education.css';

import Header from './Header';

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

  return (
    <div className="education-page">
      <div data-aos="fade">
        <Header title="Education" />
      </div>
      <div className="text-container">
        <div className="education-intro">
          <h4 data-aos="fade">
            Here is the educational journey I have undertaken as a high school
            student.
          </h4>
        </div>
        <div className="education-container" data-aos="fade">
          <p>
            While being a high school student, I've managed to gain valuable
            academic experience through The Open University of Israel, which has
            greatly enriched my understanding of computer science and software
            development.
          </p>
          <p>
            There, I successfully completed 3 courses, including one where I
            developed an assembler in C. This project simulated a fake
            'computer' and translated assembly code to machine code, with the
            ability to display all code errors. Although I'm still awaiting the
            grade for this course, I look forward to sharing the code with the
            community as soon as possible!
          </p>
          <p>
            Most of my Bagrut exams are about to be completed by this summer,
            including math (I am currently enrolled in an accelerated 5-point
            class, allowing me to finish the Bagrut by the end of 11th grade).
            This rigorous curriculum has helped me build strong analytical and
            problem-solving skills, which are essential for my development as a
            full-stack developer.
          </p>
          <p>
            As a result, I will have more time to focus on my career
            aspirations, with a particular interest in securing my first job as
            a full-stack developer, while still completing high school. This
            opportunity will allow me to apply my knowledge to real-world
            projects and grow professionally.
          </p>
          <p>
            In addition to my formal education, I am dedicated to continuous
            self-learning in the field of development. Every day, I explore new
            tools, languages, and frameworks to enhance my skills and stay
            updated with the latest trends in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
