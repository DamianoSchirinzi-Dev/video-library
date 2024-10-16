<template>
  <div class="video-library">
    <div class="header-section">
      <h1>🌴🌏 Messages from Thaimiano 🌏🌴</h1>
      <h2>{{ timeUntilNextVideo }}</h2>
    </div>

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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import VideoCard from "./VideoCard.vue";
import VideoModal from "./VideoModal.vue";
import { storedAssets } from "../assets/StoredAssets.ts";

const currentDate = ref(new Date().toISOString().split("T")[0]);
const timeUntilNextVideo = ref("");
const currentVideoUrl = ref<string | null>(null);
const isModalVisible = ref(false);
const videos = ref(storedAssets);

const updateTimeUntilNextVideo = () => {
  const nextVideo = videos.value.find(
    (video) => new Date(video.unlockDate) > new Date(currentDate.value)
  );
  
  if (nextVideo) {
    const now = new Date();
    const unlockDate = new Date(nextVideo.unlockDate);
    const timeDiff = unlockDate.getTime() - now.getTime();

    if (timeDiff > 0) {
      const hours = Math.floor((timeDiff % 86400000) / 3600000);
      const minutes = Math.floor((timeDiff % 3600000) / 60000);
      const seconds = Math.floor((timeDiff % 60000) / 1000);
      timeUntilNextVideo.value = `Next video unlocks in ${hours}h ${minutes}m ${seconds}s`;
    } else {
      timeUntilNextVideo.value = "The next video is available now!";
    }
  } else {
    timeUntilNextVideo.value = "All videos are available.";
  }
};

onMounted(() => {
  updateTimeUntilNextVideo();
  const intervalId = setInterval(updateTimeUntilNextVideo, 1000);
  onUnmounted(() => clearInterval(intervalId));
});

const playVideo = (videoUrl: string) => {
  currentVideoUrl.value = videoUrl; // Set YouTube embed URL
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  currentVideoUrl.value = null;
};
</script>

<style scoped>
.video-library {
  padding: 2.2rem 2.6rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(194, 195, 193, 0.8);
}
.header-section {
  font-size: 20px;
  padding: 10px 0px 25px 0px;
  margin: 0px 20px 40px 20px;
  border-radius: 20px;
  background-color: rgba(210, 100, 182, .85);
}
.video-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-content: center;
}

input[type="checkbox"] {
  transform: scale(1.5);
  margin-right: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-section {
  font-size: 10px;
  }

  .video-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
