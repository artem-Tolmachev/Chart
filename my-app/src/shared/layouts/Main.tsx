import Header from "features/dashboard/components/widgets/Header/Header";
import DashboardPage from "../../features/dashboard/components/ui/DashboardPage/DashboardPage";
import styles from './styles.module.css';

function Main(){
    return(
        <>
            <div className={styles.main}>
                <Header/>
                <DashboardPage/>
            </div>
        </>
    )
}

export default Main;

