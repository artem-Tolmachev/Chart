import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { IDashboardHeaderItems, MarketData } from 'types';
import DashboardTicker from '../DashboardTicker/DashboardTicker';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const DashboardTickerOut = () => {
    const [tickers, setTickers] = useState<MarketData[]>([]);

    // useEffect(() => {
    //     const fetch = async () => {
    //         let tickers = await getFutures()
    //         setTickers(tickers)
    //     }
    //     fetch()
    // }, [])

    return (
        <div className={styles.tickers_list}>
            <DashboardHeader/>

            {
                tickers.map((ticker, index) => (
                    <DashboardTicker
                        key={ticker.symbol}
                        name={ticker.symbol}
                        price={ticker.lastPrice}
                        turnover={ticker.volume24h}
                        volume={ticker.turnover24h}
                    />
                ))
            }
        </div>
    )
}
export default DashboardTickerOut;




