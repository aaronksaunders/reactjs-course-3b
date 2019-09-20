import React from "react";
import { withRouter } from "react-router-dom";
const PageOneDetail = props => (
  <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
    <h2>Page One Detail Component</h2>
    <p>A component that is passed a URL parameter from the router</p>
    <p style={{ fontWeight: "bold" }}>{props.match.params.name}</p>
    <p>
      <button onClick={() => props.history.goBack()}>Back</button>
    </p>
  </div>
);

export default withRouter(PageOneDetail);
