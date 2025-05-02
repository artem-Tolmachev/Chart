import Main from './shared/layouts/Main';
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
// │
// ├── app/
// │   ├── App.tsx           # Главный компонент приложения
// │   └── store.ts          # Хранилище состояния (например, Redux или Zustand)
// │
// ├── features/
// │   └── dashboard/        # Фича дашборда
// │       ├── components/   # Компоненты дашборда (например, графики)
// │       ├── api/          # Запросы к API (например, Bybit)
// │       └── Dashboard.tsx # Страница дашборда с графиками
// │
// └── shared/
//     ├── components/       # Переиспользуемые UI-компоненты (например, кнопки)
//     ├── layouts/   Main   # Лейауты для обёртки страниц (например, Main)
//     └── utils/  
 

