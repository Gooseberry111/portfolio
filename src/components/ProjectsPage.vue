<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { usePageEnter } from "../composables/usePageEnter";
const props = defineProps({
  projects: { type: Array, required: true },
  active: { type: Boolean, required: true },
});

const emit = defineEmits(["open"]);

const root = ref(null);
usePageEnter(root, () => props.active);
</script>

<template>
  <section
    ref="root"
    class="flex h-screen w-screen shrink-0 flex-col justify-center gap-10 px-8"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-medium text-white">My Projects</h2>
    </div>
    <div class="flex flex-wrap justify-center gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image="project.image"
        @open="emit('open', project)"
        class="stagger-item"
      />
    </div>
  </section>
</template>
