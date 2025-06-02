import { UTCTimestamp } from 'lightweight-charts';
import { useEffect, useState } from 'react';
import { Candlestick } from '../types';
import { useAppSelector } from 'app/store/store';

// interface CandleFromWS {
//   start: number;
//   open: string;
//   high: string;
//   low: string;
//   close: string;
// }

export const useRialTimeKlines = (candlestickRef: React.RefObject<Candlestick>) => {
  // const [wsCandles, setWsCandles] = useState<CandleFromWS | null >(null);
  let pingInterval: ReturnType<typeof setInterval>;
  const {interval, symbol} = useAppSelector((store) => store.coins.chartSettings);
  useEffect(() => {
    const socket = new WebSocket('wss://stream.bybit.com/v5/public/linear');
    const topic = `kline.${interval}.${symbol}`;

    socket.onopen = () => {
      console.log('🔗 WebSocket подключен');
      socket.send(JSON.stringify({
        op: 'subscribe',
        args: [topic]
      }));

      pingInterval = setInterval(() => {
        socket.send(JSON.stringify({
          req_id: Date.now().toString(),
          op: 'ping'
        }));
      }, 20000);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.topic?.startsWith('kline') && message.data) {
        const candle = message.data[0];

        const formatted = {
          time: Math.floor(candle.start / 1000) as UTCTimestamp,
          open: parseFloat(candle.open),
          high: parseFloat(candle.high),
          low: parseFloat(candle.low),
          close: parseFloat(candle.close),
        };
        if(candlestickRef.current)
        candlestickRef.current.update(formatted);
        // setWsCandles(candle);
      }
    };
    return () => {
        if (pingInterval) clearInterval(pingInterval);
        socket.close();
    }
  }, [candlestickRef, interval, symbol]);

};
