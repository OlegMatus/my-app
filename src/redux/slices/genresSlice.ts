import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IPagination} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IGenresSate {
    genres: IGenre [],
    page: number
}


const initialState: IGenresSate = {
    genres: [],
    page: null
};

const getGenres = createAsyncThunk<{ data: IPagination<IGenre>, page: number }, { page: number }>(
    'moviesSlice/getByGenres',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll(page);
            return {data, page}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getGenres.fulfilled, (state, {payload}) => {
            state.genres = payload.data.results
            state.page = payload.page
        })
})

const {reducer: genreReducer, actions} = genresSlice;

const genreActions = {
    ...actions,
    getGenres
};

export {
    genreReducer,
    genreActions
}