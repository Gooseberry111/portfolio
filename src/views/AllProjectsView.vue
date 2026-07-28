<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ProjectCard from "../components/ProjectCard.vue";
import ProjectModal from "../components/ProjectModal.vue";
import StarryBackground from "../components/StarryBackground.vue";
import { projects } from "../data/projects";

const activeProject = ref(null);
function handleOpenProject(project) {
  activeProject.value = project;
}
</script>

<template>
  <StarryBackground />
  <div class="relative min-h-screen px-6 py-12 text-white md:px-16 md:py-16">
    <RouterLink
      to="/"
      class="mb-8 inline-block text-sm text-white/50 hover:text-white"
    >
      ← Back home
    </RouterLink>

    <h1 class="mb-10 text-2xl font-medium text-white md:text-3xl">
      All projects
    </h1>

    <div class="flex flex-wrap gap-4 md:gap-15">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image="project.image"
        @open="handleOpenProject(project)"
      />
    </div>

    <ProjectModal :project="activeProject" @close="activeProject = null" />
  </div>
</template>
