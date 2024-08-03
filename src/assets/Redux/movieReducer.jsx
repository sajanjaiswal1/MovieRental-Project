const initial_data = {
  movies: [],
};

export const movieReducer = (state = initial_data, action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
        return { 
            movies: action.payload
        }
    default:
      return state;
  }
};
