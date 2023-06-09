/*
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    // Authorization: "bearer " + TMDB_TOKEN,
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzE1MTRiNTQyZTE4OWMxMTYxNmY5MzgwOWQ4OWE5MSIsInN1YiI6IjY0NzFkYjU0OWFlNjEzMDBlNTk0MGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ScVRYltVN0fs-_Nyb-xZgS9yh3SxZF9gT1K-BACytM',
};

export const AJAX = async (url) => {
    try {
        const data = await fetch(BASE_URL + url,
            {headers}
        );
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}*/

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
        prepareHeaders: (headers, {getState}) => {
            // Отримуємо Access Token зі стану Redux або з джерела вашого вибору
            // const accessToken = getState().auth.accessToken;
            const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzE1MTRiNTQyZTE4OWMxMTYxNmY5MzgwOWQ4OWE5MSIsInN1YiI6IjY0NzFkYjU0OWFlNjEzMDBlNTk0MGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ScVRYltVN0fs-_Nyb-xZgS9yh3SxZF9gT1K-BACytM';

            // Додаємо заголовок з токеном авторизації до запиту
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => `movie/popular`,
        }),
        getConfiguration: builder.query({
            query: () => `configuration`,
        }),
        getGenre: builder.query({
            query: () => `genre/movie/list`,
        }),
        getProviders: builder.query({
            query: () => `watch/providers/movie`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetPopularMoviesQuery,useGetConfigurationQuery, useGetGenreQuery, useGetProvidersQuery} = tmdbApi