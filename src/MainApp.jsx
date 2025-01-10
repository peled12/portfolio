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
    component: 'MyProject',
    path: '/myProject',
  },
  {
    component: 'Projects',
    headerTitle: 'Projects',
    path: '/projects',
  },
];

function MainApp() {
  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {sections.map((route) => {
              const SectionComponent = React.lazy(() =>
                import('./components/' + route.component)
              );
              return (
                <Route
                  key={route.headerTitle}
                  path={route.path}
                  component={() => (
                    <SectionComponent header={route.headerTitle} />
                  )}
                />
              );
            })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
