import { useEffect, useState } from "react"

export const usePersistedInterval = () => {
    const [interval, setInterval] = useState();

      useEffect(() => {
        const rawFromLocalStorage = localStorage.getItem('persist:root');
    
        if (rawFromLocalStorage) {
          try {
            const parsedRoot = JSON.parse(rawFromLocalStorage);
            const coinsString = parsedRoot.coins;
            const coinsData = JSON.parse(coinsString);
            setInterval(coinsData.chartSettings.interval);
          } catch (e) {
            console.error('Ошибка при парсинге localStorage:', e);
          }
        }
      }, []);
      
    return interval;
}