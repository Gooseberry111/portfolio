<script setup>
defineProps({
  count: { type: Number, required: true },
  activeIndex: { type: Number, required: true },
});

const emit = defineEmits(["dot-click"]);
</script>

<template>
  <div class="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-2">
    <button
      v-for="i in count"
      :key="i"
      class="h-1.5 w-1.5 rounded-full transition-all duration-300"
      :class="
        activeIndex === i - 1
          ? 'w-4 bg-amber-300'
          : 'bg-white/20 hover:bg-white/40'
      "
      :aria-label="`Go to section ${i}`"
      @click="emit('dot-click', i - 1)"
    />
  </div>
</template>
