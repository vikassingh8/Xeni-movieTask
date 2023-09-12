const initialValue = [];

const change = (state = initialValue, action) => {
  if (action.type === 'FETCH_DATA_SUCCESS') {
    return {
      ...state,
      // data: action.payload,
      // loading: false,
      // error: null,
    };
  } else if (action.type === 'FETCH_DATA_FAILURE') {
    return {
      ...state,
      // data: [],
      // loading: false,
      // error: action.payload,
    };
  } else if (action.type === "WatchList") {
    // Check if the item already exists in the state
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === action.item.id) {
        // If it exists, return the state without any changes
        return state;
      }
    }
    
    // If the item doesn't exist, return a new state with the added item
    return [...action.item];

  } else if (action.type === "delete") { // Corrected "delet" to "delete"
    // Filter out the item to be deleted based on its ID
    const updatedState = state.filter((item) => item.id !== action.id);
    return updatedState;
  } else {
    return state;
  }
};

export default change;
