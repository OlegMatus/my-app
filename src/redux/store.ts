import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {themeReducer} from "./slices";
import {genreReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        theme: themeReducer

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