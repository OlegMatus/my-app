import {createSlice} from "@reduxjs/toolkit";

const initialState = {
themeSwitch: false
};
const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeThemeSwitch: state => {
            state.themeSwitch = !state.themeSwitch
        }
    }
});

const {reducer:themeReducer, actions: themeActions} = themeSlice;

export {
    themeReducer,
    themeActions
}