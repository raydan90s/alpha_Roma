import { VideoItem } from '../../interface/videoProps'; // Importa la interfaz VideoItem

export const videoData: VideoItem[] = [
  {
    thumbnailUrl: 'src/assets/gif/miniatura.gif',  // Asegúrate de usar thumbnailUrl
    embedUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Usa embedUrl
  },
  {
    thumbnailUrl: 'src/assets/gif/miniatura2.gif',  // Asegúrate de usar thumbnailUrl
    embedUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', // Usa embedUrl
  },

  {
    thumbnailUrl: 'src/assets/gif/miniatura3.gif',  // Asegúrate de usar thumbnailUrl
    embedUrl: 'https://commondatastorage.googleapis.com/gtv-videosbucket/sample/ForBiggerBlazes.mp4', // Usa embedUrl
  },

];
