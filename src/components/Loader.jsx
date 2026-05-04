import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete,
    });

    tl.from(".loader-mark", {
      y: 40,
      opacity: 0,
      scale: 0.7,
      duration: 0.8,
    })
      .from(
        ".loader-text span",
        {
          y: 80,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
        },
        "-=0.35"
      )
      .from(
        ".loader-line",
        {
          scaleX: 0,
          duration: 0.8,
        },
        "-=0.25"
      )
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        delay: 0.5,
        ease: "power4.inOut",
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#06162B] text-white"
    >
      <div className="absolute h-[420px] w-[420px] rounded-full bg-[#168DFF]/25 blur-[110px]" />

      <div className="relative text-center">
        <div className="loader-mark text-7xl leading-none text-[#168DFF] drop-shadow-[0_0_35px_rgba(22,141,255,0.9)]">
          ▲
        </div>

        <h1 className="loader-text mt-5 overflow-hidden text-5xl font-black tracking-[0.15em] md:text-7xl">
          {"SUMMIT".split("").map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>

        <p className="mt-3 text-sm font-black uppercase tracking-[0.55em] text-[#168DFF]">
          Web Co.
        </p>

        <div className="loader-line mx-auto mt-8 h-[3px] w-40 origin-left bg-[#168DFF]" />

        <p className="mt-6 text-xs font-black uppercase tracking-[0.35em] text-white/45">
          Climb Higher
        </p>
      </div>
    </div>
  );
}