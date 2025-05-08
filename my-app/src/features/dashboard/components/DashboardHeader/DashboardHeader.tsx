import styles from './styles.module.css';
import { useState } from 'react';
import Popup from 'shared/components/Popup/Popup';
import { IDashboardHeaderItems } from 'types';
import DashboarButtons from '../DashboarButtons/DashboarButtons';
import CustomCheckbox from 'shared/components/CustomCheckbox/CustomCheckbox';

interface Props {
    isOpen: null | 'settings' | 'add';
    onClose: (type: null | 'settings' | 'add') => void;
}

const DashboardHeader = ({isOpen, onClose}: Props) => {
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
            <DashboarButtons isOpen={isOpen} onClose={onClose}/>
            {isOpen === 'settings'
                && <Popup
                    isOpen={isOpen}
                    onClose={onClose}
                    variant={'settings'}
                    title={'НАСТРОЙКА СТОЛБЦОВ'}
                >
                    {columns.map((checked) => (
                        <CustomCheckbox
                            key={checked.key}
                            label={checked.label}
                            checked={checked.visible}
                            onChange={() => toggleCheckBox(checked.key)}
                        />
                    ))}
                </Popup>}
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




