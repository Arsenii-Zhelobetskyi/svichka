import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
        prepareHeaders: (headers,) => {
            const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzE1MTRiNTQyZTE4OWMxMTYxNmY5MzgwOWQ4OWE5MSIsInN1YiI6IjY0NzFkYjU0OWFlNjEzMDBlNTk0MGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ScVRYltVN0fs-_Nyb-xZgS9yh3SxZF9gT1K-BACytM';
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getConfiguration: builder.query({
            query: () => `configuration`,
        }),

        getPopularMovies: builder.query({
            query: (language) => `movie/popular?language=${language}`,
        }),
        getNowPlaying: builder.query({
            query: () => `movie/now_playing`,
        }),

        getGenre: builder.query({
            query: (language) => `genre/movie/list?language=${language}`,
        }),


        getMovieDetails: builder.query({
            query: (data) => {
                const {content_id, language} = data;
                return {
                    url: `movie/${content_id}?language=${language}`
                }
            }

        }),
        getMovieActors: builder.query({
            query: (data) => {
                const {content_id, language} = data;
                return {
                    url: `movie/${content_id}/credits?language=${language}`
                }
            },
        }),
        getSimiliarMovies: builder.query({
            query: (data) => {
                const {content_id, language} = data;
                return {
                    url: `movie/${content_id}/similar?language=${language}`
                }
            },
        }),
        getRecommendedMovies: builder.query({
            query: (data) => {
                const {content_id, language} = data;
                return {
                    url: `movie/${content_id}/recommendations?language=${language}`
                }
            },
        }),
        getMovieRecomendations: builder.query({
            query: (movie_id) => `movie/${movie_id}/recommendations`,
        }),
    }),
})


export const {
    useGetConfigurationQuery,
    useGetPopularMoviesQuery,
    useGetMovieDetailsQuery,
    useGetProvidersQuery,
    useGetGenreQuery,
    useGetNowPlayingQuery,
    useGetMovieActorsQuery,
    useGetSimiliarMoviesQuery,
    useGetRecommendedMoviesQuery
} = tmdbApi