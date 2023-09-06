import {useContext} from "react";
import {StateContext} from "../hoc/provider";

const useAppReducer = (cb) => cb(useContext(StateContext));


// const getReducer = (reducers) => {
//     return reducers.cars
// }
// useAppReducer(reducers=>reducers.cars)


export {
    useAppReducer
}