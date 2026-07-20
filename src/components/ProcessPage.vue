<script setup>
defineProps({
  steps: { type: Array, required: true }, // [{ title, description }]
});
</script>

<template>
  <section
    class="flex h-screen w-screen shrink-0 flex-col items-center justify-center gap-8 px-8"
  >
    <h2 class="text-2xl font-medium text-white">How I work</h2>
    <div class="flex max-w-3xl justify-center gap-6">
      <div
        v-for="(step, i) in steps"
        :key="step.title"
        class="w-56 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
      >
        <p class="text-xs text-amber-300/80">STEP {{ i + 1 }}</p>
        <h3 class="mt-2 text-base font-medium text-white">{{ step.title }}</h3>
        <p class="mt-2 text-xs leading-relaxed text-white/60">
          {{ step.description }}
        </p>
      </div>
    </div>
  </section>
</template>
