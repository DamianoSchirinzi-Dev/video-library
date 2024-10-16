<template>
  <div v-if="visible" class="modal" @click.self="closeModal">
    <div class="modal-content">
       <iframe
        v-if="videoUrl"
        :src="videoUrl"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, onBeforeUnmount } from "vue";

defineProps<{
  videoUrl: string;
  visible: boolean;
}>();

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

// Close modal on Escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
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
  width: 80%;
  height: 80%;
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

iframe {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
