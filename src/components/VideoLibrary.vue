<template>
  <div class="video-library">
    <div class="header-section">
      <h1>Video Library</h1>
      <h2>{{ timeUntilNextVideo }}</h2>

      <div class="controls-section">
        <input type="checkbox" id="checkbox" v-model="showInput" />
        <label for="checkbox">{{
          showInput ? "Hide Input" : "Show Input"
        }}</label>
        <div class="questions-input" v-if="showInput">
          <p>
            Ask a yes / no question:
            <input v-model="question" :disabled="loading" ref="input" />
          </p>
          <p>{{ answer }}</p>
        </div>
      </div>
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
  import { ref, computed, onMounted, onUnmounted, watch } from "vue";
  import VideoCard from "./VideoCard.vue";
  import VideoModal from "./VideoModal.vue";
  import { storedAssets } from "../assets/StoredAssets.ts";

  const currentDate = ref(new Date().toISOString().split("T")[0]);
  const timeUntilNextVideo = ref("");
  const currentVideoUrl = ref<string | null>(null);
  const isModalVisible = ref(false);

  const showInput = ref(false);
  const question = ref("");
  const answer = ref("");
  const loading = ref(false);

  const input = ref(null);

  watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes("?")) {
      console.log("Updating: " + oldQuestion);
      loading.value = true;
      answer.value = "Thinking...";

      try {
        const response = await fetch("https://yesno.wtf/api");
        answer.value = (await response.json()).answer;
      } catch (error) {
        answer.value = "Error fetching data";
      } finally {
        loading.value = false;
      }
    } else {
      answer.value = "A question should have a question mark! (?)";
    }
  });

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
  margin: 0px 20px 40px 20px;
  border-radius: 20px;
  background-color: rgba(68, 145, 180, 0.9);
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
  .video-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
