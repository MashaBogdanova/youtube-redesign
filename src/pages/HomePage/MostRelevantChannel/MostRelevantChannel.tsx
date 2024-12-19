import React from 'react';

import VideoListSection from '../../../components/UI/VideoListSection/VideoListSection.tsx';
import { mostRelevantChannel } from '../../../data/most-relevant-channel.ts';

const MostRelevantChannel = () => {
  return <VideoListSection sectionData={mostRelevantChannel} />;
};

export default MostRelevantChannel;
