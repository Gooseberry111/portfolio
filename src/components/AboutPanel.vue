<script setup>
defineProps({
  bio: { type: String, required: true },
  skills: { type: Array, required: true },
});
</script>

<template>
  <section
    class="flex h-screen w-[360px] shrink-0 flex-col justify-center gap-5 px-4"
  >
    <h2 class="text-2xl font-medium text-white">About</h2>
    <p class="text-base leading-relaxed text-white/60">{{ bio }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in skills"
        :key="skill"
        class="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-200"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
