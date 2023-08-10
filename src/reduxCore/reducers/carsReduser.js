import {carsActionsTypes} from "../actions";

const initialState = {
   cars: []
}
const carsReducer = (state=initialState,action) => {
    switch (action.type) {
        case carsActionsTypes.SET:
            return {
                ...state,
                cars: action.payload,
            }
        default:
            return state;
    }

}
export {
    carsReducer
}