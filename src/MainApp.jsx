import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';

const sections = [
  {
    component: 'About',
    path: '/about',
  },
  {
    component: 'Skills',
    path: '/skills',
  },
  {
    component: 'Education',
    headerTitle: 'Education',
    path: '/education',
  },
  {
    component: 'Projects',
    headerTitle: 'Projects',
    path: '/projects',
  },
  {
    component: 'Contact',
    headerTitle: 'Contact',
    path: '/contact',
  },
];

function MainApp() {
  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Suspense fallback={<FallbackSpinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            {sections.map((route, index) => {
              const SectionComponent = React.lazy(() =>
                import(`./components/${route.component}`)
              );
              return (
                <Route
                  key={index}
                  path={route.path}
                  component={() => (
                    <SectionComponent header={route.headerTitle} />
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default MainApp;
