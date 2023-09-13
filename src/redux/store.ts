import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        // genres: genreReducer

    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}