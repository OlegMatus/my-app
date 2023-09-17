import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IGenresSate {
    genres: IGenre []
}


const initialState: IGenresSate = {
    genres: []
};
// const getMoviesByGenres = createAsyncThunk<IGenre, { id: number }>(
//     'genresSlice/getMoviesByGenres',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await genreService.getById(id);
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response.data)
//         }
//     }
// );
const getGenres = createAsyncThunk<IGenre>(
    'moviesSlice/getByGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
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
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
})

const {reducer: genreReducer, actions} = genresSlice;

const genreActions = {
    ...actions,
    getGenres,
    // getMoviesByGenres
};

export {
    genreReducer,
    genreActions
}