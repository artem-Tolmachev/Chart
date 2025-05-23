import styles from './styles.module.css';

interface Props {
    symbol: string;
    src: string;
}

const IconCoin = ({ symbol, src }: Props) => {
    return (
        <div className={styles.wrapper}>
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
            <div className={styles.symbol}>{symbol}</div>
        </div>
    )
}
export default IconCoin;