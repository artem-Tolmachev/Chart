import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

interface IPopupHendler {
  isOpen: boolean;
  onClose: () => void;
}

function PopupFilter({isOpen, onClose}: IPopupHendler ){
  const popupRef = useRef<HTMLDivElement>(null);
  const [checks, setChecks] = useState([false, false, false]);

  function handleClickOutside(event: MouseEvent) {
    if (popupRef.current &&
      event.target instanceof Node &&
      !popupRef.current.contains(event.target)) {
        onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleCheck = (index: number) => {
    const updated = [...checks];
    updated[index] = !updated[index];
    setChecks(updated);
  };
  
  return (
    <div ref={popupRef} className={styles.container}>
      {checks.map((checked, index) => (
        <CustomCheckbox
          key={index}
          checked={checked}
          onChange={() => toggleCheck(index)}
        />
      ))}
    </div>
  )
}

export default PopupFilter;