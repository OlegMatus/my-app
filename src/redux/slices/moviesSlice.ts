import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IPagination} from "../../interfaces";
import {IRes, movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    movieDetail: IMovie,
    currentPage: number,
    totalPages: number,
    poster_path: string,
    vote_average: number,
    isLoading: boolean,
    error: any,
}

const initialState: IState = {
        movies: [],
        movieDetail: null,
        currentPage: null,
        totalPages: null,
        poster_path: null,
        vote_average: null,
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
);
const getMovieById = createAsyncThunk<IRes<IMovie>, { id: number }>(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovies.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(getMovies.fulfilled, (state, action) => {
            const {data: {results, total_pages, page}} = action.payload
            state.movies = results
            state.currentPage = page
            state.totalPages = total_pages
            state.isLoading = false
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(getMovieById.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movieDetail = action.payload
            state.isLoading = false;
        })
        .addCase(getMovieById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong.';
        })
});
const {reducer: movieReducer, actions} = moviesSlice;
const movieActions = {
    ...actions,
    getMovies,
    getMovieById
}

export {
    movieReducer,
    movieActions
}