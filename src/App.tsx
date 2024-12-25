import { Route, Routes } from 'react-router';

import MainLayout from './components/layouts/MainLayout/MainLayout.tsx';
import VideoPlayerPageLayout from './components/layouts/VideoPlayerPageLayout/VideoPlayerPageLayout.tsx';
import ChannelPage from './pages/ChannelPage/ChannelPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage.tsx';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel" element={<ChannelPage />} />
      </Route>
      <Route element={<VideoPlayerPageLayout />}>
        <Route path="/player" element={<VideoPlayerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
