import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "70aa10fe1emsh9d0b4967d99c4f3p1be847jsn3e79250c4ebc"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: ({ searchTerm }) =>
        `search?term=${searchTerm}&locale=en-US&offset=0&limit=5`,
    }),
    getDiscover: builder.query({
      query: () => "/songs/list-recommendations?key=484129036&locale=en-US",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}&locale=en-US`,
    }),
    getPlaylistsDetails: builder.query({
      query: () => "/charts/track?locale=en-US&pageSize=20&startFrom=0",
    }),
    getSearchTexts: builder.query({
      query: ({ debouncedValue }) =>
        `/auto-complete?term=${debouncedValue}&locale=en-US`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artists/get-summary?id=${artistId}&l=en-US`,
    }),
    getAroundYouDetails: builder.query({
      query: () =>
        "/charts/track?locale=hi-IN&listId=ip-country-chart-IN&pageSize=20&startFrom=0",
    }),
    getTopCharts: builder.query({
      query: () =>
        "/charts/track?locale=en-US&listId=genre-global-chart-2&pageSize=20&startFrom=0",
    }),
  }),
});

export const {
  useGetSearchResultsQuery,
  useGetAroundYouDetailsQuery,
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetPlaylistsDetailsQuery,
  useGetSearchTextsQuery,
  useGetArtistDetailsQuery,
  useGetDiscoverQuery,
} = shazamCoreApi;
