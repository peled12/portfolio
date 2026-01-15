import React, { useEffect } from 'react';

import '../css/myProject.css';

import ScrollReveal from 'scrollreveal';

import Header from './Header';

/*
  TODO: replace the seperators in each line with color diffrinciating
        each row. each row should be the width of the screen
*/

const project = [
  {
    title: 'Real Time Chatting',
    vidSrc: '',
    text: [
      'You can feel free to chat with your friends on the website, or just DM or reply to users.',
      "Using socket.io, i've managed to apply real-time chatting, sousers can actively message each other about a subject they would like to discuss. weather its ticket selling, basketball, or just generaly anything.",
    ],
  },
  {
    title: 'Fan Posting',
    vidSrc: '',
    text: [
      'Users can post their opinions on the current state of the Milwaukee Bucks via articles they make (fanposts) or trade ideas.',
      "Everyone can scroll through the fanposts or trade ideas, and explore others' prespective.",
    ],
  },
  {
    title: 'Comments & post interactions',
    vidSrc: '',
    text: [
      'On every post you make, users can express their thoughts by interacting with it. Interacting includes liking or disliking posts, commenting and also replying.',
      'interacting with posts or creating ones can create discussions between users on the website which can help sharing their basketball opinions.',
    ],
  },
  {
    title: 'User Leaderboard',
    vidSrc: '',
    text: [
      'To encourage users to post and share their basketball opinion, the get coins when receiving likes on posts or comments they publish.',
      'Users can use these coins to buy players, and appear on the leaderboard. The standing depends on the average rating users gave you, the coins you have available, or the coins you have spent (depending on the section).',
      'This grants the website a competitive environment, that could make users spend more time expressing the thoughts and giving the site a funner vibe.',
    ],
  },
  {
    title: 'Box Scores and NBA data',
    vidSrc: '',
    text: [
      'I used the API i found to get real-time NBA data, and make from it game recaps and previews, highligting the next and last Bucks games. Besides, all the recaps and previews from all the yesterday and tomorrow games are displayed as well.',
      'In addition, i used this API to get recent articles, the Bucks roster and schedule, and much more.',
    ],
  },
  {
    title: 'Game Rating',
    vidSrc: '',
    text: [
      'Users can rate each Bucks game after each game, and also include how their thoughts of it. The game rates section gives another subject for users to discuss.',
      'People that have something to say about a certain opinion about a game, can ask about it or share their opinion with the publisher.',
    ],
  },
  {
    title: 'Ticket Market',
    vidSrc: '',
    text: [
      "People that might have tickets for a game that they won't go to, can post it on the site and look for potential buyers.",
      'This can make the site more useful for people, asthey might find tickets for a better price.',
    ],
  },
];

function MyProject() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.project-row', {
      origin: 'bottom',
      distance: '50px',
      duration: '900',
      delay: '75',
      opacity: '0',
      easing: 'ease-in-out',
      reset: false,
    });
  }, []);

  return (
    <div className="my-project-page">
      <Header title="Bucks Fan Page" />
      <div className="project-container">
        <p className="first-msg">
          Lets go through the features of the the fan page i've made.
        </p>
        {project.map((obj, index) => (
          <>
            <div
              key={index}
              className={'project-row ' + (index % 2 === 0 ? 'even' : 'odd')}
            >
              <div className={'in-row ' + (index % 2 === 0 ? 'even' : 'odd')}>
                <div className="text">
                  <h1>{obj.title}</h1>
                  {obj.text.map((text) => (
                    <p>{text}</p>
                  ))}
                </div>
              </div>
            </div>
            {index !== project.length - 1 && <div className="seperator"></div>}
          </>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
