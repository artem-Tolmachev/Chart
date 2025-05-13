import Search from 'shared/components/Search/Search';
import TickerItem from '../TickerItem/TickerItem';
import styles from './styles.module.css';
import { useTickers } from 'features/dashboard/hooks/useTickers';
import { useFilter } from 'features/dashboard/hooks/useFilter';
import { Ref, useState } from 'react';
import { useDebounce } from 'features/dashboard/hooks/useDebounce';
import { MarketData } from 'types';
import { useObserver } from 'features/dashboard/hooks/useObserver';
import { useInView } from 'react-intersection-observer';
import Loader from '../Loader/Loader';

interface Props {
    tickers: MarketData[];
    onToggleModal: (arg: boolean) => void;
}

const CoinSearchPopup = ({ tickers, onToggleModal}: Props) => {
    const [value, setValue] = useState('');
    const data = useDebounce(value, 1000)
    const filtred = useFilter(data, tickers);
 
    return (
        <>
            <div className={styles.header}>
                <h3 className={styles.addTitle}>Выбрать инструмент</h3>
                <div className={styles.close} onClick={() => onToggleModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" strokeWidth="18" height="18"><path stroke="currentColor" strokeWidth="1.2" d="m1.5 1.5 15 15m0-15-15 15"></path></svg>
                </div>
            </div>
            <div className={styles.addWrapper}>
                <Search onChange={setValue} value={value} />
                <div className={styles.buttons}>
                    <button className={`${styles.btn} ${styles.btn_active}`}>Все</button>
                    <button className={styles.btn}>Акции</button>
                    <button className={styles.btn}>Фонды</button>
                    <button className={styles.btn}>Фьючерсы</button>
                </div>
                <Loader tick={filtred}/>
            </div>
        </>
    )
}

export default CoinSearchPopup;




                //        <ul className={styles.list} >
                //     {filtred.map((ticker) =>
                //         <TickerItem
                //             key={ticker.symbol}
                //             symbol={ticker.symbol}
                //             src={ticker.src}
                //         />
                //     )}
                // </ul>