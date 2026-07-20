import { onMounted, watch } from "vue";
import gsap from "gsap";

export function usePageEnter(
  rootRef,
  isActiveGetter,
  selector = ".stagger-item",
) {
  function play() {
    if (!rootRef.value) return;
    const items = rootRef.value.querySelectorAll(selector);

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
    );
  }

  watch(isActiveGetter, (isActive) => {
    if (isActive) play();
  });

  onMounted(() => {
    if (isActiveGetter()) play();
  });
}
