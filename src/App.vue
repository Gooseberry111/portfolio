<script setup>
import { ref, computed } from "vue";
import StarryBackground from "./components/StarryBackground.vue";
import IntroPage from "./components/IntroPage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";
import ProcessPage from "./components/ProcessPage.vue";
import BeyondCodePage from "./components/BeyondCodePage.vue";
import ContactPanel from "./components/ContactPanel.vue";
import ProjectModal from "./components/ProjectModal.vue";
import ScrollDots from "./components/ScrollDots.vue";
import ELFLIX from "./assets/images/ELFLIX.png";
import GATHERLY from "./assets/images/Gatherly1.png";
import VUESKY from "./assets/images/VUESKY.png";
import THEMENTALHUB from "./assets/images/THEMENTALHUB.png";
import { useSnapScroll } from "./composables/useSnapScroll";
import AboutPage from "./components/AboutPage.vue";
import image from "./assets/images/image.png";

const projects = ref([
  {
    id: 1,
    title: "Gatherly",
    description:
      "A Facebook-style social app built with Vue and Supabase. You get to have friends, feeds, and profiles, all wired up for real.",
    longDescription:
      "Gatherly is a social app built from the ground up with Vue and Supabase. Think Facebook, but built solo and full of little details I actually cared about. Friend requests, real-time feeds, profile pages you can hop between, and post visibility controls so you decide who sees what. Basically a whole tiny social network living in one project. 🌱",
    tags: ["Vue", "Supabase", "Tailwind"],
    image: GATHERLY,
    link: "https://gatherlyy.netlify.app/",
  },
  {
    id: 2,
    title: "Elflix",
    description:
      "A Netflix-style clone built with Vue. You can browse movies, watch trailers, feel fancy. Real data straight from the TMDB API.",
    longDescription:
      'Elflix is what happens when you give Netflix\'s UI a Vue makeover. Genre rows, movie cards, the whole binge-worthy layout — all wired up to live data from the TMDB API. Click a title and it pulls up the trailer straight from YouTube, so you get that "ooh let me just watch one preview" experience without the actual streaming license. 🍿',
    tags: ["Vue", "TMDB API", "YouTube API", "Tailwind"],
    image: ELFLIX,
    link: "https://elflixy.netlify.app/profiles",
  },
  {
    id: 3,
    title: "Vuesky",
    description:
      "A cozy little weather app built with Vue + Tailwind, just tell it where you are and it'll tell you if you need a jacket.",
    longDescription:
      "Vuesky is your friendly neighborhood weather buddy, built with Vue and styled up nice with Tailwind. It pulls real-time forecasts from a Weather API so you always know what the sky's up to, whether that's sunshine, rain, or \"maybe grab an umbrella just in case\" energy. Small app, big vibes. ☁️",
    tags: ["Vue", "Tailwind", "Weather API"],
    image: VUESKY,
    link: "https://vuesky.netlify.app/",
  },
  {
    id: 4,
    title: "The Mental Hub",
    description:
      "A clean, calming site for booking therapy sessions and support groups — built with just HTML and CSS.",
    longDescription:
      "The Mental Hub is a simple, welcoming space for people to find and pay for therapy sessions or support groups online. No frameworks, no fuss — just handcrafted HTML and CSS focused on making something that feels calm and approachable, since that matters a lot for a site like this.",
    tags: ["HTML", "CSS"],
    image: THEMENTALHUB,
    link: "",
  },
]);

const processSteps = ref([
  {
    title: "Understand",
    description:
      "Start by figuring out what actually needs solving, not just what looks good.",
  },
  {
    title: "Build",
    description:
      "Vue components, clean state, and a UI that doesn't get in the user's way.",
  },
  {
    title: "Refine",
    description:
      "Polish the details, animation, spacing, edge cases and the likes, until it feels right.",
  },
  {
    title: "Ship",
    description:
      "Get it out into the world, then keep iterating based on real use.",
  },
]);

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

const pageCount = computed(() => 4); // Intro, Projects, Process, BeyondCode, Contact
const { container, activeIndex, goToIndex } = useSnapScroll(pageCount);
</script>

<template>
  <StarryBackground />
  <main class="relative h-screen w-screen overflow-hidden text-white">
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
      <!-- <AboutPage
        bio="I'm a full-stack developer with a degree that gave me the fundamentals, and a lot of late nights that gave me everything else. I work across the whole stack. Vue on the frontend, Supabase and PostgreSQL underneath because I like understanding a project from the database schema all the way up to the pixels someone actually clicks. There's something satisfying about tracing a bug from a broken UI state all the way down to a missing RLS policy, then fixing both ends.

Outside of code, I play basketball, sing, and write poetry. Yeah I know, different outlets, but same instinct. It is literally taking something unstructured and shaping it into something that holds together. Turns out that's basically what building software is too "
      /> -->

      <ProjectsPage
        :projects="projects"
        :active="activeIndex === 1"
        @open="handleOpenProject"
      />

      <!-- <ProcessPage :steps="processSteps" /> -->

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
  </main>
</template>
