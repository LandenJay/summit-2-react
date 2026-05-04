import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-mark", {
        y: -80,
        opacity: 0,
        scale: 0.65,
        rotate: -12,
        duration: 1,
      })
        .from(
          ".hero-title span",
          {
            y: 120,
            opacity: 0,
            rotateX: 75,
            stagger: 0.08,
            duration: 0.9,
          },
          "-=0.35"
        )
        .from(
          ".hero-line",
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.35"
        )
        .from(
          ".hero-copy",
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.65,
          },
          "-=0.25"
        )
        .from(
          ".hero-btn",
          {
            y: 25,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".hero-stat",
          {
            y: 25,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.2"
        );

      gsap.to(".hero-mark", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-orb", {
        scale: 1.18,
        opacity: 0.85,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".grid-bg", {
        backgroundPosition: "80px 80px",
        duration: 14,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: heroRef }
  );

  const title = "SUMMIT";

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative grid min-h-screen place-items-center overflow-hidden bg-[#06162B] px-6 pt-28 text-center text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,141,255,0.35),transparent_34%),linear-gradient(rgba(0,18,42,0.72),rgba(0,18,42,0.95))]" />

      <div className="grid-bg absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="glow-orb absolute h-[540px] w-[540px] rounded-full bg-[#168DFF]/25 blur-[110px]" />

      <div className="absolute left-[-120px] top-[18%] h-[300px] w-[300px] rounded-full border border-[#168DFF]/20 blur-[1px]" />
      <div className="absolute bottom-[16%] right-[-140px] h-[360px] w-[360px] rounded-full border border-white/10 blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="hero-mark mx-auto mb-2 text-7xl leading-none text-[#168DFF] drop-shadow-[0_0_35px_rgba(22,141,255,0.9)] md:text-9xl">
          ▲
        </div>

        <h1 className="hero-title overflow-hidden text-[4.2rem] font-black leading-[0.82] tracking-[0.08em] md:text-[9.5rem]">
          {title.split("").map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>

        <div className="mt-5 flex items-center justify-center gap-5">
          <span className="hero-line h-[3px] w-20 origin-right bg-[#168DFF] md:w-32" />
          <h2 className="hero-copy text-3xl font-black tracking-[0.45em] text-[#168DFF] md:text-5xl">
            WEB CO.
          </h2>
          <span className="hero-line h-[3px] w-20 origin-left bg-[#168DFF] md:w-32" />
        </div>

        <p className="hero-copy mx-auto mt-10 max-w-4xl text-sm font-black uppercase tracking-[0.35em] text-white/90 md:text-lg">
          Websites + Marketing For Local Businesses
        </p>

        <h3 className="hero-copy mt-3 text-4xl font-black tracking-[0.18em] text-[#168DFF] drop-shadow-[0_0_30px_rgba(22,141,255,0.8)] md:text-6xl">
          CLIMB HIGHER.
        </h3>

        <p className="hero-copy mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          Premium websites, lead systems, and growth-focused digital experiences
          built for service businesses ready to look professional and win more customers.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="hero-btn group rounded-xl bg-[#168DFF] px-8 py-4 font-black shadow-[0_20px_70px_rgba(22,141,255,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            Start Your Project
            <span className="ml-2 inline-block transition group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#projects"
            className="hero-btn rounded-xl border border-white/25 bg-white/10 px-8 py-4 font-black backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            View Work
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["Fast", "Launch-ready builds"],
            ["Modern", "Premium web design"],
            ["Growth", "Lead-focused strategy"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="hero-stat rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 backdrop-blur-xl"
            >
              <h4 className="text-xl font-black text-white">{title}</h4>
              <p className="mt-1 text-sm text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-28 w-full bg-white [clip-path:ellipse(70%_45%_at_50%_100%)]" />
    </section>
  );
}