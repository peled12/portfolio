import React, { useEffect, useState } from 'react';

import '../css/Project.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import Header from './Header';

import quickScroll from './utils/quickScroll';
import ProjectSection from './ProjectSection';

const BUCKS_FAN_PAGE = [
  {
    title: 'Fan Posts & Interactions',
    text: [
      'Fans can share their opinions on the Milwaukee Bucks by creating articles (fanposts) or proposing trade ideas, fostering a space for expression and discussion.',
      'Everyone can explore fanposts and trade ideas to discover new perspectives and join the conversation.',
      'Users can interact with posts by liking, disliking, commenting, or replying, creating dynamic discussions and connecting Bucks fans',
    ],
  },
  {
    title: 'User Leaderboard',
    text: [
      'To encourage users to post and share their basketball opinion, the get coins when receiving likes on posts or comments they publish.',
      'Users can use these coins to buy players, and appear on the leaderboard. The standing depends on the average rating users gave you, the coins you have available, or the coins you have spent (depending on the section).',
      'This grants the website a competitive environment, that could make users spend more time expressing the thoughts and giving the site a funner vibe.',
    ],
  },
  {
    title: 'Box Scores and NBA data',
    text: [
      'I used the API i found to get real-time NBA data, and make from it game recaps and previews, highligting the next and last Bucks games. Besides, all the recaps and previews from all the yesterday and tomorrow games are displayed as well.',
      'In addition, i used this API to get recent articles, the Bucks roster and schedule, and much more.',
    ],
  },
  {
    title: 'Game Ratings',
    text: [
      'Users can rate each Bucks game after each game, and also include how their thoughts of it. The game rates section gives another subject for users to discuss.',
      'People that have something to say about a certain opinion about a game, can ask about it or share their opinion with the publisher.',
    ],
  },
  {
    title: 'Real Time Chatting',
    text: [
      'You can feel free to chat with your friends on the website, or just DM or reply to users.',
      "Using socket.io, i've managed to apply real-time chatting, sousers can actively message each other about a subject they would like to discuss. weather its about ticket selling, basketball, or anything else",
    ],
  },
  {
    title: 'More',
    text: [
      "This app has a variety of features that I haven't included, like a user dashboard or ticket market. It also has some features that are apart of others that i mentioned like profile picture displaytion or game polls.",
      'Feel free to click the link at the beginning of the section to visit the website and explore all the features!',
    ],
  },
];

const JOB_LISTING = [
  {
    title: 'Job Listings & Filtering',
    text: [
      'Users can browse through various job listings based on their preferences and skills.',
      'With filtering options, users can easily narrow down jobs by location, salary, job type, and more.',
    ],
  },
  {
    title: 'Drafting & Publishing Jobs',
    text: [
      'Employers can create job listings and save them as drafts to work on later.',
      'Once ready, they can publish the job post by making a fake purchase, which will make it live for a certain period.',
    ],
  },
  {
    title: 'User Dashboard & Analytics',
    text: [
      'Users have their own dashboard where they can view and manage their draft jobs and published posts.',
      'Employers can track views, applications, and adjust their job posts based on performance metrics.',
    ],
  },
];

function Projects() {
  useEffect(() => {
    // initialize AOS
    AOS.init({
      duration: 600,
      offset: 40, // distance before triggering the animation
      easing: 'ease-in-out',
      once: false,
      delay: 0,
    });
  }, []);

  const [isBucksPageActive, setisBucksPageActive] = useState(true);

  function bucksPageQuickScroll(textNumber) {
    quickScroll('.bucks-page .project-row.number', textNumber);
  }

  function jobListingQuickScroll(textNumber) {
    quickScroll('.job-listing .project-row.number', textNumber);
  }

  function handleScrollToBucksProject() {
    quickScroll('.BucksFanPage-header-container');
  }

  function handleScrollToJobListing() {
    quickScroll('.JobListing-header-container');
  }

  return (
    <div className="work-page">
      <h6 className="project-intro" data-aos="fade-in">
        Here are some projects I made to showcase my full-stack engineering
        skills.
      </h6>
      <div className="project-container bucks-page">
        <div className="BucksFanPage-header-container" data-aos="fade-up">
          <div>
            <Header
              title="Bucks Fan Page"
              url="https://bucks-fan-page.vercel.app"
            />
          </div>
          <p className="first-msg">
            Let's go through the features of the fan page I've made.
          </p>
        </div>
        <ProjectSection project={BUCKS_FAN_PAGE} />
      </div>
      <div className="project-container job-listing">
        <div className="JobListing-header-container" data-aos="fade-up">
          <Header
            title="Job Listing"
            url="https://job-listing-six-theta.vercel.app/pages/jobs"
          />
          <p className="first-msg">
            A simpler project, used to showcase my versatilty as a web
            developer.
          </p>
          <ProjectSection project={JOB_LISTING} />
        </div>
      </div>
      <div className="project-quick-scrolls" data-aos="fade">
        <h3>Quick Scroll</h3>
        <div className="project-switcher">
          <span
            onClick={() => setisBucksPageActive(true)}
            className={!isBucksPageActive ? 'not-active' : ''}
          >
            Bucks Fan Page
          </span>{' '}
          |{' '}
          <span
            onClick={() => setisBucksPageActive(false)}
            className={isBucksPageActive ? 'not-active' : ''}
          >
            Job Listing
          </span>
        </div>
        <div className="links">
          {isBucksPageActive ? (
            <>
              <p
                onClick={handleScrollToBucksProject}
                style={{ fontSize: '20px', fontWeight: 'bold' }}
              >
                Bucks Fan Page
              </p>
              {BUCKS_FAN_PAGE.map((obj, index) => (
                <div key={index}>
                  <p onClick={() => bucksPageQuickScroll(index)}>{obj.title}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              <p
                onClick={handleScrollToJobListing}
                style={{ fontSize: '20px', fontWeight: 'bold' }}
              >
                Job Listing
              </p>
              {JOB_LISTING.map((obj, index) => (
                <div key={index}>
                  <p onClick={() => jobListingQuickScroll(index)}>
                    {obj.title}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
