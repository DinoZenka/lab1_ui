import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit'
import { Car } from '../../types'

export interface CarsState {
  cars: number,
}

const initialState: CarsState = {
  cars: 0,
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    increment: (state) => {
      state.cars += 1
    },
    decrement: (state) => {
      state.cars -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.cars += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = carsSlice.actions

export default carsSlice.reducer
