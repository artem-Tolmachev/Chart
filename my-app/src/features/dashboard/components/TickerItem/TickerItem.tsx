import styles from './styles.module.css';

interface Props {
    symbol: string;
    src: string;
}

const TickerItem = ({ symbol, src }: Props) => {
    return (
        <li className={styles.item}>
            <div className={styles.iconWrapper}>
                <img
                    className={styles.icon}
                    src={src}
                    width="20px"
                    height="20px"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = 'https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg';
                    }}
                />
            </div>
            {symbol}
        </li>
    )
}

export default TickerItem;