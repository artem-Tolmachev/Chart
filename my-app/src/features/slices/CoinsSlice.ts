import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MarketData } from "types"

const initialState: MarketData[] = [];

export const coins = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<MarketData>) => {state.push(action.payload)}
  },
})

export const {addCoin} = coins.actions
