import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/ReducerIndex";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

window.store = store;

export default store;
