import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import ThemeToggler from './ThemeToggler';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.navbar__link--active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const sections = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Work', href: '/projects' },
  { title: 'Skills', href: '/skills' },
  { title: 'Education', href: '/education' },
  { title: 'Contact', href: '/contact' },
];

const resumeSection = {
  title: 'Resume',
  href: 'https://peledkoren7.wordpress.com/wp-content/uploads/2025/08/peled-koren-resume.docx',
};

const logo = {
  height: 45,
  source: 'images/logo.png',
  width: 50,
};

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg={window.location.pathname === '/' ? 'transparent' : 'dark'}
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo.source}
            className="d-inline-block align-top"
            alt="main logo"
            style={
              logo?.height && logo?.width
                ? { height: logo.height, width: logo.width }
                : styles.logoStyle
            }
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {sections.map((section, index) =>
              section?.type === 'link' ? (
                <ExternalNavLink
                  key={section.title}
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setExpanded(false)}
                  className="navbar__link"
                  theme={theme}
                >
                  {section.title}
                </ExternalNavLink>
              ) : (
                <InternalNavLink
                  key={section.title}
                  onClick={() => setExpanded(false)}
                  exact={index === 0}
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to={section.href}
                  theme={theme}
                >
                  {section.title}
                </InternalNavLink>
              )
            )}
            <ExternalNavLink
              href={resumeSection.href}
              download
              theme={theme}
              className="navbar__link navbar__link--active"
              style={{ color: 'white' }}
              onClick={() => setExpanded(false)}
            >
              {resumeSection.title}
            </ExternalNavLink>
          </Nav>
          <ThemeToggler onClick={() => setExpanded(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
