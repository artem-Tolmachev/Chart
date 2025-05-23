import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketData } from "features/dashboard/types";
import {
  DEFAULT_CHART_SETTINGS,
  DEFAULT_COIN_OPTION,
  DefaultCoin,
  chartSettings
} from '../../coins/constants/defaultSettings';

interface CoinsState {
  chartSettings: chartSettings;
  coins: MarketData[];
  CoinData: DefaultCoin & {
    src: string;
    symbol: string;
  };
}
const initialState: CoinsState = {
  coins: [],
  chartSettings: DEFAULT_CHART_SETTINGS,
  CoinData: {
    ...DEFAULT_COIN_OPTION,
    src: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg',
    symbol: 'BTCUSDT'
  },
};

export const coins = createSlice({
  name: 'coins',
  initialState,
  reducers: {
  defaultLoading: (state, action: PayloadAction<DefaultCoin>) => { state.CoinData = {
            ...state.CoinData,
    ask1Price: action.payload.ask1Price,
    bid1Price: action.payload.bid1Price
    }

  },
  addCoin: (state, action: PayloadAction<MarketData>) => { state.coins.push(action.payload) },

  delCoin: (state, action: PayloadAction<MarketData>) => {
    state.coins = state.coins.filter(item => item.symbol !== action.payload.symbol)
  },

  addChart: (state, action: PayloadAction<{ 
    symbol: string,
    src: string,
    ask1Price: string,
    bid1Price: string
  }>) => {
    state.CoinData = {
      ...state.CoinData,
      symbol: action.payload.symbol,
      src: action.payload.src,
      ask1Price: action.payload.ask1Price,
      bid1Price: action.payload.bid1Price
    }
  },
},
})

export const { addCoin, delCoin, addChart, defaultLoading } = coins.actions
