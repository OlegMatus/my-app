import {applyMiddleware, combineReducers, createStore} from "redux";
import {carsReducer} from "./reducers";
import thunk from "redux-thunk";
// import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    cars: carsReducer,
});

// const composeEnhancers = composeWithDevTools({
//     trace: true,
//     traceLimit: 25
// })

const store = createStore(rootReducer,applyMiddleware(thunk))
export {
    store
}