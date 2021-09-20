import React from "react";
import { Switch, Route } from "react-router";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/NotFound/NotFound";
import { routes } from "./Routes";

function App() {
  const renderRoute = (route, index) => (
    <Route exact={route.exact} key={index} path={route.path} render={(props) => route.render({ ...props })} />
  );

  const defendRouter = (routesComponent) => {
    return routesComponent.filter((el) => el.isProtected !== true);
  };

  const arrayRoute = () => {
    // if (token) {
    //   return routes.map(renderRoute);
    // }
    const newRoutes = defendRouter(routes);
    return newRoutes.map(renderRoute);
  };

  const renderPage = () => (
    <main>
      <Layout>
        <Switch>
          {arrayRoute()}
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Layout>
    </main>
  );

  return <div>{renderPage()}</div>;
}

export default App;
