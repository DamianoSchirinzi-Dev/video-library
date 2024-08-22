<template>
  <div class="video-library">
    <div class="header-section">
      <h1>Video Library</h1>
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

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import VideoCard from "./VideoCard.vue";
import VideoModal from "./VideoModal.vue";
import { storedAssets } from "../assets/StoredAssets.ts";

export default defineComponent({
  name: "VideoLibrary",
  components: {
    VideoCard,
    VideoModal,
  },
  setup() {
    const currentDate = ref(new Date().toISOString().split("T")[0]);
    const timeUntilNextVideo = ref("");
    const currentVideoUrl = ref<string | null>(null);
    const isModalVisible = ref(false);

    const videos = ref(storedAssets);

    const nextVideo = computed(() => {
      return videos.value.find(
        (video) => new Date(video.unlockDate) > new Date(currentDate.value)
      );
    });

    const updateTimeUntilNextVideo = () => {
      if (nextVideo.value) {
        const now = new Date();
        const unlockDate = new Date(nextVideo.value.unlockDate);
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
      currentVideoUrl.value = videoUrl;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
      currentVideoUrl.value = null;
    };

    return {
      videos,
      currentDate,
      timeUntilNextVideo,
      currentVideoUrl,
      isModalVisible,
      playVideo,
      closeModal,
      nextVideo,
    };
  },
});
</script>

<style scoped>
.video-library {
  padding: 2.2rem 2.6rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(230, 230, 230, 0.8);
}
.header-section {
  font-size: 20px;
  padding: 10px 0px 25px 0px;
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
