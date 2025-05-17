import styles from './styles.module.css';
import { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import CoinSearchPopup from '../CoinSearchPopup/CoinSearchPopup';
import PopupAdditem from '../PopupAdditem/PopupAdditem';
import { useGetCoinsQuery } from 'features/services/getApiCoins';
import DashboardTickerOut from '../DashboardTickerOut/DashboardTickerOut';
import { useCollums } from 'features/dashboard/hooks/useCollums';
import { IDashboardHeaderItems } from 'types';

interface IControlCheced {
    columns: IDashboardHeaderItems[];
    toggleCheckBox:(arg: string)  => void;
}

const DashboardQuotesSidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean | string>(false);
    const { data } = useGetCoinsQuery();

    const {columns, toggleCheckBox}: IControlCheced = useCollums([
        { key: 'volume', name: 'Объем', visible: 1 },
        { key: 'price', name: 'Цена', visible: 1 },
        { key: 'turnover', name: 'Оборот', visible: 1 }
    ])
    return (
        <div className={styles.wrapper}>
            <div className={styles.dashbord_right}>
                <DashboardHeader
                    isOpen={isOpen}
                    onToggleModal={setIsOpen}
                    columns={columns}
                    toggleCheckBox={toggleCheckBox}
                />
                {isOpen === 'add'
                    && <PopupAdditem
                        isOpen={isOpen}
                        onToggleModal={setIsOpen}
                    >
                        {
                            isOpen === 'add' &&
                            <CoinSearchPopup tickers={data ?? []} onToggleModal={setIsOpen}/>
                        }
                    </PopupAdditem>}
                    <DashboardTickerOut columns={columns}/>
            </div>
        </div>
    )
}
export default DashboardQuotesSidebar;