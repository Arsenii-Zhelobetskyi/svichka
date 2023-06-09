import {configureStore} from '@reduxjs/toolkit'
import {tmdbApi} from "../utils/apiFetching.js";
import {setupListeners} from "@reduxjs/toolkit/query";
// import apiConfigSlice from "./feature/apiConfigSlice.js";


export const store = configureStore({
    reducer: {
        // config: apiConfigSlice,
        [tmdbApi.reducerPath]: tmdbApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
})


setupListeners(store.dispatch)
