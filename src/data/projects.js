import ELFLIX from "../assets/images/ELFLIX.webp";
import GATHERLY from "../assets/images/Gatherly1.webp";
import VUESKY from "../assets/images/VUESKY.webp";
import THEMENTALHUB from "../assets/images/THEMENTALHUB.webp";
import BTL from "../assets/images/between_the_lines_cover.webp";
import SOULS from "../assets/images/ProjectSouls.webp";
import BETWEEN_US from "../assets/images/BetweenUs.webp";
import PSALMS from "../assets/images/Psalms.webp";
import FIRSTDRAFT from "../assets/images/FirstDraft.webp";
import BLISSMIND from "../assets/images/BlissMind.webp";

export const projects = [
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
      "A clean, calming site for booking therapy sessions and support groups built with just HTML and CSS.",
    longDescription:
      "The Mental Hub is a simple, welcoming space for people to find and pay for therapy sessions or support groups online. No frameworks, no fuss, just handcrafted HTML and CSS focused on making something that feels calm and approachable, since that matters a lot for a site like this.",
    tags: ["HTML", "CSS"],
    image: THEMENTALHUB,
    link: "",
  },
  {
    id: 5,
    title: "Between The Lines",
    description:
      "A home for poetry where you can write your own poems, read other people's, and like the lines that hit you.",
    longDescription:
      "Between The Lines is a little corner of the internet for poets and poetry lovers. You can write and publish your own poems, scroll through what other people have shared, and like individual lines instead of just the whole poem, because sometimes it's one line that stays with you. It's a quiet, reader-first space built around the words themselves.",
    tags: ["Vue", "Tailwind", "Supabase"],
    image: BTL,
    link: "https://between-d-lines.netlify.app/",
  },
  {
    id: 6,
    title: "Project Souls",
    description:
      "An evangelism tool for churches to keep track of the names and numbers of the people they meet.",
    longDescription:
      "Project Souls is built for church evangelism teams. After an outreach, you log the names and phone numbers of the people you met, and everything lives in one shared database instead of scattered notes and phone contacts. That makes it easy for the church to follow up, check in, and make sure nobody who showed interest gets forgotten.",
    tags: ["Vue", "Tailwind", "Supabase"],
    image: SOULS,
    link: "https://projectsouls.netlify.app/",
  },
  {
    id: 7,
    title: "Between Us",
    description:
      "A mobile app that helps two people grow closer, whether they're friends or partners.",
    longDescription:
      "Between Us is a mobile app for any two people who want to build a stronger connection, platonic or romantic. Each person shares what they love and their love language, and the app sends push notifications to remind the other person about those things, so the small thoughtful gestures don't slip. There are also shared goals and dreams slots where you can plan your future together, one step at a time.",
    tags: ["React Native", "Neon", "Clerk", "CloudFlare", "JavaScript"],
    image: BETWEEN_US,
    link: "",
  },
  {
    id: 8,
    title: "Psalms",
    description:
      "A Christian music app that learns your taste and builds praise and worship playlists for you.",
    longDescription:
      "Psalms is a music app for Christian songs. After signing up, you tell it your favorite genres and artists, and AI uses that to recommend songs on your home page. You can create playlists by mood (praise or worship) and theme, reshuffle or regenerate them, and drag to reorder. A 'learn from others' section lets people vote on songs, and those votes help the recommendations get better over time.",
    tags: ["Vue", "Tailwind", "Claude API"],
    image: PSALMS,
    link: "https://psalmm.netlify.app/",
  },
  {
    id: 9,
    title: "First Draft",
    description:
      "An AI writing assistant that builds your CV, resume, cover letter or essay through a simple chat.",
    longDescription:
      "First Draft takes the stress out of starting. You pick the document you need, answer a few friendly questions in a chat, and watch your CV, resume, cover letter or essay take shape in a live preview beside the conversation. You can save your documents, come back to edit them later, and export them as PDF or Word.",
    tags: ["Vue", "Tailwind", "Supabase", "Gemini API"],
    image: FIRSTDRAFT,
    link: "https://first-draftt.netlify.app/",
  },
  {
    id: 10,
    title: "Bliss Mind",
    description:
      "A calm, welcoming consulting website for a mental health and wellness brand, with online booking built in.",
    longDescription:
      "Bliss Mind is a consulting website I built for a client in the mental health and wellness space. It has four pages (Home, About, Services and Contact), a sage green and cream palette to keep things soft and reassuring, a Calendly embed so visitors can book a session, and Netlify Forms for the contact page. I also create the brand's Instagram posts, so the site and the social content feel like one voice.",
    tags: ["Vue", "Tailwind", "Calendly", "Netlify"],
    image: BLISSMIND,
    link: "https://blissmind.netlify.app/",
  },
  // add new projects here going forward — nothing else needs to change
];
