import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

// isPaused: optional getter, e.g. while a modal is open, so wheel/keys/swipes
// stay with the overlay instead of moving the page behind it
export function useSnapScroll(pageCount, isPaused = () => false) {
  const container = ref(null);
  const activeIndex = ref(0);
  let isLocked = false;
  let unlockTimeout = null;

  let touchStartX = 0;
  let touchStartY = 0;

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
    lock(1300);

    gsap.to(container.value, {
      x: `-${clamped * 100}vw`,
      duration: 1,
      ease: "power3.inOut",
    });
  }

  function handleWheel(e) {
    if (isPaused()) return;
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
    if (isLocked || isPaused()) return;
    if (e.key === "ArrowRight" || e.key === "PageDown")
      goToIndex(activeIndex.value + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp")
      goToIndex(activeIndex.value - 1);
  }

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchEnd(e) {
    if (isLocked || isPaused()) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;

    // ignore swipes that are more vertical than horizontal —
    // those are probably accidental, not an intentional page-swipe
    if (Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (Math.abs(deltaX) < 50) return; // too small to count as a real swipe

    if (deltaX > 0) {
      goToIndex(activeIndex.value + 1);
    } else {
      goToIndex(activeIndex.value - 1);
    }
  }

  onMounted(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchend", handleTouchEnd);
    clearTimeout(unlockTimeout);
  });

  return { container, activeIndex, goToIndex };
}
