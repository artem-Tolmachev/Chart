import { Kline, KlineTuple, KlineTupleValume, MarketData} from '../../../types/index';
import { UTCTimestamp } from 'lightweight-charts';

export const dataKlinesParser = (list: KlineTuple[] ) =>
list.map(([time, open, high, low, close]) => ({
    time: (+time / 1000) as UTCTimestamp,
    open: +open,
    high: +high,
    low: +low,
    close: +close
}));

export const dataValumeParser = (list: KlineTupleValume[]) =>
 list.map(([time, open, , , close, , volume]) => ({
    time: (+time / 1000) as UTCTimestamp,
    value: +volume,
    color: +open > +close ? '#ef5350' : '#26a69a',
  }));

  export const tickerParser = (list: MarketData[]) => 
    list.map(({turnover24h, volume24h, symbol, lastPrice}) => ({
      turnover24h: +turnover24h,
      volume24h: +volume24h,
      symbol: symbol,
      lastPrice: +lastPrice
    }));
  