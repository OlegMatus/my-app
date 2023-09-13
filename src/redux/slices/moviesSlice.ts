import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    currentPage: number,
    totalPages: number,
    error: any,
}

const initialState: IState = {
        movies: [],
        currentPage: 1,
        totalPages: 2,
        error: null
    }
;
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
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.error = action.payload
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;
const movieActions = {
    ...actions,
    getMovies
}

export {
    moviesReducer,
    movieActions
}