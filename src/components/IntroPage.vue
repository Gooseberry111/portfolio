<script setup>
import { ref } from "vue";
import { usePageEnter } from "../composables/usePageEnter";

const props = defineProps({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  skills: { type: Array, required: true },
  photo: { type: String, required: true },
  bio: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const root = ref(null);
usePageEnter(root, () => props.active);
</script>
<template>
  <section ref="root" class="flex h-screen w-screen shrink-0 items-center">
    <div class="flex h-full flex-1 items-center justify-center px-8">
      <div class="flex max-w-sm flex-col items-center gap-5 text-center">
        <img
          :src="photo"
          alt="Photo of Emmanuella Ukata"
          class="stagger-item h-56 w-44 rounded-2xl border border-white/10 object-cover"
        />
        <p class="stagger-item text-sm tracking-widest text-amber-300/80">
          HELLO, I'M
        </p>
        <h1 class="stagger-item text-4xl font-medium text-white">{{ name }}</h1>
        <p class="stagger-item text-base leading-relaxed text-white/60">
          {{ tagline }}
        </p>
        <div class="stagger-item flex flex-wrap justify-center gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-200"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <div class="h-2/3 w-px bg-white/10"></div>

    <div class="flex h-full flex-1 items-center justify-center px-8">
      <div class="stagger-item max-w-md text-center">
        <h2 class="mb-4 text-2xl font-medium text-white">About Me</h2>
        <p class="text-base leading-relaxed text-white/60">{{ bio }}</p>
      </div>
    </div>
  </section>
</template>
