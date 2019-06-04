import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker.jsx";
import NotFound from "./NotFound.jsx";
import App from "./App.jsx";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
