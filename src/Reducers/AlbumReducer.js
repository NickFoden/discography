const initialState = {
  albumArray: []
};

const AlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALBUMS":
      return {
        ...state,
        albumArray: action.data
      };
    default:
      return state;
  }
};

export default AlbumReducer;
