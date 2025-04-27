import axios from 'axios';
import {dataKlinesParser, dataValumeParser} from '../utilse/klinesParser';
import {InitiaLChartSettings, Kline, Cand, UseKlinesResult} from '../../../types/index';

export const getKlines = async (
    interval: string | undefined,
     symbol: string, limit: string, 
     category: string
    ): Promise<{ dataValume: Cand[]; dataKlines: Kline[] } | undefined> => {

    let  dataValume: Cand[] = [];
    let  dataKlines: Kline[] = [];

    try {
        const {data} = await axios.get(`http://localhost:5000/artem-scriener`,{
            params: { category, symbol, interval, limit }
        });

        const list = data?.result?.list || [];
        
        dataKlines = dataKlinesParser(list)
        dataValume = dataValumeParser(list)
        return { dataValume, dataKlines};

    } catch (error: any) {
        console.log('Ошибка на клиенте ' + error.message)
    }
}

