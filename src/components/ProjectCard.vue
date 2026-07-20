<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, required: true },
  image: { type: String, default: "" },
});

const emit = defineEmits(["open"]);
</script>

<template>
  <article
    class="group flex h-71 w-56 shrink-0 cursor-pointer flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-amber-300/50 hover:bg-white/10"
    @click="emit('open')"
  >
    <div
      class="flex h-28 w-full items-center justify-center rounded-xl bg-white/5"
    >
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="h-full w-full rounded-xl object-cover"
      />
      <span v-else class="text-xs text-white/30">No image yet</span>
    </div>

    <h3 class="text-base font-medium text-white">{{ title }}</h3>
    <p class="line-clamp-2 text-xs leading-relaxed text-white/60">
      {{ description }}
    </p>

    <div class="mt-auto flex flex-wrap gap-1.5">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full bg-amber-300/10 px-2 py-0.5 text-[10px] text-amber-200"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
