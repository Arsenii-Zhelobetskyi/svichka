import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const ipApi = createApi({
    reducerPath: 'ipApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ipapi.co/',
    }),
    endpoints: (builder) => ({
        getLanguages: builder.query({
            query: () => `json/`,
        }),
    })
})
export const {useGetLanguagesQuery} = ipApi