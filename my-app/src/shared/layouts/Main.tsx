import Header from "shared/components/Header/Header";
import DashboardPage from "../../features/dashboard/DashboardPage/DashboardPage";
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

