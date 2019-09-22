import React from "react";
import { withRouter, Link } from "react-router-dom";
const PageOne = props => (
  <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
    <h2>Page One Component</h2>
    <p></p>
    <button onClick={() => props.history.push("/page-two")}>
      Show Page Two - Passing Params In Routes
    </button><br/>
    <button onClick={() => props.history.push("/page-three")}>
      Show Page Three - React Redux Example
    </button><br/>
    <button onClick={() => props.history.push("/page-four")}>
      Show Page Four - React Hooks Reducer Example
    </button><br/>
    <Link to="/page-one-detail/Hulk">
      <p>Hulk</p>
    </Link>
    <Link to="/page-one-detail/Iron Man">
      <p>Iron Man</p>
    </Link>
  </div>
);

export default withRouter(PageOne);
