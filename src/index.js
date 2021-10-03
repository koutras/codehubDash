import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
  } from "react-router-dom";
  
import { createBrowserHistory } from "history";
import createStore from './createReduxStore'

const history = createBrowserHistory();
const store = createStore()
ReactDOM.render(<Router><Provider><App  history={history}/></Provider></Router>, document.getElementById("root"));