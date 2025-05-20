import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitiaLChartSettings, MarketData } from "features/dashboard/types";

interface CoinOption {
  src: string;
  symbol: string;
}
interface chartSettings {
  interval: string;
  symbol: string;
  limit: string;
  category: string;
  };

interface CoinsState {
  chartSettings: chartSettings;
  coins: MarketData[];
  CoinOption: CoinOption;
}


const initialState: CoinsState = {
  coins: [],
  chartSettings: {
    interval: '60',
    symbol: 'BTCUSDT',
    limit: '100',
    category: 'inverse'
  },
  CoinOption: {
    src: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg',
    symbol: 'BTCUSDT'
  }
};

export const coins = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<MarketData>) => {state.coins.push(action.payload)},
    
    delCoin: (state, action: PayloadAction<MarketData>) => {
      state.coins = state.coins.filter(item => item.symbol !== action.payload.symbol)
    },

    addChart: (state, action: PayloadAction<{ symbol: string; src: string; }>) => {
      state.CoinOption = {
        ...state.CoinOption,
        symbol: action.payload.symbol,
        src: action.payload.src
      }
    },
  },
})

export const {addCoin, delCoin, addChart} = coins.actions
