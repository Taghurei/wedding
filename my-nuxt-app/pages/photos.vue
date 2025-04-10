<template>
  <div class="gallery">
    <img 
      v-for="(image, index) in images" 
      :key="index" 
      :src="image" 
      @click="openViewer(index)" 
      class="thumbnail"
    />

    <!-- Fullscreen Image Viewer -->
    <div v-if="viewerOpen" class="viewer" @click="closeViewer">
      <img 
        :src="images[currentIndex]" 
        ref="viewerImage" 
        class="full-image"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click.stop
      />
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = computed(() => {
  const images = [];
  for (let i = 1; i <= 18; i++) {
    images.push(`/photos/${i}.jpg`);
  }
  return images;
});
const viewerOpen = ref(false);
const currentIndex = ref(0);
let touchStartX = 0;
let touchEndX = 0;

const openViewer = (index) => {
  currentIndex.value = index;
  viewerOpen.value = true;
};

const closeViewer = () => {
  viewerOpen.value = false;
};

// Handle swipe gestures
const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchEndX = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const swipeDistance = touchStartX - touchEndX;

  if (swipeDistance > 50) {
    nextImage(); // Swipe left → next image
  } else if (swipeDistance < -50) {
    prevImage(); // Swipe right → previous image
  }
};

const nextImage = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

// Handle ESC key to close viewer
const handleKeyDown = (e) => {
  if (e.key === "Escape") closeViewer();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.thumbnail {
  width: calc(33.333% - 8px);
  height: auto;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s;
  object-fit: cover;
}

.thumbnail:hover {
  transform: scale(1.01);
}

@media (max-width: 1024px) {
  .thumbnail {
    width: calc(50% - 8px); /* 2 images per row on tablets */
  }
}

.viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.full-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  transition: transform 0.3s ease;
}
</style>