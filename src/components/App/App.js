import React from 'react';
import { Switch, Route } from 'react-router';
import { useAuth } from '../hooks/auth.hook';
import NotFound from '../Pages/NotFound/NotFound';
import { routes } from './Routes'

function App() {
  const { token } = useAuth()

  const renderPage = () => (
    <main>
      <Switch>
        {arrayRoute()}
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </main>
  )

  const arrayRoute = () => {
    if (token) {
      return routes.map(renderRoute)
    } else {
      let newRoutes = defendRouter(routes)
      return newRoutes.map(renderRoute)
    }
  }

  const defendRouter = (routes) => {
    return routes.filter(el => el.isProtected !== true)
  }

  const renderRoute = (route, index) => (
    <Route
      exact={route.exact}
      key={index}
      path={route.path}
      render={(props) => route.render({ ...props })}
    />
  )


  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
