<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import StarryBackground from "./components/StarryBackground.vue";

const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>

<template>
  <StarryBackground />
  <main
    :class="[
      'relative w-screen text-white',
      isHome ? 'h-screen overflow-hidden' : 'min-h-screen overflow-y-auto',
    ]"
  >
    <RouterView />
  </main>
</template>
