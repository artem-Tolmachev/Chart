import IconCoin from 'shared/components/IconCoin/IconCoin';
import styles from './styles.module.css';
import { useAppSelector } from 'app/store/store';

function TradingInfoPanel(){
    const selectedItems = useAppSelector((store) => store.coins.CoinOption);  
    
    return(
        <div className={styles.panel}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <IconCoin src={selectedItems.src} symbol={selectedItems.symbol} />
                </div>
            </div>
        </div>
    )
}

export default TradingInfoPanel;