<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import ProjectCard from "./ProjectCard.vue";
import { usePageEnter } from "../composables/usePageEnter";

const props = defineProps({
  projects: { type: Array, required: true },
  active: { type: Boolean, required: true },
});

const emit = defineEmits(["open"]);

const featuredProjects = computed(() => props.projects.slice(0, 4));

const root = ref(null);
usePageEnter(root, () => props.active);
</script>

<template>
  <section ref="root" class="flex h-screen w-screen shrink-0 overflow-y-auto">
    <div
      class="m-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-14 md:gap-8 md:px-8"
    >
      <div
        class="stagger-item flex flex-col items-center gap-1 text-center md:flex-row md:items-end md:justify-between md:text-left"
      >
        <div>
          <h2 class="text-xl font-medium text-white md:text-2xl">My Projects</h2>
          <p class="mt-1 text-sm text-white/50">
            A few things I've designed and built recently.
          </p>
        </div>
        <RouterLink
          to="/projects"
          class="hidden shrink-0 rounded-full border border-amber-300/40 px-5 py-2 text-sm text-amber-200 transition hover:bg-amber-300/10 md:inline-block"
        >
          View all projects →
        </RouterLink>
      </div>

      <div class="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :image="project.image"
          class="stagger-item"
          @open="emit('open', project)"
        />
      </div>

      <RouterLink
        to="/projects"
        class="stagger-item self-center rounded-full border border-amber-300/40 px-5 py-2 text-sm text-amber-200 transition hover:bg-amber-300/10 md:hidden"
      >
        View all projects →
      </RouterLink>
    </div>
  </section>
</template>
