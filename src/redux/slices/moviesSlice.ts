import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    movie: IMovie,
    pages: number,
    next: number,
    prev: number,
    vote_average: number,
    poster_path: string,
    error: any
}

const initialState: IState = {
    movies: [],
    movie: null,
    pages: 0,
    next: null,
    prev: null,
    vote_average: null,
    poster_path: null,
    error: null
};
const getMovies = createAsyncThunk<IMovie[], void>(
    'moviesSlice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.movie = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.error = action.payload
        })
})

const {reducer: movieReducer, actions} = moviesSlice;
const movieActions = {
    ...actions,
    getMovies
}

export {
    movieReducer,
    movieActions
}