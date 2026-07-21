<script setup>
import { ref } from "vue";
import { usePageEnter } from "../composables/usePageEnter";

const props = defineProps({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  skills: { type: Array, required: true },
  photo: { type: String, required: true },
  bio: { type: String, required: true },
  shortBio: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const root = ref(null);
usePageEnter(root, () => props.active);
</script>
<template>
  <section
    ref="root"
    class="flex h-screen w-screen shrink-0 flex-col items-center overflow-y-auto py-8 md:flex-row md:overflow-visible md:py-0"
  >
    <div
      class="flex w-full flex-1 items-center justify-center px-6 md:h-full md:px-8"
    >
      <div
        class="flex max-w-sm flex-col items-center gap-4 text-center md:gap-5"
      >
        <img
          :src="photo"
          alt="Photo of Emmanuella Ukata"
          class="stagger-item h-40 w-32 rounded-2xl border border-white/10 object-cover md:h-56 md:w-44"
        />
        <p
          class="stagger-item text-xs tracking-widest text-amber-300/80 md:text-sm"
        >
          HELLO, I'M
        </p>
        <h1 class="stagger-item text-3xl font-medium text-white md:text-4xl">
          {{ name }}
        </h1>
        <p
          class="stagger-item text-sm leading-relaxed text-white/60 md:text-base"
        >
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

    <div class="my-1 h-px w-2/3 bg-white/10 md:my-0 md:h-2/3 md:w-px"></div>

    <div
      class="flex w-full flex-1 items-center justify-center px-3 md:h-full md:px-8"
    >
      <div class="stagger-item max-w-md text-center">
        <h2 class="mb-3 text-xl font-medium text-white md:mb-4 md:text-2xl">
          About Me
        </h2>
        <p class="text-sm leading-relaxed text-white/60 md:hidden">
          {{ shortBio }}
        </p>
        <p class="hidden text-base leading-relaxed text-white/60 md:block">
          {{ bio }}
        </p>
      </div>
    </div>
  </section>
</template>
