import React from 'react';
import './App.module.scss';
import { Switch, Route } from 'react-router';
import { routes } from './Routes'
import { Link } from 'react-router-dom';

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
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/admin">ADMIN</Link>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
