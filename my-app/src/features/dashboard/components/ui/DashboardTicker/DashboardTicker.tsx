import { formatNumber } from 'features/dashboard/utils/formatData';
import styles from './styles.module.css';
import sharedStyles from '../../widgets/DashboardTickerOut/sharedStyles.module.css';
import { IDashboardHeaderItems } from 'features/dashboard/types';
import IconCoin from 'shared/components/IconCoin/IconCoin';

interface Props{
    name: string;
    price: number;
    volume: number;
    turnover: number;
    col: IDashboardHeaderItems[];
    src: string;
}
const DashboardTicker = ({ 
    name, price, 
    volume, turnover, 
    col, src
}: Props) => {

    return (
        <div 
            className={sharedStyles.item}>
            {<div className={styles.element}>
                <IconCoin src={src} symbol={name} />
            </div>}
            {col.find(c => c.key === 'price')?.visible === 1
                && <div className={styles.element}>
                    <div className={styles.price}>{formatNumber(price)}</div>
                </div>}
            {col.find(c => c.key === 'turnover')?.visible === 1
                && <div className={styles.element}>
                    <div className={styles.turnover}>{formatNumber(turnover)}</div>
                </div>}
            {col.find(c => c.key === 'volume')?.visible === 1
                && <div className={styles.element}>
                    <div className={styles.volume}>{formatNumber(volume)}</div>
                </div>}
        </div>
    )
}
export default DashboardTicker;