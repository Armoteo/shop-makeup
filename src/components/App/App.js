import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/NotFound/NotFound";
import { routes } from "./Routes";
import { getFromLocalStorage } from "../../utils/storageWorks";
import { checkAuthAction } from "../../store/auth/actions";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authState);
  useEffect(() => {
    if (getFromLocalStorage("token")) {
      dispatch(checkAuthAction());
    }
  }, []);

  const renderRoute = (route, index) => (
    <Route exact={route.exact} key={index} path={route.path} render={(props) => route.render({ ...props })} />
  );

  const defendRouter = (routesComponent) => {
    return routesComponent.filter((el) => el.isProtected !== true);
  };

  const arrayRoute = () => {
    if (isAuth) {
      return routes.map(renderRoute);
    }
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
