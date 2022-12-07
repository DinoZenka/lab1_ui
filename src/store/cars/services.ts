import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Car } from 'types';
import { API } from '../../constants'

type getAllCarsResponse = {
  data: Car[],
  message: string,
}
// Define a service using a base URL and expected endpoints
export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.CARS }),
  endpoints: (builder) => ({
    getAllCars: builder.query<getAllCarsResponse, void>({
      query: () => '/',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCarsQuery } = carsApi
