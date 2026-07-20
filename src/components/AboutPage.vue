<script setup>
defineProps({
  bio: { type: String, required: true },
});
</script>

<template>
  <section
    class="flex h-screen w-screen shrink-0 flex-col items-center justify-center gap-6 px-8 text-center"
  >
    <h2 class="text-2xl font-medium text-white">About me</h2>
    <p class="max-w-xl text-lg leading-relaxed text-white/60">{{ bio }}</p>
  </section>
</template>
