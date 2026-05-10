import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Summit Web Co.",
    short: "Summit",
    type: "Agency Website",
    url: "https://summitwebcompany.com",
    description:
      "Premium React website with animations, lead capture, SEO, and smooth scroll.",
    tags: ["React", "SEO", "Lead Capture"],
  },
  {
    title: "J&L Climate Co.",
    short: "HVAC",
    type: "HVAC Website",
    url: "https://jnlclimatecompany.com",
    description:
      "Service-business website focused on trust, calls, and appointment requests.",
    tags: ["Local Service", "Booking", "Trust"],
  },
  {
    title: "Olds West Painting",
    short: "Painting",
    type: "Painting Website",
    url: "https://oldswestpainting.com",
    description:
      "Local painting website built around clean branding and quote requests.",
    tags: ["Branding", "Quotes", "Mobile"],
  },
  {
    title: "Doula Service Site",
    short: "Doula",
    type: "Landing Page",
    url: "https://overallbirth.com",
    description:
      "Landing page with package messaging, payment flow, and contact system.",
    tags: ["Landing Page", "Payments", "CTA"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".project-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
            }
          );

          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 250px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#EEF7FF] px-6 py-24 text-[#06162B]"
    >
      <div className="absolute left-[-180px] top-[-160px] h-[440px] w-[440px] rounded-full bg-[#168DFF]/10 blur-[120px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[440px] w-[440px] rounded-full bg-[#168DFF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1700px]">
        <div className="project-animate mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Selected Work
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Preview Real Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A cleaner project showcase with live desktop previews on larger
            screens and simple project cards on mobile.
          </p>
        </div>

        {/* DESKTOP TABBED LIVE PREVIEW */}
        <div className="project-animate mt-14 hidden lg:block">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_35px_110px_rgba(6,22,43,0.14)]">
            {/* Fake Browser Top */}
            <div className="flex items-center gap-4 border-b border-slate-200 bg-[#06162B] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/55">
                <span className="text-[#168DFF]">●</span>
                <span className="truncate">{activeProject.url}</span>
              </div>

              <a
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#168DFF] px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500"
              >
                Open Site →
              </a>
            </div>

            {/* Browser Tabs */}
            <div className="flex border-b border-slate-200 bg-white px-4 pt-4">
              {projects.map((project, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={project.title}
                    onClick={() => setActiveIndex(index)}
                    className={`relative rounded-t-2xl px-6 py-4 text-left transition ${
                      active
                        ? "bg-[#EEF7FF] text-[#06162B]"
                        : "text-slate-500 hover:bg-slate-50 hover:text-[#06162B]"
                    }`}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#168DFF]">
                      {project.type}
                    </p>
                    <h3 className="mt-1 font-black">{project.short}</h3>

                    {active && (
                      <span className="absolute bottom-0 left-0 h-1 w-full bg-[#168DFF]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Preview + Details */}
            <div className="grid grid-cols-[1fr_360px]">
              <div className="h-[800px] overflow-hidden bg-white">
                <iframe
                  key={activeProject.url}
                  src={activeProject.url}
                  title={activeProject.title}
                  className="h-full w-full border-0"
                />
              </div>

              <aside className="border-l border-slate-200 bg-[#F8FBFF] p-8">
                <p className="font-black uppercase tracking-[0.3em] text-[#168DFF]">
                  Project
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  {activeProject.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {activeProject.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-widest text-[#168DFF] shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-10 inline-block w-full rounded-xl bg-[#06162B] px-6 py-4 text-center font-black text-white transition hover:bg-[#168DFF]"
                >
                  Build Something Similar →
                </a>
              </aside>
            </div>
          </div>
        </div>

        {/* MOBILE PROJECT CARDS */}
        <div className="project-animate mt-14 grid gap-6 lg:hidden">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white bg-white p-6 shadow-[0_25px_80px_rgba(6,22,43,0.08)]"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#168DFF]">
                {project.type}
              </p>

              <h3 className="mt-3 text-2xl font-black">{project.title}</h3>

              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#EEF7FF] px-3 py-2 text-xs font-black uppercase tracking-widest text-[#168DFF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#168DFF] px-6 py-4 text-center font-black text-white shadow-[0_18px_50px_rgba(22,141,255,0.28)]"
                >
                  Open Live Site →
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border-2 border-[#168DFF] px-6 py-4 text-center font-black text-[#168DFF]"
                >
                  Build Similar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}