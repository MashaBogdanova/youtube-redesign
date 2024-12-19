export interface MostRelevantChannel {
  channelName: string;
  channelIcon: string;
  videos: VideoData[];
}

interface VideoData {
  title: string;
  author: string;
  time: string;
  viewsCount: string;
  whenAdded: string;
  icon: string;
}
