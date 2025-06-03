import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

function Layout() {
  const location = useLocation();
  const hideFooter = ['/', '/register'].includes(location.pathname);
  
    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <Link className={styles.link} to="/">Chart</Link>
                    <Link className={styles.link} to="/posts">Posts</Link>
                    <Link className={styles.link} to="/about">About</Link>
                </div>
            </header>
            <main className='parents-block'>
                <Outlet/>
            </main>
            {!hideFooter && 'Footer'}
        </>
    )
}

export default Layout;
