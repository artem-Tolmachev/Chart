import Chart from "../../widgets/Chart/Chart";
import DashboardQuotesSidebar from "../../widgets/DashboardQuotesSidebar/DashboardQuotesSidebar";
import styles from './styles.module.css';
function DashboardPage(){
    return(
        <div className={styles.dashboardPage}>
            <Chart/>
            <DashboardQuotesSidebar/>
        </div>
    )
}

export default DashboardPage;