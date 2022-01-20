import { configureStore } from '@reduxjs/toolkit'
import personReducer from '../features/person/personSlice'

export const store = configureStore({
    reducer: {
        person: personReducer
    },
  })