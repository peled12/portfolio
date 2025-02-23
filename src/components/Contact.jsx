import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import '../css/contact.css';

import Header from './Header';
// import sleep from './utils/sleep';

function Contact() {
  const [loading, setloading] = useState(false);

  // const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    setloading(true);

    const formData = new FormData(e.target);
    const jsonObject = Object.fromEntries(formData.entries());

    console.log(jsonObject);

    // try {
    //   // start the animation
    //   const loader = document.querySelector('.contact-loader');
    //   loader.style.display = 'block';

    //   // send the request to Formspree API
    //   const response = await fetch('https://formspree.io/f/mnnjyjwb', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       _subject: 'New Email From Portfolio Website',
    //       message: `Email: ${jsonObject.email}\nMessage: ${jsonObject.message}`,
    //     }),
    //   });

    //   // handle response
    //   await sleep(150); // add a slight delay for coolness

    //   // set the correct color based on the response
    //   if (response.ok) {
    //     loader.classList.add('green');

    //     alert('Email sent successfully!');

    //     history.push('/'); // redirect to the home page
    //   } else {
    //     loader.classList.add('red');

    //     console.log(response);
    //   }

    //   await sleep(150); // add a slight delay for coolness

    //   loader.style.display = 'none'; // hide the loader
    //   loader.classList.remove('green', 'red'); // remove colors classlists
    // } catch (error) {
    //   alert('Something went wrong. Please try again.');
    // } finally {
    //   setloading(false); // Hide loading indicator once the request is done
    // }
  }

  return (
    <div className="contact-page">
      <Header title="Contact Me"></Header>
      <h5>
        I am currently available for hire and open to new opportunities,
        including internships. I also welcome any insights or advice you may
        have. Please feel free to reach out — I would be happy to connect.
      </h5>
      <form
        className="contact-form"
        action="https://formspree.io/f/mnnjyjwb"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label htmlFor="text">
          <p>Content:</p>
          <textarea id="text" name="text" required></textarea>
        </label>

        <div className="second-row-container">
          <label htmlFor="email">
            <p>Email:</p>
            <input type="email" id="email" name="email" required />
          </label>
          <button type="submit" disabled={loading} className="submit-btn">
            Send
          </button>
        </div>
      </form>
      <div className="contact-loader"></div>
    </div>
  );
}

export default Contact;
