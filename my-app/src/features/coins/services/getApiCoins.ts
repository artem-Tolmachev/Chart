import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {dataKlinesParser, dataValumeParser, defaultCoinParser, tickerParser } from 'features/dashboard/utils/Parser';
import {CoinsData} from '../../dashboard/types/index';
import {DefaultCoin } from '../constants/defaultSettings';

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000'}),
  endpoints: (builder) => ({
    getCoins: builder.query<{
      tickers: ReturnType<typeof tickerParser>, 
      btcData: DefaultCoin
    }, void>({
      query: () => 'get-futures',
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
      getKlines: builder.query<{
      dataKlines: ReturnType<typeof dataKlinesParser>, 
      dataValume:  ReturnType<typeof dataValumeParser>
    }, { interval: string | undefined, symbol: string, limit: string, category: string} >({
      query: ({interval, symbol, limit, category}) => ({
        url: `get-klines`,
        method: 'GET',
        params: {interval, symbol, limit, category}
      }),
      transformResponse:(response?: { result?: { list?: any[] } }) => {
        const list = response?.result?.list || [];
  
        return {
          dataKlines: dataKlinesParser(list),
          dataValume: dataValumeParser(list)
        }
      }
    })
  })
})

export const { useGetCoinsQuery, useGetKlinesQuery } = coinsApi