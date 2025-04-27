import Chart from "../components/Chart/Chart";
import DashboardQuotesSidebar from "../components/DashboardQuotesSidebar/DashboardQuotesSidebar";

import styles from './styles.module.css';
function DashboardPage(){
    return(
        <div className={styles.dashboard}>
            <Chart/>
            <DashboardQuotesSidebar/>
        </div>
    )
}

export default DashboardPage;