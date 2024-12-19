import React from 'react';

import { mostRelevantChannel } from '../../../data/most-relevant-channel.ts';
import VideoListSection from '../../../components/UI/VideoListSection/VideoListSection.tsx';

const MostRelevantChannel = () => {
  return <VideoListSection sectionData={mostRelevantChannel} />;
};

export default MostRelevantChannel;
