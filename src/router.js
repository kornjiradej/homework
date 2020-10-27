import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Layout from "./pages/Layout/Layout";

import Home from "./pages/Home/Home";

const RouteLayout = ({ component: Component }) => {
  return (
    <Route 
      render={(props) => { 
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteLayout exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
