import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(dot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.08,
        ease: "power1.out",
      });
    };

    const growCursor = () => {
      gsap.to(cursor, {
        scale: 1.9,
        backgroundColor: "rgba(22, 141, 255, 0.18)",
        borderColor: "rgba(22, 141, 255, 0.8)",
        duration: 0.25,
      });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(22, 141, 255, 0.08)",
        borderColor: "rgba(22, 141, 255, 0.35)",
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll(
      "a, button, input, textarea, select"
    );

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", growCursor);
      target.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", growCursor);
        target.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[99999] hidden h-10 w-10 rounded-full border border-[#168DFF]/35 bg-[#168DFF]/10 backdrop-blur-sm md:block"
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100000] hidden h-2 w-2 rounded-full bg-[#168DFF] md:block"
      />
    </>
  );
}