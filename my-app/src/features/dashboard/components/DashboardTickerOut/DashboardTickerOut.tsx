import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { MarketData } from 'types';
import DashboardTicker from '../DashboardTicker/DashboardTicker';
// import { formatNumber } from 'features/dashboard/utilse/formatData';

const DashboardTickerOut = () => {
    const [tickers, setTickers] = useState<MarketData[]>([]);
    
    useEffect(() => {
        const fetch = async () => {
            let tickers = await getFutures()
            setTickers(tickers)
        }
        fetch()
    },[])

    return(
        <div className={styles.tickers_list}>
            {tickers.map((ticker) => 
                <DashboardTicker
                key={ticker.symbol} 
                name={ticker.symbol}
                price={ticker.lastPrice} 
                turnover={ticker.turnover24h}
                volume={ticker.volume24h}/>
            )}
        </div>
    )
}
export default DashboardTickerOut;