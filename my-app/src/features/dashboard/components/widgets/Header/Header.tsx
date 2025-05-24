import { useState } from 'react';
import styles from './styles.module.css'; // или .scss и т.п.

export default function YourComponent() {
  const [activeInterval, setActiveInterval] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.getAttribute('data-interval');
    if (value) {
      setActiveInterval(value);
    }
  };


  return (
    <div className={styles.header} >
      <div className={styles.buttons}>
        {['1h', '30', '15', '5'].map((interval) => (
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