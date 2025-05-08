import { getFutures } from 'features/dashboard/api/getFutures';
import styles from './styles.module.css';
import { useState } from 'react';
import DashboardTicker from '../DashboardTickerOut/DashboardTickerOut';
import DashboardTickerOut from '../DashboardTickerOut/DashboardTickerOut';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Popup from 'shared/components/Popup/Popup';
import CoinSearchPopup from '../CoinSearchPopup/CoinSearchPopup';

const DashboardQuotesSidebar = () => {
    const [isOpen, setIsOpen] = useState<null | 'settings' | 'add'>(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.dashbord_right}>
                <DashboardHeader
                    isOpen={isOpen}
                    onClose={setIsOpen}
                />
                {isOpen === 'add'
                    && <Popup
                        isOpen={isOpen}
                        onClose={setIsOpen}
                        title={'Выбрать инструмент'}
                    >
                        {
                          <div className={styles.coinsadd}>
                            <div className={styles.close} onClick={() => setIsOpen(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" strokeWidth="18" height="18"><path stroke="currentColor" strokeWidth="1.2" d="m1.5 1.5 15 15m0-15-15 15"></path></svg>
                            </div>
                           <CoinSearchPopup/>
                          </div>
                        }
                    </Popup>}
            </div>
        </div>
    )
}
export default DashboardQuotesSidebar;