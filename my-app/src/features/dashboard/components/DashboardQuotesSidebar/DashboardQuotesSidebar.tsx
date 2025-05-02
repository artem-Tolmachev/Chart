import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useState } from 'react';
import DashboardTicker from '../DashboardTickerOut/DashboardTickerOut';
import DashboardTickerOut from '../DashboardTickerOut/DashboardTickerOut';

const DashboardQuotesSidebar = () => {
    const [columns, setColumns] = useState([
        { key: 'name', label: 'Описание', visible: true },
        { key: 'volume', label: 'Объем', visible: true },
        { key: 'price', label: 'Текущая цена', visible: true },
        { key: 'turnover', label: 'Оборот', visible: true },
    ]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.dashbord_right}>
                <div className={styles.header}>
                    <button>add</button>
                </div>
                <DashboardTickerOut />
            </div>
        </div>
    )
}
export default DashboardQuotesSidebar;

// const DashboardTickerOut = () => {
//     const [tickers, setTickers] = useState<MarketData[]>([]);
//     const [columns, setColumns] = useState([
//         { key: 'name', label: 'Описание', visible: true },
//         { key: 'volume', label: 'Объем', visible: true },
//         { key: 'price', label: 'Текущая цена', visible: true },
//         { key: 'turnover', label: 'Оборот', visible: true },
//     ]);

//     useEffect(() => {
//         const fetch = async () => {
//             const tickers = await getFutures();
//             setTickers(tickers);
//         }
//         fetch();
//     }, []);

//     return (
//         <div className={styles.tickers}>
//             <ul className={styles.header}>
//                 {columns.map(col => col.visible && (
//                     <li key={col.key}>{col.label}</li>
//                 ))}
//             </ul>
//             {tickers.map(ticker => (
//                 <ul key={ticker.symbol} className={styles.row}>
//                     {columns.map(col => col.visible && (
//                         <li key={col.key}>
//                             {col.key === 'name' && ticker.symbol}
//                             {col.key === 'price' && ticker.lastPrice}
//                             {col.key === 'volume' && ticker.volume24h}
//                             {col.key === 'turnover' && ticker.turnover24h}
//                         </li>
//                     ))}
//                 </ul>
//             ))}
//         </div>
//     );
// }
