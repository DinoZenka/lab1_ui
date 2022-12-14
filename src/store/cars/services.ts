import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Car, FormCar} from 'types';
import { API } from '../../constants'

type queryCarResponse = {
  data: Car[],
  message: string,
}

type mutationCarResponse = {
  data: Car,
  message: string,
}

// Define a service using a base URL and expected endpoints
export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.CARS }),
  endpoints: (builder) => ({
    getAllCars: builder.query<queryCarResponse, void>({
      query: () => '/',
    }),
    addCar: builder.mutation<mutationCarResponse, Car>({
      query: (body: Car) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
    deleteCar: builder.mutation<mutationCarResponse, string>({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'delete',
      })
    }),
    editCar: builder.mutation<mutationCarResponse, { id: string, input: FormCar }>({
      query: ({id, input }) => ({
        url: `/${id}`,
        method: 'put',
        body: input,
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCarsQuery, useAddCarMutation, useDeleteCarMutation, useEditCarMutation } = carsApi
