import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReduser } from "redux-form";
// import thunkMiddleware from "redux-thunk";
import NewsReduser from "./SingleNews";
const rootReducers = combineReducers({
  form: formReduser,
  news: NewsReduser,
});
const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  compoceEnhancers(applyMiddleware())
);

window.__store__ = store;

export default store;
