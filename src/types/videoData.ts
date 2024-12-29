export interface VideoData {
  title: string;
  author: string;
  time: string;
  currentTime?: string;
  viewsCount: string;
  likesCount?: string;
  dislikesCount?: string;
  whenAdded?: string;
  cover: {
    base: string;
    mobile?: string;
  };
  description?: string;
}
