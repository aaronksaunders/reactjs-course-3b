import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import PageOne from "./PageOne";
import PageOneDetail from "./PageOneDetail";
import PageTwo from "./PageTwo";

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/page-one" />} />
      <Route path="/page-one" component={PageOne} />
      <Route path="/page-one-detail/:name" component={PageOneDetail} />
      <Route path="/page-two" component={PageTwo} />
    </Router>
  );
}

export default App;
