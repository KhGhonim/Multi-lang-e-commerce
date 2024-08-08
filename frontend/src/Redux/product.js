// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const lodaApi = createApi({
  reducerPath: 'lodaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-commerce-d5kp.onrender.com/api/' }),
  endpoints: (builder) => ({
    getlodaByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetlodaByNameQuery } = lodaApi