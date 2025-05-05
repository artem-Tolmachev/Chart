import { formatNumber } from 'features/dashboard/utilse/formatData';
import styles from './styles.module.css';


interface Props {
    name: string;
    price: number;
    volume: number;
    turnover: number;
}

const DashboardTicker = ({name, price, volume, turnover}: Props) => {
    return(
        <div className={styles.item}>
            <div data-col='name' className={styles.element}>
                <div>{name}</div>
            </div>
            <div data-col='price' className={styles.element}>
                <div className={styles.price}>{formatNumber(price)}</div>
            </div>
            <div data-col='volume' className={styles.element}>
                <div className={styles.volume}>{formatNumber(volume)}</div>
            </div>
            <div data-col='turnover' className={styles.element}>
                <div className={styles.turnover}>{formatNumber(turnover)}</div>
            </div>
        </div>
    )
}
export default DashboardTicker;


// function DashboardTicker({ name, price, volume, turnover, visibleCols }) {
//     return (
//         <div className={styles.item}>
//             {visibleCols.includes('name') && (
//                 <div data-col="name" className={styles.element}>
//                     <div>{name}</div>
//                 </div>
//             )}
//             {visibleCols.includes('price') && (
//                 <div data-col="price" className={styles.element}>
//                     <div className={styles.price}>{formatNumber(price)}</div>
//                 </div>
//             )}
//             {visibleCols.includes('volume') && (
//                 <div data-col="volume" className={styles.element}>
//                     <div className={styles.volume}>{formatNumber(volume)}</div>
//                 </div>
//             )}
//             {visibleCols.includes('turnover') && (
//                 <div data-col="turnover" className={styles.element}>
//                     <div className={styles.turnover}>{formatNumber(turnover)}</div>
//                 </div>
//             )}
//         </div>
//     );
// }
