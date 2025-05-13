import { useEffect, useRef  } from 'react';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean | string;
  onToggleModal: (arg: boolean)  => void;
  children: React.ReactNode;
}

function PopupAdditem({isOpen, onToggleModal, children }: Props){
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
    <div ref={popupRef} className={styles.addPopup}>
      {/* <h3 className={styles.addTitle}>Выбрать инструмент</h3>
      <div className={styles.coinsadd}>
        <div className={styles.close} onClick={() => onToggleModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" strokeWidth="18" height="18"><path stroke="currentColor" strokeWidth="1.2" d="m1.5 1.5 15 15m0-15-15 15"></path></svg>
        </div>
      </div>
      <div className={styles.addWrapper}>
        {children}
      </div> */}
      {children}
    </div>
  )
}
export default PopupAdditem;
