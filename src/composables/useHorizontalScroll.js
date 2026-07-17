import { ref, onMounted, onUnmounted } from "vue";

export function useHorizontalScroll() {
  const container = ref(null);
  const targetX = ref(0);
  const currentX = ref(0);
  let rafId = null;

  function clampTarget() {
    if (!container.value) return;
    const maxScroll = container.value.scrollWidth - container.value.clientWidth;
    targetX.value = Math.min(Math.max(targetX.value, 0), maxScroll);
  }

  function handleWheel(e) {
    e.preventDefault();
    // Use whichever delta is bigger, so trackpads (which send deltaX)
    // and mouse wheels (which send deltaY) both work naturally
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    targetX.value += delta;
    clampTarget();
  }

  function animate() {
    // Ease current position toward target — this is what gives it
    // that smooth, weighted feel instead of snapping instantly
    currentX.value += (targetX.value - currentX.value) * 0.08;

    if (container.value) {
      container.value.scrollLeft = currentX.value;
    }

    rafId = requestAnimationFrame(animate);
  }

  onMounted(() => {
    if (container.value) {
      container.value.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    rafId = requestAnimationFrame(animate);
  });

  onUnmounted(() => {
    if (container.value) {
      container.value.removeEventListener("wheel", handleWheel);
    }
    if (rafId) cancelAnimationFrame(rafId);
  });

  return { container };
}
