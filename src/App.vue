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
/* Global styles can go here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}
</style>