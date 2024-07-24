//import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Your existing access token retrieval
const clientSky = localStorage.getItem('acctk');

// Create the API slice
export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: async (args, api, extraOptions) => {
        // Initial request
        const baseQuery = fetchBaseQuery({
            baseUrl: "https://api.spotify.com/v1",
            prepareHeaders: (headers) => {
                const token = localStorage.getItem('acctk');
                headers.set("Authorization", `Bearer ${token}`);
                return headers;
            }
        });

        let result = await baseQuery(args, api, extraOptions);

        // If we get a 401, call the fetchaccess function
        if (result.error && result.error.status === 401) {
            await fetchaccess(); // This function handles token refresh and updates localStorage
        }

        return result;
    },
    endpoints: (builder) => ({
        getAllGenre: builder.query({ query: () => `/browse/categories` }),
        getGenre: builder.query({ query: (genre) => `/browse/categories/${genre}/playlists` }),
        getPlaylist: builder.query({ query: (playlist) => `/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc` }),
    })
});


export const { useGetGenreQuery,useGetPlaylistQuery,useGetAllGenreQuery } = shazamApi
