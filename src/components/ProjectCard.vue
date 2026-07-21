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
    class="group flex h-33 w-30 shrink-0 cursor-pointer flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-amber-300/50 hover:bg-white/10 md:h-71 md:w-56 md:gap-3 md:rounded-2xl md:p-4"
  >
    <div
      class="flex h-13 w-full items-center justify-center rounded-lg bg-white/5 md:h-28 md:rounded-xl"
    >
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="h-full w-full rounded-lg object-cover md:rounded-xl"
      />
      <span v-else class="text-xs text-white/30">No image yet</span>
    </div>

    <h3 class="line-clamp-2 text-xs font-medium text-white md:text-base">
      {{ title }}
    </h3>
    <p
      class="hidden text-xs leading-relaxed text-white/60 md:line-clamp-2 md:block"
    >
      {{ description }}
    </p>

    <div class="hidden md:mt-auto md:flex md:flex-wrap md:gap-1.5">
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
