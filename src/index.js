import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StatusPage from "./views/StatusPage";
import Form from "./views/Form";
import HistoryPage from "./views/HistoryPage";

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={StatusPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/form" component={Form} />
      </App>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
