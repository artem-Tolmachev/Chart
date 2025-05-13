import styles from './styles.module.css';
import { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import CoinSearchPopup from '../CoinSearchPopup/CoinSearchPopup';
import PopupAdditem from '../PopupAdditem/PopupAdditem';
import { useTickers } from 'features/dashboard/hooks/useTickers';
import { useObserver } from 'features/dashboard/hooks/useObserver';

const DashboardQuotesSidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean | string>(false);
    const tickers = useTickers()
 
    return (
        <div className={styles.wrapper}>
            <div className={styles.dashbord_right}>
                <DashboardHeader
                    isOpen={isOpen}
                    onToggleModal={setIsOpen}
                />
                {isOpen === 'add'
                    && <PopupAdditem
                        isOpen={isOpen}
                        onToggleModal={setIsOpen}
                    >
                        {
                            isOpen === 'add' &&
                            <CoinSearchPopup tickers={tickers} onToggleModal={setIsOpen}/>
                        }
                    </PopupAdditem>}
            </div>
        </div>
    )
}
export default DashboardQuotesSidebar;