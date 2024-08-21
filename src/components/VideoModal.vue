<template>
    <div v-if="visible" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <video ref="videoPlayer" controls autoplay :src="videoUrl"></video>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'VideoModal',
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
        emit('close');
      };
  
      return { videoPlayer, closeModal };
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
    padding: 10px; /* Padding to ensure space around the video */
  }
  
  .modal-content {
    position: relative;
    background-color: transparent; /* Remove background color */
    border: none; /* Remove border */
    max-width: 100%;
    width: 100%;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .close {
    position: absolute;
    top: -20px;
    right: 30px;
    font-size: 56px; /* Increase size for better accessibility */
    font-weight: bold;
    background-color: rgb(51, 51, 51);
    color: #e6e6e6;
    border-radius: 8px;
    padding: 0px 12px;
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
    width: 100%;
    height: auto;
    border-radius: 8px; /* Slightly round corners for a modern look */
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .modal-content {
      width: 100%;
      height: auto;
      max-height: 90vh;
    }
  
    video {
      width: 100%;
      height: auto;
    }
  
    .close {
      top: 10px;
      right: 25px;
      font-size: 26px; /* Make the close button even larger on mobile */
      padding: 1px 8px;
    }
  }
  </style>
  