import {combineReducers, createStore} from "redux";
// import {composeWithDevTools} from "@redux-devtools/extension";
import {episodesReducer} from "./reducers";

const rootReducer = combineReducers({
    episodes: episodesReducer
});
// const composeEnhancers = composeWithDevTools({
//     trace: true,
//     traceLimit: 25
// })
const store = createStore(rootReducer);
    export default store