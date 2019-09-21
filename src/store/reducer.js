const initialState = {
  things: []
};
function rootReducer(state = initialState, action) {
  if (action.type === "ADD_THING") {
    return {
      ...state,
      things: [...state.things, action.payload]
    };
  }

  if (action.type === "DELETE_THING") {
    return {
      ...state,
      things: [
        ...state.things.slice(0, action.payload),
        ...state.things.slice(action.payload + 1)
      ]
    };
  }
  return state;
}

export default rootReducer;
