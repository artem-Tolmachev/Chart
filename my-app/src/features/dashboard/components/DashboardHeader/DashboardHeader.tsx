import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import PopupFilter from 'shared/components/PopupFilter/PopupFilter';
import { IDashboardHeaderItems } from 'types';

const DashboardHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    function togglePopup(){
        setIsOpen(!isOpen)
    }

    const [columns, setColumns] = useState<IDashboardHeaderItems[]>([
        { key: 'name', lable: 'Описание', visible: 1 },
        { key: 'volume', lable: 'Объем', visible: 1 },
        { key: 'price', lable: 'Цена', visible: 1 },
        { key: 'turnover', lable: 'Оборот', visible: 1 },
    ]);

    return (
        <div className={styles.header}>
            <div className={styles.options}>
                <div onClick={togglePopup} className={styles.filter}>
                    <span role="img" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"></path></svg></span>
                </div>
            </div>
            {isOpen && <PopupFilter isOpen={isOpen} onClose={() => setIsOpen(false)}/>}
            <div className={styles.items}>
                {columns.map((col, index) => col.visible !== 0 && (
                    <div className={styles.item} key={`${col.key}-${index}`}>
                        <div>{col.lable}</div>
                    </div>)
                )}
            </div>
        </div>
    )
}
export default DashboardHeader;




