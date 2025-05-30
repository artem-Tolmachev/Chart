import { useEffect, useRef  } from 'react';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean | string;
  onToggleModal: (arg: boolean) => void;
  children: React.ReactNode;
}

function PopupSettings({isOpen, onToggleModal, children}: Props){
  const popupRef = useRef<HTMLDivElement>(null);
  
  function handleClickOutside(event: MouseEvent) {
    if (popupRef.current &&
      event.target instanceof Node &&
      !popupRef.current.contains(event.target)) {
        onToggleModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={popupRef} className={styles.settingsPopup}>
      <h3 className={styles.settingTitle}>НАСТРОЙКА СТОЛБЦОВ</h3>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PopupSettings;
