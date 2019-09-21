// store/actions.js
export const addThing = payload => {
  return { type: "ADD_THING", payload };
};

export const deleteThing = payload => {
  return { type: "DELETE_THING", payload };
};
