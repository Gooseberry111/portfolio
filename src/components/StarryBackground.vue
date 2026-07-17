<script setup>
import { ref, onMounted } from "vue";

const stars = ref([]);
const STAR_COUNT = 300;

function generateStars() {
  const arr = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    arr.push({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: (Math.random() * 2.5 + 1.5).toFixed(1),
      delay: (Math.random() * 3).toFixed(1),
      opacity: (Math.random() * 0.6 + 0.3).toFixed(2),
    });
  }
  stars.value = arr;
}

onMounted(() => {
  generateStars();
});
</script>

<template>
  <div class="starry-bg">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="{
        top: star.top + '%',
        left: star.left + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        animationDuration: star.duration + 's',
        animationDelay: star.delay + 's',
        '--base-opacity': star.opacity,
      }"
    />
  </div>
</template>

<style scoped>
.starry-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(ellipse at 50% -10%, #1a1e28 0%, #08090c 65%);
  overflow: hidden;
}

.star {
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  opacity: var(--base-opacity);
  animation-name: twinkle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes twinkle {
  from {
    opacity: 0.15;
  }
  to {
    opacity: 0.95;
  }
}
</style>
