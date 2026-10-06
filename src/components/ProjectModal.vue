<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";

const props = defineProps({
  project: { type: Object, default: null },
});
const emit = defineEmits(["close"]);

const closeButton = ref(null);
let lastFocused = null;

function handleKeydown(e) {
  if (e.key === "Escape" && props.project) emit("close");
}

watch(
  () => props.project,
  async (project, previous) => {
    if (project && !previous) {
      lastFocused = document.activeElement;
      document.documentElement.style.overflow = "hidden";
      await nextTick();
      closeButton.value?.focus();
    } else if (!project && previous) {
      document.documentElement.style.overflow = "";
      lastFocused?.focus?.();
    }
  },
);

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.documentElement.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-6"
        @click.self="emit('close')"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          class="modal-panel relative flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14161c]/90 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          <button
            ref="closeButton"
            type="button"
            class="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-sm text-white/80 backdrop-blur transition-colors hover:bg-black/80 hover:text-white focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:outline-none"
            aria-label="Close"
            @click="emit('close')"
          >
            ✕
          </button>

          <div class="overflow-y-auto">
            <div class="aspect-16/10 w-full bg-white/5">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="`${project.title} logo`"
                class="h-full w-full object-cover"
              />
              <span
                v-else
                class="flex h-full items-center justify-center text-sm text-white/30"
              >
                No image yet
              </span>
            </div>

            <div class="p-5 md:p-6">
              <h2
                id="project-modal-title"
                class="text-xl font-medium text-white md:text-2xl"
              >
                {{ project.title }}
              </h2>

              <div class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-0.5 text-xs text-amber-200"
                >
                  {{ tag }}
                </span>
              </div>

              <p class="mt-4 text-sm leading-relaxed text-white/70">
                {{ project.longDescription }}
              </p>

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-amber-200 focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
              >
                Visit live site
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  class="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 11 11 5M6 5h5v5" />
                </svg>
              </a>
              <p v-else class="mt-6 text-xs text-white/40">
                No public link for this one yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: scale(0.96) translateY(8px);
}
</style>
