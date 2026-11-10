import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the hash target (e.g. /#services) after navigation, or to the top on a new route. */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer = 0;
    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      } else if (tries < 20) {
        tries += 1;
        timer = window.setTimeout(attempt, 100); // page may still be lazy-loading
      }
    };
    attempt();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
