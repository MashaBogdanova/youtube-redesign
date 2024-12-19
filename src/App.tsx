import styles from './app.module.scss';
import Header from './components/Header/Header.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <SideMenu />
      <HomePage />
    </div>
  );
}

export default App;
