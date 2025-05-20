import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitiaLChartSettings, MarketData } from "types"

interface CoinsState {
  coins: MarketData[];
  chartSettings: InitiaLChartSettings;
}

const initialState: CoinsState = {
  coins: [],
  chartSettings: {
    interval: '60',
    symbol: 'BTCUSDT',
    limit: '100',
    category: 'inverse',
  },
};

export const coins = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<MarketData>) => {state.coins.push(action.payload)},
    
    delCoin: (state, action: PayloadAction<MarketData>) => {
      state.coins = state.coins.filter(item => item.symbol !== action.payload.symbol)
    },

    addChart: (state, action: PayloadAction<string>) => {
      state.chartSettings = {
        ...state.chartSettings,
        symbol: action.payload
      }
    },
  },
})

export const {addCoin, delCoin, addChart} = coins.actions
