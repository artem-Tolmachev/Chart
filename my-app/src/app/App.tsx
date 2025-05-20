import Main from '../shared/layouts/Main';
import styles from './styles.module.css';

function App() {
    
  return (
    <div className={styles.app}>
      <Main/>
    </div>
  );
}

export default App;

// src/
// ├── app/                  # Инициализация приложения
// │   ├── App.tsx
// │   └── store.ts          # Корневой store
// ├── features/
// │   ├── dashboard/        # Фича дашборда
// │   │   ├── api/         # getKlines.ts, getFutures.ts
// │   │   ├── components/
// │   │   │   ├── ui/      # Loader, TickerItem
// │   │   │   ├── widgets/ # Chart, TradingInfoPanel
// │   │   │   └── blocks/  # Header, Sidebar
// │   │   ├── hooks/       # useTickers, useKlines
// │   │   ├── store/       # Слайсы дашборда (если есть)
// │   │   └── types/       # Типы дашборда
// │   └── coins/           # Фича для работы с монетами
// │        ├── api         # getApiCoins.ts → переименуйте в coinsApi.ts
            // │   └── coinsApi.ts  # Здесь будет RTK Query API
            // └── store/
            //       └── coinsSlice.ts 
// ├── shared/
// │   ├── components/      # Кастомные кнопки, поиск
// │   ├── hooks/           # useDebounce, useObserver
// │   ├── api/             # Общие API-утилиты
// │   ├── styles/          # variables.css
// │   └── utils/           # Форматирование, парсеры
// └── types/  
 

        