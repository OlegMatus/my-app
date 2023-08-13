import {combineReducers, createStore} from "redux";
// import {composeWithDevTools} from "@redux-devtools/extension";
import {episodesReducer} from "./reducers";
import {charactersReducer} from "./reducers/charactersReducer";

const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer
});
// const composeEnhancers = composeWithDevTools({
//     trace: true,
//     traceLimit: 25
// })
const store = createStore(rootReducer);
    export default store