import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DeviceShowcase() {
  const sectionRef = useRef(null);
  const deviceRef = useRef(null);
  const laptopScreenRef = useRef(null);
  const phoneScreenRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const device = deviceRef.current;
    const laptopScreen = laptopScreenRef.current;
    const phoneScreen = phoneScreenRef.current;

    if (!section || !device || !screen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            device,
            {
              y: 90,
              opacity: 0,
              scale: 0.88,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
            }
          );

          [laptopScreen, phoneScreen].forEach((screen) => {
  if (!screen) return;

  gsap.to(screen, {
    y: "-55%",
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
  });
});

          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 250px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#06162B] px-6 py-28 text-white"
    >
      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/20 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-160px] h-[500px] w-[500px] rounded-full bg-[#168DFF]/15 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Digital Presence Preview
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Your business, presented like a premium brand.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Summit Web Co. builds websites that feel polished, modern, and easy
            to use on every screen — from desktop to mobile.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["01", "Modern UI"],
              ["02", "Mobile First"],
              ["03", "Lead Ready"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
              >
                <p className="text-sm font-black text-[#168DFF]">{num}</p>
                <h3 className="mt-2 font-black">{label}</h3>
              </div>
            ))}
          </div>
        </div>

        <div ref={deviceRef} className="opacity-0">
          {/* Desktop Laptop */}
          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_40px_140px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#020B16]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs text-white/45">
                    summitwebcompany.com
                  </span>
                </div>

                <div className="relative h-[430px] overflow-hidden">
                  <div ref={laptopScreenRef} className="absolute left-0 top-0 w-full">
                    <MockWebsite />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto h-5 w-[65%] rounded-b-[2rem] bg-white/15" />
          </div>

          {/* Mobile Phone */}
          <div className="mx-auto block max-w-[330px] lg:hidden">
            <div className="rounded-[2.6rem] border border-white/20 bg-white/10 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#020B16]">
                <div className="mx-auto mt-3 h-5 w-24 rounded-full bg-black/70" />

                <div className="relative mt-3 h-[570px] overflow-hidden">
                  <div ref={phoneScreenRef} className="absolute left-0 top-0 w-full">
                    <MockWebsite mobile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function MockWebsite({ mobile = false }) {
  return (
    <div className="bg-[#06162B] text-white">
      <div
        className={`relative overflow-hidden ${
          mobile ? "px-5 py-14" : "px-10 py-16"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,141,255,0.28),transparent_45%)]" />

        <div className="relative z-10 text-center">
          <div className="text-5xl text-[#168DFF]">▲</div>
          <h3
            className={`mt-3 font-black tracking-[0.18em] ${
              mobile ? "text-4xl" : "text-6xl"
            }`}
          >
            SUMMIT
          </h3>
          <p className="mt-2 font-black tracking-[0.35em] text-[#168DFF]">
            WEB CO.
          </p>
          <p className="mx-auto mt-5 max-w-md text-sm text-white/60">
            Websites + marketing for local businesses.
          </p>
        </div>
      </div>

      <div className={mobile ? "px-5 py-8" : "px-10 py-10"}>
        <p className="font-black uppercase tracking-[0.3em] text-[#168DFF]">
          Services
        </p>

        <div className={`mt-6 grid gap-4 ${mobile ? "grid-cols-1" : "grid-cols-3"}`}>
          {["Web Design", "SEO", "Funnels"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-[#168DFF]/25" />
              <h4 className="font-black">{item}</h4>
              <p className="mt-2 text-xs leading-5 text-white/50">
                Built to look clean, load fast, and generate leads.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={mobile ? "px-5 py-8" : "px-10 py-10"}>
        <p className="font-black uppercase tracking-[0.3em] text-[#168DFF]">
          Projects
        </p>

        <div className="mt-6 grid gap-5">
          {["HVAC Website", "Painting Business", "Landing Page"].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-gradient-to-br from-[#168DFF] to-cyan-400 p-6"
            >
              <h4 className="text-xl font-black">{item}</h4>
              <p className="mt-2 text-sm text-white/80">
                Premium layout, clear CTA, and mobile-first design.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={mobile ? "px-5 py-10" : "px-10 py-12"}>
        <div className="rounded-3xl bg-white p-7 text-[#06162B]">
          <h4 className="text-2xl font-black">Ready to grow?</h4>
          <p className="mt-3 text-sm text-slate-600">
            Start your project with Summit Web Co.
          </p>
          <button className="mt-5 rounded-xl bg-[#168DFF] px-5 py-3 font-black text-white">
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}