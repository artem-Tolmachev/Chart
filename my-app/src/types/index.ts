import { UTCTimestamp } from 'lightweight-charts';

interface ICoinsData {
  ask1Price: string; // Лучшая цена продажи (аск) на текущий момент
  ask1Size: string; // Количество доступное на продаже по лучшей цене
  basis: string; // Базис (разница между ценой фьючерса и спотовой ценой), иногда пустое
  basisRate: string; // Процентная ставка базиса
  bid1Price: string; // Лучшая цена покупки (бид) на текущий момент
  bid1Size: string; // Количество доступное на покупке по лучшей цене
  curPreListingPhase: string; // Фаза предварительного листинга (если есть)
  deliveryFeeRate: string; // Комиссия за доставку (если фьючерс поставочный)
  deliveryTime: string; // Время доставки фьючерсного контракта (в миллисекундах или "0")
  fundingRate: string; // Текущая ставка финансирования (для бессрочных фьючерсов)
  highPrice24h: string; // Максимальная цена за последние 24 часа
  indexPrice: string; // Индексная цена актива (средневзвешенная по биржам)
  lastPrice: number; // Последняя цена сделки
  lowPrice24h: string; // Минимальная цена за последние 24 часа
  markPrice: string; // Маркированная цена (используется для расчёта ликвидаций)
  nextFundingTime: string; // Время следующего финансирования (в миллисекундах)
  openInterest: string; // Открытый интерес (общее количество открытых контрактов)
  openInterestValue: string; // Общая стоимость открытого интереса в долларах
  preOpenPrice: string; // Цена на момент предварительного открытия (если есть)
  preQty: string; // Объём предварительных сделок (если есть)
  predictedDeliveryPrice: string; // Прогнозируемая цена на момент доставки
  prevPrice1h: string; // Цена закрытия один час назад
  prevPrice24h: string; // Цена закрытия 24 часа назад
  price24hPcnt: string; // Изменение цены за 24 часа в процентах
  symbol: string; // Название торговой пары (символ), например "BTCUSDT"
  turnover24h: number; // Оборот за последние 24 часа (сумма всех сделок)
  volume24h: number; // Объём торговли за 24 часа (в единицах базового актива)
}

// symbol	✅	Название монеты, например BTCUSDT.
// lastPrice	✅	Текущая (последняя) цена.
// price24hPcnt	✅	Изменение за 24ч в процентах (%).
// volume24h	✅	Объём торгов за 24ч (иногда turnover вместо volume).
export type MarketData = Pick<ICoinsData, "turnover24h" | "volume24h" | "symbol" | "lastPrice">;

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
