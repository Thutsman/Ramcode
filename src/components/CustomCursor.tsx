import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    document.body.classList.add("cursor-none");
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX - 18) * 0.14;
      ringY += (mouseY - ringY - 18) * 0.14;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[1000] hidden h-2.5 w-2.5 rounded-full bg-primary mix-blend-screen md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-9 w-9 rounded-full border border-primary/50 md:block"
      />
    </>
  );
}
