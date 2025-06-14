import DashboardTicker from '../../ui/DashboardTicker/DashboardTicker';
import styles from './styles.module.css';
import sharedStyles from './sharedStyles.module.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/store/store';
import { useDispatch } from 'react-redux';
import DeliteButton from '../../ui/DeliteButton/DeliteButton';
import { usePersistedInterval } from 'pages/dashboard/hooks/usePersistedInterval';
import { IDashboardHeaderItems, MarketData } from 'pages/dashboard/types';
import { addChart, delCoin } from 'pages/dashboard/coinData/slices/CoinsSlice';

interface Props {
    columns: IDashboardHeaderItems[];
}

const DashboardTickerOut = ({ columns }: Props) => {
    const selectedCoin: MarketData[] = useAppSelector((store) => store.coins.coins);
    const [activeSymbol, setActiveSymbol] = useState<string | null>(null);
    const activedSymbol = usePersistedInterval('symbol');

    useEffect(() => {
        if (activedSymbol) {
            setActiveSymbol(activedSymbol)
        }
    }, [activedSymbol])

    function getActiveClass(symbol: string) {
        setActiveSymbol(symbol === activeSymbol ? activeSymbol : symbol);
    }

    const dispatch = useDispatch();

    const deliteCoin = (item: MarketData) => {
        dispatch(delCoin(item));
    }

    function hendleChart<T>(name: string, src: string, ask1Price: string, bid1Price: string) {
        dispatch(addChart({
            symbol: name,
            src: src,
            ask1Price: ask1Price,
            bid1Price: bid1Price
        }))
        getActiveClass(name)
    }

    return (

        <div className={`${styles.DashboardTickerOut} parents-block`}>
            {
                selectedCoin.map((ticker) => (
                    <div
                        key={ticker.symbol}
                        className={`${sharedStyles.item} ${ticker.symbol === activeSymbol ? sharedStyles.active : ''}`}
                        onClick={() => hendleChart(ticker.symbol, ticker.src, ticker.ask1Price, ticker.bid1Price)}
                    >
                        <DashboardTicker
                            key={ticker.symbol}
                            name={ticker.symbol}
                            price={ticker.lastPrice}
                            turnover={ticker.volume24h}
                            volume={ticker.turnover24h}
                            col={columns}
                            src={ticker.src}
                        />
                        <DeliteButton onClick={() => deliteCoin(ticker)} />
                    </div>
                )
                )
            }
        </div>

    )
}
export default DashboardTickerOut;

