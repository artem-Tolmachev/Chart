import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { MarketData } from 'types';
import { useTickers } from 'features/dashboard/hooks/useTickers';

const CoinSearchPopup = () => {
    const tickers = useTickers();
    
    return (
        <ul className={styles.list}>
            {tickers.map((ticker) => 
            <li className={styles.item} key={ticker.symbol}>
                <div className={styles.iconWrapper}>
                    <img 
                    className={styles.icon}
                    src={ticker.src} 
                    width="20px" 
                    height="20px" 
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = 'https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg';
                    }}
                    />
                </div>
                {ticker.symbol}
            </li>)}
        </ul>
    )
}
export default CoinSearchPopup;




