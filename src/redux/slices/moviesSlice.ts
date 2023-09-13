import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    currentPage: number,
    totalPages: number,
    isLoading: boolean,
    error: any,
}

const initialState: IState = {
        movies: [],
        currentPage: null,
        totalPages: null,
        isLoading: null,
        error: null
    }
;
const getMovies = createAsyncThunk<{ data: IPagination<IMovie>, page: number }, { page: number }>(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return {data, page}

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
            state.movies = action.payload.data.results
            state.currentPage = action.payload.page
        })
        .addCase(getMovies.pending, (state, action) => {
            state.isLoading = true
            state.error = null
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