// import { getFutures } from 'features/dashboard/api/getFutures';
import { useAppSelector } from 'store/store';
import DashboardTicker from '../DashboardTicker/DashboardTicker';
import styles from './styles.module.css';
import sharedStyles from './sharedStyles.module.css';
import { IDashboardHeaderItems, MarketData } from 'types';
import { useRef, useState } from 'react';

interface Props {
    columns: IDashboardHeaderItems[];
}
const DashboardTickerOut = ({ columns }: Props) => {
    const selectedCoin: MarketData[] = useAppSelector((store) => store.coins.coins);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function getActiveClass(index: number){
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <div className={styles.tickers_list}>
            {
                selectedCoin.map((ticker, index) => (
                    <div
                        key={ticker.symbol}
                        className={`${sharedStyles.item} ${index === activeIndex ? sharedStyles.active : ''}`}
                        onClick={() => getActiveClass(index)}
                    >
                            <DashboardTicker
                            key={ticker.symbol}
                            name={ticker.symbol}
                            price={ticker.lastPrice}
                            turnover={ticker.volume24h}
                            volume={ticker.turnover24h}
                            col={columns}
                            src={ticker.src}
                            item={ticker}
                        />
                        </div>
                    )
                )
            }
        </div>
    )
}
export default DashboardTickerOut;

