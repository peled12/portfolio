import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';

function ThemeToggler({ onClick = () => {} }) {
  const handleOnChange = (changeTheme) => {
    changeTheme();
    onClick();
  };

  return (
    <>
      <AppContext.Consumer>
        {(values) => (
          <div style={{ marginBottom: 8 }}>
            <DarkModeToggle
              onChange={() => handleOnChange(values.changeTheme)}
              checked={values.darkMode}
              size={50}
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

ThemeToggler.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ThemeToggler;
