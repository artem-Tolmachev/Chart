import styles from './styles.module.css';

interface Props {
    name: string;
    price: number;
    volume: number;
    turnover: number;
}

const DashboardTicker = ({name, price, volume, turnover}: Props) => {
    return(
        <li className={styles.list}>
            <span>{name}</span>
            <span>{price}</span>
            <span>{volume}</span>
            <span>{turnover}</span>
        </li>
    )
}
export default DashboardTicker;