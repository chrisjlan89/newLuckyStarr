import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";

import Home from "../Containers/Home";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* <h1> Home</h1> <h1> Cabin</h1> <h1> Venu</h1> */}
      <Route path="/" component={Home} exact={true} />
      {/* <Route path="/cabin" component={Cabin} />
      <Route path="/venue" component={Venue} />
      <Route path="/contact" component={Contact} /> */}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
