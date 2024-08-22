<template>
  <div :class="['video-card', { locked: !isUnlocked }]" @click="handleClick">
    <div class="video-thumbnail">
      <img :src="thumbnailSrc" alt="Video thumbnail" loading="lazy" />
      <div v-if="!isUnlocked" class="lock-overlay">
        <span class="lock-icon">🔒</span>
        <p class="locked-text">Locked until {{ video.unlockDate }}</p>
      </div>
    </div>
    <div class="video-info">
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "VideoCard",
  props: {
    video: {
      type: Object as () => {
        title: string;
        description: string;
        unlockDate: string;
        thumbnail: string;
        videoUrl: string;
      },
      required: true,
    },
    currentDate: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isUnlocked = computed(() => {
      return new Date(props.currentDate) >= new Date(props.video.unlockDate);
    });

    const handleClick = () => {
      if (isUnlocked.value) {
        emit("play-video", props.video.videoUrl);
      }
    };

    const thumbnailSrc = computed(() => {
      return props.video.thumbnail;
    });

    return { isUnlocked, handleClick, thumbnailSrc };
  },
});
</script>

<style scoped>
.video-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
  text-align: center;
  position: relative;
}
.video-card:hover {
  transform: translateY(-5px);
}
.video-card.locked {
  cursor: not-allowed;
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 180px; /* Fixed height for the thumbnail container */
  overflow: hidden; /* Ensure that overflowed content is hidden */
  background-color: #f0f0f0; /* Optional: Add a background color in case the image is slow to load */
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire area without distortion */
}

.lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 18px;
}
.lock-icon {
  font-size: 36px;
  margin-bottom: 8px;
}
.locked-text {
  font-size: 14px;
}
.video-info {
  padding: 15px;
}
.video-info h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}
.video-info p {
  font-size: 14px;
  color: #555;
}
</style>
