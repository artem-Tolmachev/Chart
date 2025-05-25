import { useState } from 'react';
import styles from './styles.module.css';
import { useAppDispatch } from 'app/store/store';
import { chancheInterval } from 'features/coins/slices/CoinsSlice';

export default function Header() {
  const [activeInterval, setActiveInterval] = useState<string | null>(null);

  const dispatch = useAppDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const value = event.currentTarget.getAttribute('data-interval');

    if (value) {
      dispatch(chancheInterval({interval: value}))
      setActiveInterval(value);
    }
  };

  return (
    <div className={styles.header} >
      <div className={styles.buttons}>
        {['60', '30', '15', '5'].map((interval) => (
          <button
            key={interval}
            data-interval={interval}
            className={`${styles.btn} ${activeInterval === interval ? styles.active : ''}`}
            onClick={handleClick}
          >
            {interval}
          </button>
        ))}
      </div>
    </div>
  );
}