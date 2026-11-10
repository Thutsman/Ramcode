import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Fades `.reveal` elements in as they scroll into view. Re-runs on route change. */
export function useRevealAnimation() {
  const { pathname } = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
}
