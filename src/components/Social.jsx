import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/peled-koren-263019338/',
    network: 'linkedin',
  },
  { href: 'https://github.com/peled12', network: 'github' },
  {
    href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=korenpeled08@gmail.com',
    network: 'email',
  },
];

function Social() {
  const theme = useContext(ThemeContext);

  return (
    <div className="social">
      {socialLinks.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
}

export default Social;
