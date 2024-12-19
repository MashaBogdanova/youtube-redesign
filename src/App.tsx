import styles from './app.module.scss';
import Header from './components/Header/Header.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <SideMenu />
    </div>
  );
}

export default App;
