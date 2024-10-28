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
      title: '🌞 Welcome bellisima! 🌞',
      description: 'I am off tomorrow, I hope these videos help get you through our time apart 💓',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_1,
      videoUrl: 'https://www.youtube.com/embed/z97l7SRbRVk ', 
    },
    {
      title: '🛩️ The first day 🛩️',
      description: 'Catch flights, not feelings (too late for that, i am in love baby) 😉',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_2,
      videoUrl: 'https://youtube.com/embed/ZtD4e9gaL18',
    },
    {
      title: '🎉 Arriving in Thailandia 🎉',
      description: 'IF ALL IS GOOD, I would have arrived in Bangkok 🌴',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_3,
      videoUrl: 'https://youtube.com/embed/HKOis15crwo',
    },
    {
      title: '🤯 Bangkok #1 🤯',
      description: 'Having had survived the flights, a pretty Italian man navigates the city of Bangkok 👀',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_4,
      videoUrl: 'https://youtube.com/embed/kg2hpRbfOzM',
    },
    {
      title: '🤯 Bangkok #2 🤯',
      description: 'More temples, Muay Thai gyms, food and monkeys!',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_5,
      videoUrl: 'https://youtube.com/embed/b-2vdB3SoBA',
    },
    {
      title: '🤯 Bangkok #3 🤯',
      description: 'Last day in Bangkok! Time to get to the jungles! 🌴',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_6,
      videoUrl: 'https://youtube.com/embed/vvlt50mXqjc',
    },
    {
      title: '🌴 Khao Sok #1 🌴',
      description: 'Getting to Khao Sok after a 12 hour sleeper train 🚅',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_7,
      videoUrl: 'https://youtube.com/embed/OQPrynS5FTw',
    },
    {
      title: '🌴 Khao Sok #2 🌴',
      description: 'Bathing Elephants and outrunning Tigers (Jungle shenanigans) 🐅🐒',
      unlockDate: '2024-08-29',
      thumbnail: thumbnail_8,
      videoUrl: 'https://youtube.com/embed/PSdi6AtnEBE',
    },
    {
      title: '🌴 Khao Sok #3 🌴',
      description: 'Some more jungle exploring then we are heading to Phuket! Not sure how yet? 😕',
      unlockDate: '2024-11-09',
      thumbnail: thumbnail_9,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🎉 Phuket #1 🎉',
      description: 'Exploring Phuket and reviewing the lady boys (IM ONLY JOKING BABE) 🏖️',
      unlockDate: '2024-11-10',
      thumbnail: thumbnail_1,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🎉 Phuket #2 🎉',
      description: 'Probably beach vibes and more exploring?! I wanna see animals and monkeys! 🐒',
      unlockDate: '2024-11-11',
      thumbnail: thumbnail_2,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🎉 Phuket #3 🎉',
      description: 'Imma be hella mad if I have not held a monkey yet! 💢',
      unlockDate: '2024-11-12',
      thumbnail: thumbnail_3,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🚤 Ko Phi Phi #1 🚤',
      description: 'Getting a speedboat over to an Island (the boys REALLY wanted the speedboat) 🌏',
      unlockDate: '2024-11-13',
      thumbnail: thumbnail_4,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🚤 Ko Phi Phi #2 🚤',
      description: 'We will be staying in some cool jungle accomodation so hopefully I meet a monkey 🐒',
      unlockDate: '2024-11-14',
      thumbnail: thumbnail_5,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🚤 Ko Phi Phi #3 🚤',
      description: 'The boys want me to fight in a bar on this island 🏋️‍♂️',
      unlockDate: '2024-11-15',
      thumbnail: thumbnail_6,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🛫 Back to Bangkok! 🛬',
      description: 'We should have arrived in Bangkok again last night, the boys wanted to book a fancy hotel💲',
      unlockDate: '2024-11-16',
      thumbnail: thumbnail_7,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🛫 Back to London then Manchester! 🛬',
      description: 'I am on my way home to my love, even typing this, I can feel how excited I will be 👩‍❤️‍👨',
      unlockDate: '2024-11-17',
      thumbnail: thumbnail_8,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
    {
      title: '🏘️ I AM HOME 🏘️',
      description: 'Today, we will have a lot to catch up on, but I doubt we will be talking much 🌡️',
      unlockDate: '2024-11-18',
      thumbnail: thumbnail_9,
      videoUrl: 'https://youtube.com/embed/xaMwy5Gx9xE',
    },
  ]; 