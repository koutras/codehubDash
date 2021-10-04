import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";
import Details from "./Details";
import Home from "./Home"


function App(props) {



  return (
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Switch>
  );
}

export default App;