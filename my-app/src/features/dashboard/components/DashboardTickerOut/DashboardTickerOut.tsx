import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { MarketData } from 'types';
import DashboardTicker from '../DashboardTicker/DashboardTicker';

const DashboardTickerOut = () => {
    const [tickers, setTickers] = useState<MarketData[]>([]);
    const [test, setTest] = useState();

    useEffect(() => {
        const fetch = async () => {
            let tickers = await getFutures()
            setTickers(tickers)
        }
        fetch()
    },[])

    return(
        <ul className={styles.tickers}>
            {tickers.map((ticker) => 
                <DashboardTicker
                key={ticker.symbol} 
                name={ticker.symbol}
                price={ticker.lastPrice} 
                turnover={ticker.turnover24h}
                volume={ticker.volume24h}/>
            )}
        </ul>
    )
}
export default DashboardTickerOut;