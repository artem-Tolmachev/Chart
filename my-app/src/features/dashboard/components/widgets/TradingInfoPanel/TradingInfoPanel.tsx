import IconCoin from 'shared/components/IconCoin/IconCoin';
import styles from './styles.module.css';
import { useAppSelector } from 'app/store/store';
import { Tooltip } from 'react-tooltip';

function TradingInfoPanel() {
    const selectedItems = useAppSelector((store) => store.coins.CoinData);
    if (!selectedItems) {
        return <div className={styles.panel}>Загрузка...</div>;
    }
    const { src, symbol, ask1Price, bid1Price } = selectedItems;
    return (
        <div className={styles.panel}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <IconCoin src={src} symbol={symbol} />
                </div>
                <div className={styles.priceInfo}>
                    <div
                        className={styles.ask1Price}
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Цена продажи (Ask)"
                    >
                        {ask1Price ?? '—'}
                    </div>
                    <div className={styles.bid1Price}
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Цена продажи (Ask)"
                    >
                        {bid1Price ?? '—'}
                    </div>
                </div>
            </div>
            <Tooltip 
            id="tooltip" 
            variant="light"
            place='bottom-end' />
        </div>
    );
}

export default TradingInfoPanel;
