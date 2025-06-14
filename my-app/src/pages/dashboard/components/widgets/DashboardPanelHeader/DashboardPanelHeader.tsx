import styles from './styles.module.css';
import DashboarButtons from '../../ui/DashboardButtons/DashboardButtons';
import CustomCheckbox from 'shared/components/CustomCheckbox/CustomCheckbox';
import PopupSettings from '../PopupSettings/PopupSettings';
import { IDashboardHeaderItems } from 'pages/dashboard/types';

interface Props {
    isOpen: boolean | string;
    onToggleModal: (arg: string | boolean) => void;
    columns: IDashboardHeaderItems[];
    toggleCheckBox: (arg: string) => void;
}
const DashboardPanelHeader = ({ isOpen, onToggleModal, columns, toggleCheckBox }: Props) => {
    return (
        <div className={styles.header}>
            <DashboarButtons onToggleModal={onToggleModal} />
            {isOpen === 'settings'
                && <PopupSettings
                    isOpen={isOpen}
                    onToggleModal={onToggleModal}
                >
                    {columns.map((checked) => (
                        <CustomCheckbox
                            key={checked.key}
                            label={checked.name}
                            checked={checked.visible}
                            onChange={() => toggleCheckBox(checked.key)}
                        />
                    ))}
                </PopupSettings>}
            <div className={styles.items}>
                <div className={styles.item}>Описаеие</div>
                {columns
                    .filter(col => col.visible !== 0)
                    .map((col, index) => (
                        <div className={styles.item} key={`${col.key}-${index}`}>
                            <div>{col.name}</div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default DashboardPanelHeader;




