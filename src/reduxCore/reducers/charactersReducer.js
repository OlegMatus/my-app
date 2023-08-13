import {charactersActionsTypes} from "../actions";

const initialSate = {
    characters: []
};

const charactersReducer = (state = initialSate, action) => {
    switch (action.type) {
        case charactersActionsTypes.SETC:
            return {...state, characters: action.payload}
        default:
            return state
    }
}
export {
    charactersReducer
}