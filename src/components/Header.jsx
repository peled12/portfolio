import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Header(props) {
  const { title, url } = props;

  return (
    <div className="header">
      {title}
      {url ? (
        <span style={{ fontSize: 'Initial' }}>
          {' '}
          (
          <a target="_blank" href={url} rel="noopener noreferrer">
            link
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
