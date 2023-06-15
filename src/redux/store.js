import {configureStore} from '@reduxjs/toolkit'
import {tmdbApi} from "../utils/apiFetching.js";
import {setupListeners} from "@reduxjs/toolkit/query";
import {ipApi} from "../utils/apiIp.js";


export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        [ipApi.reducerPath]: ipApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware).concat(ipApi.middleware),
})


setupListeners(store.dispatch)
