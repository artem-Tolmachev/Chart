import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tickerParser } from 'features/dashboard/utilse/Parser';

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/get-futures'}),
  endpoints: (builder) => ({
    getCoins: builder.query<ReturnType<typeof tickerParser>, void>({
      query: () => '',
       transformResponse: (response: any) => {
        const list = response?.result?.list || [];
        return tickerParser(list);
      },
    }),
  }),
})

export const { useGetCoinsQuery } = coinsApi