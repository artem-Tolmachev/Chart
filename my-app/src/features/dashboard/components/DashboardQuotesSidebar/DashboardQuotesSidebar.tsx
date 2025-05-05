import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useState } from 'react';
import DashboardTicker from '../DashboardTickerOut/DashboardTickerOut';
import DashboardTickerOut from '../DashboardTickerOut/DashboardTickerOut';

const DashboardQuotesSidebar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dashbord_right}>
                <DashboardTickerOut/>
            </div>
        </div>
    )
}
export default DashboardQuotesSidebar;