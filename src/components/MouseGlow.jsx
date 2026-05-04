import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const moveGlow = (e) => {
      gsap.to(glow, {
        x: e.clientX - 160,
        y: e.clientY - 160,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-80 w-80 rounded-full bg-[#168DFF]/15 blur-[90px] md:block"
    />
  );
}