import styles from './app.module.scss';
import Header from './components/Header/Header.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';
import ChannelPage from './pages/ChannelPage/ChannelPage.tsx';

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <SideMenu />
      {/*<HomePage />*/}
      <ChannelPage />
    </div>
  );
}

export default App;
