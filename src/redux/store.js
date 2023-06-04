import {configureStore} from '@reduxjs/toolkit'

// slices:
import homeFetch from './feature/homeSlice.js'
export default configureStore({
    reducer: {
        homeMovies:homeFetch,
    }
})
