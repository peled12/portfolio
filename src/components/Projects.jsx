import React, { useEffect, useState } from 'react';

import '../css/Project.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import Header from './Header';

import quickScroll from './utils/quickScroll';
import ProjectSection from './ProjectSection';

const BUCKS_FAN_PAGE = [
  {
    title: 'Real Time Chatting',
    text: [
      'You can feel free to chat with your friends on the website, or just DM or reply to users.',
      "Using socket.io, i've managed to apply real-time chatting, sousers can actively message each other about a subject they would like to discuss. weather its about ticket selling, basketball, or anything else",
    ],
  },
  {
    title: 'Fan Posting',
    text: [
      'Users can post their opinions on the current state of the Milwaukee Bucks via articles they make (fanposts) or trade ideas.',
      "Everyone can scroll through the fanposts or trade ideas, and explore others' prespective.",
    ],
  },
  {
    title: 'Comments & post interactions',
    text: [
      'On every post you make, users can express their thoughts by interacting with it. Interacting includes liking or disliking posts, commenting and also replying.',
      'interacting with posts or creating ones can create discussions between users on the website which can help sharing their basketball opinions.',
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
    title: 'Profile Dashboard',
    text: [
      'This website has a profile dashboard section, where users can interact with their profile.',
      "They can do things like changing their profile picture, changing their user credentials, viewing / interacting with their posts, changing their roster's visibilty state and more. Things like that could make the user's time interacting with the website smoother and boost the user experience.",
    ],
  },
  {
    title: 'Ticket Market',
    text: [
      "People that might have tickets for a game that they won't go to, may post it on the site and look for potential buyers.",
      'This can make the site more useful for people, as they might find tickets for a better price.',
    ],
  },
  {
    title: 'More',
    text: [
      "This app has a variety of features that are a part of the things I've included like profile picture displaytion, pregame polls and much more.",
      'The best way to experience those features is to try it yourself! so feel free to click the link and try the demo!',
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
      duration: 800,
      offset: 40, // distance before triggering the animation
      easing: 'ease-in-out',
      once: false,
      delay: 5,
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
      <h6 className="project-intro">
        Here are some projects I made to showcase my full-stack engineering
        skills (besides this one).
      </h6>
      <div className="project-container bucks-page">
        <div className="BucksFanPage-header-container" data-aos="fade-up">
          <Header title="Bucks Fan Page" />
          <p className="first-msg">
            Let's go through the features of the fan page I've made.
          </p>
        </div>
        <ProjectSection project={BUCKS_FAN_PAGE} />
      </div>
      <div className="project-container job-listing">
        <div className="JobListing-header-container" data-aos="fade-up">
          <Header title="Job Listing" />
          <p className="first-msg">
            And here are the features of the Job Listing page.
          </p>
          <ProjectSection project={JOB_LISTING} />
        </div>
      </div>
      <div className="project-quick-scrolls">
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
