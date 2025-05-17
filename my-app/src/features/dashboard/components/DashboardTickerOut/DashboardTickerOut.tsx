// import { getFutures } from 'features/dashboard/api/getFutures';
import { useAppSelector } from 'store/store';
import DashboardTicker from '../DashboardTicker/DashboardTicker';
import styles from './styles.module.css';
import { IDashboardHeaderItems, MarketData } from 'types';

interface Props {
    columns: IDashboardHeaderItems[]
}
const DashboardTickerOut = ({ columns }: Props) => {
    const selectedCoin: MarketData[] = useAppSelector((store) => store.coins);
    
    return (
        <div className={styles.tickers_list}>
            {
                selectedCoin.map((ticker) => (
                    <DashboardTicker
                        key={ticker.symbol}
                        name={ticker.symbol}
                        price={ticker.lastPrice}
                        turnover={ticker.volume24h}
                        volume={ticker.turnover24h}
                        col={columns}
                        src={ticker.src}
                    />))
            }

        </div>
    )
}
export default DashboardTickerOut;



// selectedCoin.map((ticker) => (
//     {columns.filter(col => col.visible !== 0).map((el, index) => (
//         <DashboardTicker
//         key={ticker.symbol}
//         name={ticker.symbol}
//         price={ticker.lastPrice}
//         turnover={ticker.volume24h}
//         volume={ticker.turnover24h}
//         col={columns}
//     />)
//     )}
// ))
