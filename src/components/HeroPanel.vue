<script setup>
defineProps({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
});
</script>

<template>
  <section
    class="flex h-screen w-[320px] shrink-0 flex-col justify-center gap-3 px-4"
  >
    <p class="text-sm tracking-widest text-amber-300/80">HELLO, I'M</p>
    <h1 class="text-4xl font-medium text-white">{{ name }}</h1>
    <p class="text-base leading-relaxed text-white/60">{{ tagline }}</p>
  </section>
</template>
