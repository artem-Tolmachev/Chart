import styles from './styles.module.css';
import { useState } from 'react';
// import Popup from 'shared/components/Popup/Popup';
import { IDashboardHeaderItems } from 'types';
import DashboarButtons from '../DashboarButtons/DashboarButtons';
import CustomCheckbox from 'shared/components/CustomCheckbox/CustomCheckbox';
import PopupSettings from '../PopupSettings/PopupSettings';

interface Props {
    isOpen: boolean | string;
    onToggleModal: (arg: boolean | string)  => void;
}

const DashboardHeader = ({isOpen, onToggleModal}: Props) => {
    const [columns, setColumns] = useState<IDashboardHeaderItems[]>([
        { key: 'volume', label: 'Объем', visible: 1 },
        { key: 'price', label: 'Цена', visible: 1 },
        { key: 'turnover', label: 'Оборот', visible: 1 },
    ]);
    
    function toggleCheckBox(key: string) {
        let updatedColums = columns.map(col => {
            if (col.key === key) {
                return { ...col, visible: col.visible === 1 ? 0 : 1 };
            } else {
                return col
            }
        }
        );
        setColumns(updatedColums)
    }
    return (
        <div className={styles.header}>
            <DashboarButtons onToggleModal={onToggleModal}/>
            {isOpen === 'settings'
                && <PopupSettings
                    isOpen={isOpen}
                    onToggleModal={onToggleModal}
                >
                    {columns.map((checked) => (
                        <CustomCheckbox
                            key={checked.key}
                            label={checked.label}
                            checked={checked.visible}
                            onChange={() => toggleCheckBox(checked.key)}
                        />
                    ))}
                </PopupSettings>}
            <div className={styles.items}>
                <div className={styles.item}>Описаеие</div>
                {columns.map((col, index) => col.visible !== 0 && (
                    <div className={styles.item} key={`${col.key}-${index}`}>
                        <div>{col.label}</div>
                    </div>)
                )}
            </div>
        </div>
    )
}
export default DashboardHeader;




