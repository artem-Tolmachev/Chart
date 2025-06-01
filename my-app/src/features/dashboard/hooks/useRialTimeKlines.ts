// import { CandlestickData, CandlestickSeriesOptions, DeepPartial, ISeriesApi, SeriesDataItemTypeMap, Time, UTCTimestamp, WhitespaceData } from 'lightweight-charts';
// import { useEffect, useState } from 'react';

// interface Props {
//   candlestickSeries: ISeriesApi<"Candlestick", Time, CandlestickData<Time> | WhitespaceData<Time>, CandlestickSeriesOptions, DeepPartial<CandlestickSeriesOptions>>;
// }

// interface CandleFromWS {
//   start: number;
//   open: string;
//   high: string;
//   low: string;
//   close: string;
// }



// export const useRialTimeKlines = ({ candlestickSeries }: Props): CandleFromWS | null => {
//   const [wsCandles, setWsCandles] = useState<CandleFromWS | null >(null);

//   useEffect(() => {
//     const socket = new WebSocket('wss://stream.bybit.com/v5/public/linear');

//     socket.onopen = () => {
//       console.log('🔗 WebSocket подключен');
//       socket.send(JSON.stringify({
//         op: 'subscribe',
//         args: ['kline.5.BTCUSDT']
//       }));

//       setInterval(() => {
//         socket.send(JSON.stringify({
//           req_id: Date.now().toString(),
//           op: 'ping'
//         }));
//       }, 20000);
//     };

//     socket.onmessage = (event) => {
//       const message = JSON.parse(event.data);

//       if (message.topic?.startsWith('kline') && message.data) {
//         const candle: CandleFromWS = message.data;

//         const formatted = {
//           time: Math.floor(candle.start / 1000) as UTCTimestamp,
//           open: parseFloat(candle.open),
//           high: parseFloat(candle.high),
//           low: parseFloat(candle.low),
//           close: parseFloat(candle.close),
//         };

//         candlestickSeries.update(formatted);
//         setWsCandles(candle);
//       }
//     };

//     return () => socket.close();
//   }, [candlestickSeries]);

//   return wsCandles;
// };
