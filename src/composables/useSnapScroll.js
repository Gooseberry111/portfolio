import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export function useSnapScroll(pageCount) {
  const container = ref(null);
  const activeIndex = ref(0);
  let isLocked = false;
  let unlockTimeout = null;

  function lock(duration) {
    isLocked = true;
    clearTimeout(unlockTimeout);
    unlockTimeout = setTimeout(() => {
      isLocked = false;
    }, duration);
  }

  function goToIndex(index) {
    if (!container.value) return;
    const clamped = Math.min(Math.max(index, 0), pageCount.value - 1);
    if (clamped === activeIndex.value) return;

    activeIndex.value = clamped;
    lock(1300); // 1000ms tween + 300ms buffer to swallow trailing wheel events

    gsap.to(container.value, {
      x: `-${clamped * 100}vw`,
      duration: 1,
      ease: "power3.inOut",
    });
  }

  function handleWheel(e) {
    e.preventDefault();
    if (isLocked) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 30) {
      goToIndex(activeIndex.value + 1);
    } else if (delta < -30) {
      goToIndex(activeIndex.value - 1);
    }
  }

  function handleKeydown(e) {
    if (isLocked) return;
    if (e.key === "ArrowRight" || e.key === "PageDown")
      goToIndex(activeIndex.value + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp")
      goToIndex(activeIndex.value - 1);
  }

  onMounted(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("keydown", handleKeydown);
    clearTimeout(unlockTimeout);
  });

  return { container, activeIndex, goToIndex };
}
