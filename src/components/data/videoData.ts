import { VideoItem } from '../../components/video/VideoGalery'; // Import the VideoItem interface


export const videoData: VideoItem[] = [
  {
    title: 'Video 1', // Add a title for each video
    thumbnailUrl: '/assets/gif/miniatura.gif', // Ensure this GIF exists in your public/assets/gif/
    embedUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Video 2', // Add a title for each video
    thumbnailUrl: '/assets/gif/miniatura2.gif', // Ensure this JPG exists in your public/assets/gif/
    embedUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  // Add more video objects following the same structure
];