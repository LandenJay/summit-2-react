import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  href = "#",
  children,
  variant = "primary",
  className = "",
}) {
  const btnRef = useRef(null);

  const isPrimary = variant === "primary";

  const handleMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.22,
      y: y * 0.35,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: "elastic.out(1, 0.35)",
    });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block rounded-xl px-8 py-4 font-black transition ${
        isPrimary
          ? "bg-[#168DFF] text-white shadow-[0_20px_70px_rgba(22,141,255,0.42)] hover:bg-blue-500"
          : "border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
      } ${className}`}
    >
      {children}
    </a>
  );
}