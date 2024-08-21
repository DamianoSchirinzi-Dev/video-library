import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import VideoLibrary from './components/VideoLibrary.vue';

const routes = [
  { path: '/', component: VideoLibrary }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');