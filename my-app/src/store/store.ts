import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsApi } from '../features/services/getApiCoins';
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import {coins} from '../features/slices/CoinsSlice';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    coins: coins.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 

setupListeners(store.dispatch)