import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MarketData } from "types"

const initialState: MarketData[] = [];

export const coins = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<MarketData>) => {state.push(action.payload)},
    delCoin: (state, action: PayloadAction<MarketData>) => {
      return state.filter(item => item.symbol !== action.payload.symbol);     
    }
  },
})

export const {addCoin, delCoin} = coins.actions
