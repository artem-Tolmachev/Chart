import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { defaultCoinParser, tickerParser } from 'features/dashboard/utils/Parser';
import {CoinsData} from '../../dashboard/types/index';
import { DefaultCoin } from '../constants/defaultSettings';
export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/get-futures'}),
  endpoints: (builder) => ({
    getCoins: builder.query<{
      tickers: ReturnType<typeof tickerParser>, 
      btcData: DefaultCoin
    }, void>({
      query: () => '',
       transformResponse: (response: { result?: { list?: CoinsData[]}}) => {
        const list = response?.result?.list || [];
        const btcusdt = response?.result?.list?.find((ticker)=> ticker.symbol === 'BTCUSDT');        
        if (!btcusdt) {
        throw new Error('Required BTCUSDT pair not found');
      }
        return {
          tickers: tickerParser(list),
          btcData: defaultCoinParser(btcusdt)
        } 
      },
    }),
  }),
})

export const { useGetCoinsQuery } = coinsApi