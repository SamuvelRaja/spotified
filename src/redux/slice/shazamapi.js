//import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey =import.meta.env.VITE_CLIENT_SECRET;
console.log(apiKey)
export const shazamApi=createApi({
    reducerPath:'shazamApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://www.googleapis.com/youtube/v3/",
        // prepareHeaders:(headers)=>{
        //     headers.set("x-rapidapi-key", clientSecret)
        //     return headers
        // }
    }),
    endpoints:(builder)=>({
        getGenre:builder.query({query:(genre) => `/search?part=snippet&maxResults=10&q=${genre}+music&type=video&key=${apiKey}`}),
        getPlaylist:builder.query({query:(playlist) => `/search?part=snippet&maxResults=25&q=${playlist}+music+playlist&type=video&key=${apiKey}`}),
    })
})

export const { useGetGenreQuery,useGetPlaylistQuery } = shazamApi

