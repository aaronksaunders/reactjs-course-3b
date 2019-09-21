import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addThing, deleteThing } from "./store/actions";

const PageThree = props => {
  let addNewEntry = () => {
    props.addThing("Entry " + new Date());
  };

  let deleteEntry = _index => {
    props.deleteThing(_index);
  };

  return (
    <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
      <h2>Page Three Component</h2>
      <h3>Demonstrating React Redux</h3>
      <p>
        A component that demonstrates react redux by adding items to an array
        and then allowing you to remove the items from the array.Please be
        certain to installed{" "}
        <a href="http://extension.remotedev.io/">Redux DevTools Extension</a> to
        track actions in your browser
      </p>
      <br/>
      <div>
        {props.things.map((_thing, _index) => (
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

/**
 * maps the specific state property into a property that is accessible
 * to the component as a property
 *
 * @param {*} state
 */
const mapStateToProps = state => {
  return { things: state.things };
};

/**
 * maps the specific actions into a functions that are accessible
 * to the component as a property
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    addThing: thing => dispatch(addThing(thing)),
    deleteThing: index => dispatch(deleteThing(index))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageThree)
);
