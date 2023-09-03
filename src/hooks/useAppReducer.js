import {useContext} from "react";
import {StateContext} from "../hoc/provider";

const useAppReducer = (cb) => cb(useContext(StateContext));

export {
    useAppReducer
}