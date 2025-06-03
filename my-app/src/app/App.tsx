import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import styles from './styles.module.css';
import Layout from 'shared/layouts/Layout';
import About from 'pages/about/About/About';
import Posts from 'pages/posts/Posts';

function App() {

  return (
      <div className={styles.main}>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Posts />} />
        </Route>
        </Routes>
      </div>
  );
}

export default App;


 

        