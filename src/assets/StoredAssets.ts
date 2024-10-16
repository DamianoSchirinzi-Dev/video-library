import thumbnail_1 from './Thumbnails/thumbnail_1.jpg'
import thumbnail_2 from './Thumbnails/thumbnail_2.jpg'
import thumbnail_3 from './Thumbnails/thumbnail_3.jpg'
import thumbnail_4 from './Thumbnails/thumbnail_4.jpg'
import thumbnail_5 from './Thumbnails/thumbnail_5.jpg'
import thumbnail_6 from './Thumbnails/thumbnail_6.jpg'
import thumbnail_7 from './Thumbnails/thumbnail_7.jpg'
import thumbnail_8 from './Thumbnails/thumbnail_8.jpg'
import thumbnail_9 from './Thumbnails/thumbnail_9.jpg'

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
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_1,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Advanced Vue 3 Concepts',
      description: 'Delve into more advanced topics and features of Vue 3.',
      unlockDate: '2024-08-30',
      thumbnail: thumbnail_2,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Building Large Scale Applications',
      description: 'A guide to building large-scale applications with Vue 3.',
      unlockDate: '2024-09-01',
      thumbnail: thumbnail_3,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'State Management with Vuex',
      description: 'Learn how to manage complex state in Vue 3 applications using Vuex.',
      unlockDate: '2024-09-04',
      thumbnail: thumbnail_4,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Composition API Deep Dive',
      description: 'Explore the Composition API in depth.',
      unlockDate: '2024-09-8',
      thumbnail: thumbnail_5,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Routing in Vue 3',
      description: 'Master routing techniques in Vue 3 applications using Vue Router.',
      unlockDate: '2024-09-10',
      thumbnail: thumbnail_6,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Vue 3 with TypeScript',
      description: 'Learn how to integrate TypeScript with Vue 3 for type-safe applications.',
      unlockDate: '2024-09-12',
      thumbnail: thumbnail_7,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Optimizing Vue 3 Applications',
      description: 'Techniques for optimizing performance in Vue 3 applications.',
      unlockDate: '2024-09-14',
      thumbnail: thumbnail_8,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: 'Server-Side Rendering with Vue 3',
      description: 'A guide to implementing server-side rendering with Vue 3.',
      unlockDate: '2024-09-18',
      thumbnail: thumbnail_9,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
  ]; 