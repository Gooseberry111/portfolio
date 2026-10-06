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
  <button
    type="button"
    class="group flex h-full w-full cursor-pointer flex-col gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/10 focus-visible:border-amber-300/70 focus-visible:outline-none md:gap-3 md:rounded-2xl md:p-3.5"
    @click="emit('open')"
  >
    <div
      class="aspect-16/10 w-full shrink-0 overflow-hidden rounded-lg bg-white/5 md:rounded-xl"
    >
      <img
        v-if="image"
        :src="image"
        :alt="`${title} logo`"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        v-else
        class="flex h-full items-center justify-center text-xs text-white/30"
      >
        No image yet
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-1.5 px-0.5 md:gap-2">
      <h3
        class="flex items-center justify-between gap-2 text-sm font-medium text-white md:text-base"
      >
        <span class="truncate">{{ title }}</span>
        <span
          aria-hidden="true"
          class="shrink-0 text-amber-200/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-amber-200"
        >
          →
        </span>
      </h3>

      <p class="line-clamp-2 text-xs leading-relaxed text-white/60 md:line-clamp-3">
        {{ description }}
      </p>

      <div class="mt-auto hidden flex-wrap gap-1.5 pt-1 md:flex">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-[10px] text-amber-200"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </button>
</template>
