import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Header(props) {
  const { title, demoURL } = props;

  return (
    <div className="header">
      {title}
      {demoURL ? (
        <span style={{ fontSize: 'Initial' }}>
          {' '}
          (
          <a target="_blank" href={demoURL} rel="noopener noreferrer">
            demo
          </a>
          )
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
