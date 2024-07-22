import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

export const shazamApi=createApi({
    reducerPath:'shazamApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.spotify.com/v1/",
        prepareHeaders:(headers)=>{
            headers.set("Authorization",process.env.API_KEY)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getCategory:builder.query({query:"/browse/categories"})
    })
})

export const { useGetCategoryQuery } = shazamApi

