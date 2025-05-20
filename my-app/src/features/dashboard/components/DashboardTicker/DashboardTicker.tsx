import { formatNumber } from 'features/dashboard/utilse/formatData';
import styles from './styles.module.css';
import sharedStyles from '../DashboardTickerOut/sharedStyles.module.css';
import { IDashboardHeaderItems, MarketData } from 'types';
import IconCoin from 'shared/components/IconCoin/IconCoin';
import DeliteButton from 'shared/components/DeliteButton/DeliteButton';
import { useDispatch } from 'react-redux';
import { delCoin, addChart } from 'features/slices/CoinsSlice';

interface Props{
    name: string;
    price: number;
    volume: number;
    turnover: number;
    col: IDashboardHeaderItems[];
    src: string;
    item: MarketData;
}
const DashboardTicker = ({ 
    name, price, 
    volume, turnover, 
    col, src, item }: Props) => {

    const dispatch = useDispatch()
    const deliteCoin = () => {
        dispatch(delCoin(item));
    }
    function hendleChart(){
        dispatch(addChart(name))
       
    }
    return (
        <div 
            className={sharedStyles.item}
            onClick={hendleChart}>
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
            <DeliteButton onClick={deliteCoin} />
        </div>
    )
}
export default DashboardTicker;