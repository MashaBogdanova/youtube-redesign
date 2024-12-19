import React from 'react';
import VideoListSection from '../../../components/UI/VideoListSection/VideoListSection.tsx';
import { recommendedChannel } from '../../../data/recommended-channel.ts';

const RecommendedChannel = () => {
  return <VideoListSection sectionData={recommendedChannel} />;
};

export default RecommendedChannel;
