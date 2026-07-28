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
  <section
    ref="root"
    class="flex h-screen w-screen shrink-0 flex-col justify-center gap-6 overflow-y-auto px-4 py-10 md:gap-10 md:overflow-visible md:px-8 md:py-0"
  >
    <div class="flex flex-col gap-2 text-center md:text-left">
      <h2 class="text-xl font-medium text-white md:text-2xl">My Projects</h2>
    </div>
    <div class="flex flex-wrap justify-center gap-4 md:gap-6">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image="project.image"
        @open="emit('open', project)"
        class="stagger-item"
      />
    </div>

    <RouterLink
      to="/projects"
      class="stagger-item self-center rounded-full border border-amber-300/40 px-5 py-2 text-sm text-amber-200 transition hover:bg-amber-300/10 md:self-start"
    >
      View more projects →
    </RouterLink>
  </section>
</template>
