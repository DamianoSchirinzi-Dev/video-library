<template>
    <div class="video-library">
      <h1 class="header">Video Library</h1>
      <div class="video-list">
        <VideoCard
          v-for="(video, index) in videos"
          :key="index"
          :video="video"
          :currentDate="currentDate"
          @play-video="playVideo"
        />
      </div>
  
      <!-- Video Modal -->
      <VideoModal
        v-if="isModalVisible"
        :videoUrl="currentVideoUrl || ''"
        :visible="isModalVisible"
        @close="closeModal"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import VideoCard from './VideoCard.vue';
  import VideoModal from './VideoModal.vue';
  import { storedAssets } from '../assets/StoredAssets.ts'; 

  
  export default defineComponent({
    name: 'VideoLibrary',
    components: {
      VideoCard,
      VideoModal,
    },
    setup() {
      const currentDate = ref(new Date().toISOString().split('T')[0]); // YYYY-MM-DD format
      const currentVideoUrl = ref<string | null>(null);
      const isModalVisible = ref(false);
  
      const videos = ref(storedAssets);
  
      const playVideo = (videoUrl: string) => {
        currentVideoUrl.value = videoUrl;
        isModalVisible.value = true;
      };
  
      const closeModal = () => {
        isModalVisible.value = false;
        currentVideoUrl.value = null;
      };
  
      return { videos, currentDate, currentVideoUrl, isModalVisible, playVideo, closeModal };
    },
  });
  </script>
  
  <style scoped>
  .video-library {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .header {
    font-size: 40px;
    padding: 30px;
    color: #333;
    text-align: center;
  }
  .video-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    justify-content: center;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .video-list {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  </style>
  