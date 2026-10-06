<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ProjectCard from "../components/ProjectCard.vue";
import ProjectModal from "../components/ProjectModal.vue";
import { usePageEnter } from "../composables/usePageEnter";
import { projects } from "../data/projects";

const activeProject = ref(null);
function handleOpenProject(project) {
  activeProject.value = project;
}

const root = ref(null);
usePageEnter(root, () => true);
</script>

<template>
  <div
    ref="root"
    class="mx-auto w-full max-w-6xl px-4 py-10 text-white md:px-8 md:py-16"
  >
    <RouterLink
      to="/"
      class="stagger-item mb-8 inline-block rounded-full text-sm text-white/50 transition-colors hover:text-white"
    >
      ← Back home
    </RouterLink>

    <div class="stagger-item mb-8 md:mb-10">
      <h1 class="text-2xl font-medium text-white md:text-3xl">All Projects</h1>
      <p class="mt-2 text-sm text-white/50">
        From social apps to client sites. Tap
        any card for the full story.
      </p>
    </div>

    <div
      class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image="project.image"
        class="stagger-item"
        @open="handleOpenProject(project)"
      />
    </div>

    <ProjectModal :project="activeProject" @close="activeProject = null" />
  </div>
</template>
