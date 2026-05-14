import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";


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
        );

      gsap.to(".hero-mark", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-orb", {
        scale: 1.15,
        opacity: 0.8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef }
  );

  const title = "SUMMIT";

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative grid min-h-screen place-items-center overflow-hidden px-6 pt-28 text-center text-white"
    >
      {/* Mountain Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06162B]/70" />

      {/* Blue Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,141,255,0.22),transparent_42%)]" />

      {/* Floating Glow */}
      <div className="glow-orb absolute h-[520px] w-[520px] rounded-full bg-[#168DFF]/20 blur-[110px]" />

      {/* Decorative Rings */}
      <div className="absolute left-[-120px] top-[18%] h-[300px] w-[300px] rounded-full border border-[#168DFF]/20" />
      <div className="absolute bottom-[16%] right-[-140px] h-[360px] w-[360px] rounded-full border border-white/10" />

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

        <p className="hero-copy mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          Premium websites, lead systems, and growth-focused digital experiences
          built for service businesses ready to win more customers.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <MagneticButton href="#contact">
              Start Your Project →
          </MagneticButton>

          <MagneticButton href="#projects" variant="secondary">
             View Work
         </MagneticButton>
        </div>
      </div>

      {/* White Wave Divider */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-white [clip-path:ellipse(70%_45%_at_50%_100%)]" />
    </section>
  );
}