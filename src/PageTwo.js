import React from "react";
export default props => (
  <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
    <h2>Page Two Component</h2>
    <p></p>
    <button onClick={() => props.history.goBack()}>Back</button>
  </div>
);
