import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";
import Details from "./Details";
import Home from "./Home"
import CourseForm from "./CourseForm";
import Courses from "./Courses";




function App(props) {



  return (
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/AddNew">
        <CourseForm/>
      </Route>
      <Route exact path="/Courses">
        <Courses/>
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Switch>
  );
}

export default App;