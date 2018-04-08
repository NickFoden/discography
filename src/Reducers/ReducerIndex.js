import { combineReducers } from "redux";
import AlbumReducer from "./AlbumReducer"


const rootReducer = combineReducers({
  albums: AlbumReducer
});

export default rootReducer;
