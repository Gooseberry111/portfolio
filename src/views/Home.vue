<script setup>
import { ref, computed } from "vue";
import IntroPage from "../components/IntroPage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";
import BeyondCodePage from "../components/BeyondCodePage.vue";
import ContactPanel from "../components/ContactPanel.vue";
import ProjectModal from "../components/ProjectModal.vue";
import ScrollDots from "../components/ScrollDots.vue";
import { useSnapScroll } from "../composables/useSnapScroll";
import image from "../assets/images/image.webp";
import { projects } from "../data/projects";

const beyondCodeFacts = ref([
  "When I'm not coding, I'm probably watching something on my Netflix clone (yes, really).",
  "I'm a little too passionate about clean UI spacing.",
  "Currently deep-diving into backend and database design.",
  "Coffee-fueled, detail-obsessed, always tinkering on a side project.",
]);

const activeProject = ref(null);
function handleOpenProject(project) {
  activeProject.value = project;
}

const pageCount = computed(() => 4); // Intro, Projects, BeyondCode, Contact
const { container, activeIndex, goToIndex } = useSnapScroll(
  pageCount,
  () => activeProject.value !== null,
);
</script>

<template>
  <div ref="container" class="flex h-screen">
    <IntroPage
      name="Emmanuella Ukata"
      tagline="Frontend developer crafting clean, elegant web experiences."
      :skills="['Vue 3', 'Supabase', 'Tailwind', 'JavaScript']"
      :photo="image"
      shortBio="I'm a full-stack developer with a degree that gave me the fundamentals, and a lot of late nights that gave me everything else. I work across the whole stack. Vue on the frontend, Supabase and PostgreSQL underneath because I like understanding a project from the database schema all the way up to the pixels someone actually clicks. There's something satisfying about tracing a bug from a broken UI state all the way down to a missing RLS policy, then fixing both ends."
      bio="I'm a full-stack developer with a degree that gave me the fundamentals, and a lot of late nights that gave me everything else. I work across the whole stack. Vue on the frontend, Supabase and PostgreSQL underneath because I like understanding a project from the database schema all the way up to the pixels someone actually clicks. There's something satisfying about tracing a bug from a broken UI state all the way down to a missing RLS policy, then fixing both ends. Outside of code, I play basketball, sing, and write poetry. Yeah I know, different outlets, but same instinct. It is literally taking something unstructured and shaping it into something that holds together. Turns out that's basically what building software is too "
      :active="activeIndex === 0"
    />

    <ProjectsPage
      :projects="projects"
      :active="activeIndex === 1"
      @open="handleOpenProject"
    />

    <BeyondCodePage :facts="beyondCodeFacts" :active="activeIndex === 2" />

    <ContactPanel
      email="ellaukata@gmail.com"
      :links="[
        { label: 'GitHub', url: 'https://github.com/Gooseberry111' },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/emmanuella-ukata-a15189367/',
        },
      ]"
      :active="activeIndex === 3"
    />
  </div>

  <ScrollDots
    :count="pageCount"
    :active-index="activeIndex"
    @dot-click="goToIndex"
  />

  <ProjectModal :project="activeProject" @close="activeProject = null" />
</template>
