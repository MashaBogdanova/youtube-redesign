import { VideoData } from './videoData.ts';

export interface VideosListSection {
  sectionName: string;
  description?: string;
  channelIcon?: string;
  videos: VideoData[];
  subscribeButton: boolean;
}
