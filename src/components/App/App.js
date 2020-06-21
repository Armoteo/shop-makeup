import React from 'react';
import { Switch, Route } from 'react-router';
import { routes } from './Routes'

function App() {

  const renderPage = () => {
    return (
      <main>
        <Switch>
          {routes.map(renderRoute)}
        </Switch>
      </main>
    )
  };

  const renderRoute = (route, index) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}
      render={(props) => route.render({ ...props })}
    />
  }

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
