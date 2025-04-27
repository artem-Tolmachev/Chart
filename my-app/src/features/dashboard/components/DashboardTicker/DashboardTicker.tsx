import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { MarketData } from 'types';

const DashboardTicker = () => {
    const [tickers, setTickers] = useState<MarketData[]>([]);
    const [test, setTest] = useState()
    useEffect(() => {
        const fatch = async () => {
            let tickers = await getFutures()
            setTickers(tickers)
        }
        fatch()
    },[])
    return(
        <ul className={styles.tickers}>
            {tickers.map((ticker) => 
                <li key={ticker.symbol}>
                    <span>{ticker.lastPrice}</span>
                    <span>{ticker.turnover24h}</span>
                    <span>{ticker.volume24h}</span>
                    <span>{ticker.volume24h}</span>
                    <span>{ticker.volume24h}</span>
                </li>
            )}
        </ul>
    )
}
export default DashboardTicker;