<template>
  <div id="app">
    <VideoLibrary />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VideoLibrary from './components/VideoLibrary.vue';

export default defineComponent({
  name: 'App',
  components: {
    VideoLibrary,
  },
});
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200,300,400;500;600;700&display=swap');

body {

  background-image: url('./assets/BG/background.jpg'); 
  background-repeat: repeat; 
  background-size: 200px 200px; 
  background-position: top left; 
  font-family: 'Poppins', sans-serif; 
  margin: 0;
  padding: 0;
}

.video-library {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: Add a semi-transparent background to make text readable */
  border-radius: 8px;
}
</style>