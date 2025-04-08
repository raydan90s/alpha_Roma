// interface/videoProps.ts
export interface VideoItem {
  thumbnailUrl: string;  // Usa thumbnailUrl en lugar de thumbnailGif
  embedUrl: string;      // Usa embedUrl en lugar de url
}

export interface VideoComponentProps {
  videos: VideoItem[];   // Usa VideoItem[] directamente
}
