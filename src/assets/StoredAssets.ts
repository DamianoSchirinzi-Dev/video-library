import thumbnail1 from './Thumbnails/thumbnail_1.jpg'
import thumbnail2 from './Thumbnails/thumbnail2.jpg'
import thumbnail3 from './Thumbnails/thumbnail3.jpg'

import video3 from './Videos/video3.mp4'

export interface Video {
    title: string;
    description: string;
    unlockDate: string;
    thumbnail: string;
    videoUrl: string;
  }
  
  export const storedAssets: Video[] = [
    {
      title: 'Introduction to Vue 3',
      description: 'Learn the basics of Vue 3 in this introductory video.',
      unlockDate: '2024-08-22',
      thumbnail: thumbnail1,
      videoUrl: video3,
    },
    {
      title: 'Composition API Deep Dive',
      description: 'Explore the Composition API in depth.',
      unlockDate: '2024-08-23',
      thumbnail: thumbnail2,
      videoUrl: video3,
    },
    {
      title: 'Building Large Scale Applications',
      description: 'A guide to building large-scale applications with Vue 3.',
      unlockDate: '2024-08-24',
      thumbnail: thumbnail3,
      videoUrl: video3,
    },
    {
      title: 'Introduction to Vue 3',
      description: 'Learn the basics of Vue 3 in this introductory video.',
      unlockDate: '2024-08-25',
      thumbnail: thumbnail1,
      videoUrl: video3,
    },
    {
      title: 'Composition API Deep Dive',
      description: 'Explore the Composition API in depth.',
      unlockDate: '2024-08-26',
      thumbnail: thumbnail2,
      videoUrl: video3,
    },
    {
      title: 'Building Large Scale Applications',
      description: 'A guide to building large-scale applications with Vue 3.',
      unlockDate: '2024-08-27',
      thumbnail: thumbnail3,
      videoUrl: video3,
    },
 ];
  