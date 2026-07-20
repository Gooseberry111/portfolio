<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  project: { type: Object, default: null },
});
const emit = defineEmits(["close"]);

function handleKeydown(e) {
  if (e.key === "Escape") emit("close");
}

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-lg rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
        >
          <button
            class="absolute right-3 top-1 text-white/50 hover:text-white transition-colors"
            aria-label="Close"
            @click="emit('close')"
          >
            ✕
          </button>

          <div
            class="mb-4 flex h-48 w-full items-center justify-center rounded-xl bg-white/5"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="h-full w-full rounded-xl object-cover"
            />
            <span v-else class="text-sm text-white/30">No image yet</span>
          </div>

          <h2 class="text-2xl font-medium text-white">{{ project.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-white/70">
            {{ project.longDescription }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-amber-300/10 px-3 py-1 text-xs text-amber-200"
            >
              {{ tag }}
            </span>
          </div>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-block rounded-full border border-amber-300/40 px-4 py-2 text-sm text-amber-200 transition-colors hover:bg-amber-300/10"
          >
            View project →
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
