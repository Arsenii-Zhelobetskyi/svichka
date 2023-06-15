/*
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzE1MTRiNTQyZTE4OWMxMTYxNmY5MzgwOWQ4OWE5MSIsInN1YiI6IjY0NzFkYjU0OWFlNjEzMDBlNTk0MGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ScVRYltVN0fs-_Nyb-xZgS9yh3SxZF9gT1K-BACytM'
    }
};

export const fetchMovies = createAsyncThunk('home/fetchMovies', async () => {
    // const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    // const data = await response.json()
    // return data.results;
})


const initialState = [];

const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default HomeSlice.reducer

export const selectHomeMovies = (state) => state.homeMovies*/
