<script setup>
import { ref } from "vue";
import { usePageEnter } from "../composables/usePageEnter";

const props = defineProps({
  facts: { type: Array, required: true },
  active: { type: Boolean, required: true }, // array of strings
});

const root = ref(null);
usePageEnter(root, () => props.active);
</script>

<template>
  <section
    ref="root"
    class="flex h-screen w-screen shrink-0 flex-col items-center justify-center gap-6 px-8 text-center"
  >
    <h2 class="stagger-item text-2xl font-medium text-white">Beyond Code</h2>
    <ul class="stagger-item flex max-w-md flex-col gap-3">
      <li
        v-for="fact in facts"
        :key="fact"
        class="stagger-item text-sm leading-relaxed text-white/60"
      >
        {{ fact }}
      </li>
    </ul>
  </section>
</template>
