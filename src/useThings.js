import React from "react";

const useThings = () => {
    const reducer = (state, action) => {
      switch (action.type) {
        case "ADD_THING": {
          return { ...state, things: [...state.things, action.data] };
        }
        case "DELETE_THING": {
          return {
            ...state,
            things: [
              ...state.things.slice(0, action.index),
              ...state.things.slice(action.index + 1)
            ]
          };
        }
        default: {
          return state;
        }
      }
    };
  
    const [state, dispatch] = React.useReducer(reducer, {
      things: []
    });
  
    return {
      state,
      dispatch
    };
  };

  export default useThings;