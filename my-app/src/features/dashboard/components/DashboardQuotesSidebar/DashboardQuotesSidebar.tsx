import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useEffect } from 'react';
import DashboardTicker from '../DashboardTickerOut/DashboardTickerOut';

const DashboardTop = () => {
    useEffect(() => {
        const fatch = async () => {
            const response = await getFutures()
        }
        fatch()
    },[])
    return(
        <div className={styles.right}>
            <DashboardTicker/>
        </div>
    )
}
export default DashboardTop;