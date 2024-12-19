import React from 'react';

import VideoListSection from '../../../components/UI/VideoListSection/VideoListSection.tsx';
import { recommendedVideos } from '../../../data/recommended-videos.ts';

const RecommendedVideos = () => {
  return <VideoListSection sectionData={recommendedVideos} />;
};

export default RecommendedVideos;
