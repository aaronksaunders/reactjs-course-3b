import React from "react";
import { withRouter, Link } from "react-router-dom";
const PageOne = props => (
  <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
    <h2>Page One Component</h2>
    <p></p>
    <button onClick={() => props.history.push("/page-two")}>
      Show Page Two
    </button>
    <Link to="/page-one-detail/Hulk">
      <p>Hulk</p>
    </Link>
    <Link to="/page-one-detail/Iron Man">
      <p>Iron Man</p>
    </Link>
  </div>
);

export default withRouter(PageOne);
