<script setup>
import { ref } from "vue";
import StarryBackground from "./components/StarryBackground.vue";
import HeroPanel from "./components/HeroPanel.vue";
import AboutPanel from "./components/AboutPanel.vue";
import ProjectCard from "./components/ProjectCard.vue";
import ProjectModal from "./components/ProjectModal.vue";
import ELFLIX from "./assets/images/ELFLIX.png";
import GATHERLY from "./assets/images/GATHERLY1.png";
import VUESKY from "./assets/images/VUESKY.png";
import { useHorizontalScroll } from "./composables/useHorizontalScroll";

const { container } = useHorizontalScroll();

const projects = ref([
  {
    id: 1,
    title: "Gatherly",
    description:
      "Social app with real-time feeds, friendships, and profile visibility controls.",
    tags: ["Vue 3", "Tailwind", "Supabase"],
    image: GATHERLY,
    link: "https://gatherlyy.netlify.app/",
  },
  {
    id: 2,
    title: "Elflix",
    description:
      "Placeholder description — swap this out with your real project.",
    tags: ["Vue 3", "Tailwind"],
    image: ELFLIX,
    link: "https://elflixy.netlify.app/profiles",
  },
  {
    id: 3,
    title: "Vuesky",
    description:
      "Placeholder description — swap this out with your real project.",
    tags: ["Vue 3", "Tailwind"],
    image: VUESKY,
    link: "https://vuesky.netlify.app/",
  },
]);

const activeProject = ref(null);

function handleOpenProject(project) {
  activeProject.value = project;
}
</script>

<template>
  <StarryBackground />
  <main class="relative min-h-screen text-white overflow-hidden">
    <div
      ref="container"
      class="flex h-screen items-center gap-12 overflow-x-hidden px-24"
    >
      <HeroPanel
        name="Emmanuella Ukata"
        tagline="Frontend developer crafting clean, elegant web experiences."
      />
      <AboutPanel
        bio="I build fast, thoughtful interfaces with Vue and a strong eye for detail. Currently focused on real-time apps and clean design systems."
        :skills="['Vue 3', 'Supabase', 'Tailwind', 'JavaScript']"
      />

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
  </main>
</template>
