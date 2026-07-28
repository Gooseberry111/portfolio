import ELFLIX from "../assets/images/ELFLIX.png";
import GATHERLY from "../assets/images/Gatherly1.png";
import VUESKY from "../assets/images/VUESKY.png";
import THEMENTALHUB from "../assets/images/THEMENTALHUB.png";
import BTL from "../assets/images/between_the_lines_cover.png";

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
      "A clean, calming site for booking therapy sessions and support groups — built with just HTML and CSS.",
    longDescription:
      "The Mental Hub is a simple, welcoming space for people to find and pay for therapy sessions or support groups online. No frameworks, no fuss — just handcrafted HTML and CSS focused on making something that feels calm and approachable, since that matters a lot for a site like this.",
    tags: ["HTML", "CSS"],
    image: THEMENTALHUB,
    link: "",
  },
  {
    id: 5,
    title: "In Between The Lines",
    description:
      "A clean, calming site for booking therapy sessions and support groups — built with just HTML and CSS.",
    longDescription:
      "The Mental Hub is a simple, welcoming space for people to find and pay for therapy sessions or support groups online. No frameworks, no fuss — just handcrafted HTML and CSS focused on making something that feels calm and approachable, since that matters a lot for a site like this.",
    tags: ["Vue", "Tailwind", "Supabase"],
    image: BTL,
    link: "https://between-d-lines.netlify.app/",
  },
  // add new projects here going forward — nothing else needs to change
];
