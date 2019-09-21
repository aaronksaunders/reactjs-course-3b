import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import PageOne from "./PageOne";
import PageOneDetail from "./PageOneDetail";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" render={() => <Redirect to="/page-one" />} />
        <Route path="/page-one" component={PageOne} />
        <Route path="/page-one-detail/:name" component={PageOneDetail} />
        <Route path="/page-two" component={PageTwo} />
        <Route path="/page-three" component={PageThree} />
      </Router>
    </Provider>
  );
}

export default App;
