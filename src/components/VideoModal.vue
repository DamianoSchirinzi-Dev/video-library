<template>
  <div v-if="visible" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <video ref="videoPlayer" controls autoplay :src="videoUrl"></video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "VideoModal",
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const videoPlayer = ref<HTMLVideoElement | null>(null);

    const closeModal = () => {
      emit("close");
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "";
    };

    watch(() => props.visible, (newVal) => {
      if (newVal) {
        disableScroll(); // Disable scrolling when the modal is visible
      } else {
        enableScroll(); // Re-enable scrolling when the modal is hidden
      }
    });

    onMounted(() => {
      if (props.visible) {
        disableScroll();
      }
    });

    onBeforeUnmount(() => {
      enableScroll(); // Ensure scrolling is re-enabled if the component is destroyed
    });

    return {
      videoPlayer,
      closeModal,
      videoUrl: props.videoUrl,
      visible: props.visible,
    };
  },
});
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 50px; 
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  z-index: 1001;
}

.close:hover,
.close:focus {
  color: #f00;
  text-decoration: none;
  cursor: pointer;
}

video {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain; /* Ensures the video fits within the container */
  border-radius: 0;
}

/* Specific styles for mobile devices */
@media (max-width: 768px) {
  .modal-content {
    padding: 0; /* Ensure there's no padding that could reduce the space available for the video */
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: auto;
  }

  .close {
    top: 150px;
    right: 10px;
  }
}
</style>
