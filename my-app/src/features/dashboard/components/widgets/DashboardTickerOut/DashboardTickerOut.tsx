import DashboardTicker from '../../ui/DashboardTicker/DashboardTicker';
import styles from './styles.module.css';
import sharedStyles from './sharedStyles.module.css';
import { IDashboardHeaderItems, MarketData } from 'features/dashboard/types';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/store/store';
import { usePersistedInterval } from 'features/dashboard/hooks/usePersistedInterval';

interface Props {
    columns: IDashboardHeaderItems[];
}
const DashboardTickerOut = ({ columns }: Props) => {
    const selectedCoin: MarketData[] = useAppSelector((store) => store.coins.coins);
    const [activeSymbol, setActiveSymbol] = useState<string | null>(null);
    const activedSymbol = usePersistedInterval('symbol');

    useEffect(() => {
        if(activedSymbol){
            setActiveSymbol(activedSymbol)
        }
    },[activedSymbol])

    function getActiveClass(symbol: string){
        setActiveSymbol(symbol === activeSymbol ? activeSymbol : symbol);
    }

    return (
        <div className={styles.tickers_list}>
            {
                selectedCoin.map((ticker) => (
                    <div
                        key={ticker.symbol}
                        className={`${sharedStyles.item} ${ticker.symbol === activeSymbol ? sharedStyles.active : ''}`}
                        onClick={() => getActiveClass(ticker.symbol)}
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
                            ask1Price={ticker.ask1Price}
                            bid1Price={ticker.bid1Price}
                        />
                        </div>
                    )
                )
            }
        </div>
    )
}
export default DashboardTickerOut;

