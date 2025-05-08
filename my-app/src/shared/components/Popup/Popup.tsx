import { useEffect, useRef  } from 'react';
import styles from './styles.module.css';

interface Props {
  isOpen: null | string | string;
  onClose: (type: null | 'settings' | 'add') => void;
  children?: React.ReactNode;
  variant?: string;
  title?: string;
}

function Popup({isOpen, onClose, children, variant, title}: Props){
  const popupRef = useRef<HTMLDivElement>(null);
  
  function handleClickOutside(event: MouseEvent) {
    if (popupRef.current &&
      event.target instanceof Node &&
      !popupRef.current.contains(event.target)) {
        onClose(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  //className
  const variantClass = variant === 'settings' ? styles.settingsPopup : styles.addPopup;
  const variantTitle = variant === 'settings' ? styles.settingTitle : styles.addTitle;
  const variantWrapper = variant === 'settings' ? styles.settingWrapper : styles.addWrapper;

  return (
    <div ref={popupRef} className={`${styles.container} ${variantClass}`}>
      <h3 className={`${variantTitle}`}>{title}</h3>
      <div className={`${variantWrapper}`}>
        {children}
      </div>
    </div>
  )
}

export default Popup;
