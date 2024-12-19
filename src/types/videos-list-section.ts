export interface VideosListSection {
  sectionName: string;
  description?: string;
  channelIcon?: string;
  videos: VideoData[];
  subscribeButton: boolean;
}

interface VideoData {
  title: string;
  author: string;
  time: string;
  viewsCount: string;
  whenAdded: string;
  icon: string;
}
