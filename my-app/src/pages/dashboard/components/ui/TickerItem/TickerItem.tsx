import IconCoin from 'shared/components/IconCoin/IconCoin';
import styles from './styles.module.css';
import DeliteButton from '../DeliteButton/DeliteButton';

interface Props {
    symbol: string;
    src: string;
    addCoin: () => void;
    flag: boolean;
    deliteCoin: () => void;
    closeModal: (arg: boolean) => void;
}

const TickerItem = ({ symbol, src, addCoin, flag, deliteCoin, closeModal}: Props) => {
    return (
        <div className={styles.item} onClick={() => addCoin()} >
            <IconCoin symbol={symbol} src={src} />
            <div className={styles.buttons}>
                {
                    flag ?
                        <>
                        <DeliteButton onClick={deliteCoin}/>
                            <span 
                            onClick={() => closeModal(false)}
                             className={`${styles.icon} ${styles.extraClass}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="30" height="30" fill="none">
                                    <path fill="" fill-rule="evenodd" clipRule="evenodd" d="M14 9.5a.5.5 0 0 0 1 0V7.02A6.5 6.5 0 0 1 20.98 13H18.5a.5.5 0 0 0 0 1h2.48A6.5 6.5 0 0 1 15 19.98V17.5a.5.5 0 0 0-1 0v2.48A6.5 6.5 0 0 1 8.02 14h2.48a.5.5 0 0 0 0-1H8.02A6.5 6.5 0 0 1 14 7.02V9.5zm1-3.48V4.5a.5.5 0 0 0-1 0v1.52A7.5 7.5 0 0 0 7.02 13H5.5a.5.5 0 0 0 0 1h1.52A7.5 7.5 0 0 0 14 20.98v1.52a.5.5 0 0 0 1 0v-1.52A7.5 7.5 0 0 0 21.98 14h1.52a.5.5 0 0 0 0-1h-1.52A7.5 7.5 0 0 0 15 6.02z">
                                    </path>
                                </svg>
                            </span>
                        </>
                        :
                        <span className={`${styles.add} ${styles.extraClass}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="30" height="30" fill="none"><path fill="" fill-rule="evenodd" clipRule="evenodd" d="M13.9 14.1V22h1.2v-7.9H23v-1.2h-7.9V5h-1.2v7.9H6v1.2h7.9z"></path>
                            </svg>
                        </span>
                }
            </div>
        </div>
    )
}
export default TickerItem;