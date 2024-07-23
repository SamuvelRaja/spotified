//import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const clientSky =localStorage.getItem('acctk')
export const shazamApi=createApi({
    reducerPath:'shazamApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.spotify.com/v1",
        prepareHeaders:(headers)=>{
            headers.set("Authorization", `Bearer ${clientSky}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getGenre:builder.query({query:(genre) => `/browse/categories`}),
        getPlaylist:builder.query({query:(playlist) => `/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc`}),
    })
})

export const { useGetGenreQuery,useGetPlaylistQuery } = shazamApi

