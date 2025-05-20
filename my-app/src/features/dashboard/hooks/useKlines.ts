import { useEffect, useState } from "react"
import { getKlines } from '../api/getKlines';
import {InitiaLChartSettings, Kline, Cand, UseKlinesResult} from '../types/index';
export const useKlines = (chartSettings: InitiaLChartSettings): UseKlinesResult => {

    const [volume, setVolume] = useState<Cand[]>([]);
    const [data, setDataBybit] = useState<Kline[]>([]);

    function TimeSort<T extends { time: number }>(array: T[]): T[]{
        return array.sort((a, b) => a.time - b.time);
    }

    useEffect(() => {
        const fetch = async () => {
            const {interval, symbol, limit, category} = chartSettings;
            
            const result = await getKlines(interval, symbol, limit, category);
            if(!result) return
            
            const { dataValume, dataKlines } = result;

            setVolume(TimeSort(dataValume))
            setDataBybit(TimeSort(dataKlines))
        }
        fetch()
      }, [chartSettings])


      return {data, volume}
}