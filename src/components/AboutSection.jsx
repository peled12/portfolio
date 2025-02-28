import React from 'react';

function AboutSection({ title, text, number }) {
  return (
    <div className={'about-text number' + number}>
      <div className="title-container">
        <h2 className="about-title">{title}</h2>
      </div>
      <div
        className="about-reveal"
        dangerouslySetInnerHTML={{
          __html: text
            .replace(/<p>/g, '<p data-aos="fade-in">')
            .replace(/<\/p>/g, '</p>'),
        }}
      />
    </div>
  );
}

export default AboutSection;
