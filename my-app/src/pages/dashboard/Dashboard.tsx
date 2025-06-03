import DashboardPageHeader from 'pages/dashboard/components/widgets/DashboardPageHeader/DashboardPageHeader';
import styles from './styles.module.css';
import DashboardPage from 'pages/dashboard/components/ui/DashboardPage/DashboardPage';

function Dashboard(){
    return(
        <div className={`${styles.dashboard} parents-block`}>
            <DashboardPageHeader/>
            <DashboardPage/>
        </div>
    )
}

export default Dashboard;

