import React from "react";
import { withRouter } from "react-router-dom";
import useThings from "./useThings";

const PageFour = props => {
  // get the function from my custon hook
  let { state, dispatch } = useThings();

  /**
   * add entry to the list using `dispatch` from custom hook
   */
  let addNewEntry = () => {
    dispatch({ type: "ADD_THING", data: "Entry " + new Date() });
  };

  /**
   * remove entry from the list using `dispatch` and index in the array
   * to call custom hook
   * @param {*} _index
   */
  let deleteEntry = _index => {
    dispatch({ type: "DELETE_THING", index: _index });
  };

  return (
    <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
      <h2>Page Four Component</h2>
      <h3>Demonstrating React Hooks API useReducer</h3>
      <p>
        A component that demonstrates useReducer by adding items to an array and
        then allowing you to remove the items from the array. This is a viable
        alterative to react-redux.
        <br />
        <br />
        See&nbsp;
        <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
          useReducer documentation
        </a>
      </p>
      <br />
      <div>
        {state.things.map((_thing, _index) => (
          <p key={_index}>
            <button onClick={() => deleteEntry(_index)}>Delete Entry</button>
            <span>&nbsp;&nbsp;{_thing}</span>
          </p>
        ))}
      </div>
      <p>
        <button onClick={() => props.history.goBack()}>Back</button>
        <button onClick={() => addNewEntry()}>Add Entry</button>
      </p>
    </div>
  );
};

export default withRouter(PageFour);
