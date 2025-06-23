import { configureStore } from '@reduxjs/toolkit'
import { productsData } from '../reducerc/Products'

export const store = configureStore({
  reducer: {
    products: productsData.reducer,
  },
})