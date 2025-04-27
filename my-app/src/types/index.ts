import { UTCTimestamp } from 'lightweight-charts';

export type InitiaLChartSettings = {
    interval: string | undefined;
    symbol: string;
    limit: string;
    category: string;
}

export type Kline = {
    time: UTCTimestamp;
    open: number;
    high: number;
    low: number;
    close: number;
  };

export type Cand = {
    time: UTCTimestamp;
    value: number;
    color: string;
}

export type UseKlinesResult = {
    data: Kline[];
    volume: Cand[];
  };

export type KlineTuple = [number | string, number | string, number | string, number | string, number | string];

export type KlineTupleValume = [
  number | string, 
  number | string, 
  any,            
  any,            
  number | string, 
  any,           
  number | string  
];

export type MarketData = {
  turnover24h: number;
  volume24h: number;
  symbol: string;
  lastPrice: number;
}