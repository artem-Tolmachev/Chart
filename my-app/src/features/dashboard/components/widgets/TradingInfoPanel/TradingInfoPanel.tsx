import IconCoin from 'shared/components/IconCoin/IconCoin';
import styles from './styles.module.css';
import { useAppSelector } from 'app/store/store';

function TradingInfoPanel() {
    const selectedItems = useAppSelector((store) => store.coins.CoinData);

    return (
        <div className={styles.panel}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <IconCoin src={selectedItems.src} symbol={selectedItems.symbol} />
                </div>
                <div className={styles.priceInfo}>
                    <div className={styles.ask1Price}>
                        {selectedItems.ask1Price}
                    </div>
                    <div className={styles.bid1Price} >
                        {selectedItems.bid1Price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradingInfoPanel;