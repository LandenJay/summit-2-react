import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    tag: "HVAC Website",
    title: "J&L Climate Co.",
    text: "A clean service-business website with strong calls to action, lead forms, and appointment request flow.",
    gradient: "from-blue-500 to-cyan-400",
    features: ["Service pages", "Lead form", "Mobile layout"],
  },
  {
    tag: "Painting Website",
    title: "Olds West Painting",
    text: "A professional local painting website focused on trust, service clarity, and customer inquiries.",
    gradient: "from-sky-500 to-indigo-500",
    features: ["Brand polish", "Service areas", "Inquiry form"],
  },
  {
    tag: "Landing Page + Payments",
    title: "Doula Service Website",
    text: "A modern landing page with clear package messaging and Stripe checkout integration.",
    gradient: "from-[#168DFF] to-purple-500",
    features: ["Stripe checkout", "Package offer", "Clean CTA"],
  },
  {
    tag: "Agency Brand",
    title: "Summit Web Co.",
    text: "A premium website and brand system built for websites, marketing, and local business growth.",
    gradient: "from-cyan-400 to-[#168DFF]",
    features: ["Branding", "Funnels", "Automation"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headerItems = section.querySelectorAll(".projects-header > *");
    const cards = section.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            headerItems,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            }
          );

          gsap.fromTo(
            cards,
            { y: 70, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              stagger: 0.14,
              ease: "power3.out",
              delay: 0.2,
            }
          );

          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#EEF7FF] px-6 py-28 text-[#06162B]"
    >
      <div className="absolute left-[-200px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/15 blur-[110px]" />
      <div className="absolute bottom-[-160px] right-[-160px] h-[440px] w-[440px] rounded-full bg-[#168DFF]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="projects-header mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Recent Work
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Projects Built To Look Sharp And Convert
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A few examples of website, branding, and business systems built
            around clarity, trust, and lead generation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_25px_80px_rgba(6,22,43,0.10)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(22,141,255,0.18)]"
            >
              <div className="relative overflow-hidden bg-[#06162B] p-6">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div
                  className={`relative min-h-[260px] rounded-2xl bg-gradient-to-br ${project.gradient} p-8 text-white`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%)]" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-4xl text-white drop-shadow-lg">
                        ▲
                      </span>
                      <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-widest backdrop-blur">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-md text-white/85">
                      {project.text}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-xl bg-white/15 px-4 py-3 text-center text-xs font-black uppercase tracking-wide backdrop-blur"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-black uppercase tracking-[0.25em] text-[#168DFF]">
                      {project.tag}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href="#contact"
                    className="w-fit rounded-xl bg-[#06162B] px-5 py-3 text-sm font-black text-white transition hover:bg-[#168DFF]"
                  >
                    Build Similar →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#06162B] p-8 text-center text-white shadow-[0_30px_90px_rgba(6,22,43,0.18)] md:p-12">
          <p className="font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Your Business Could Be Next
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black md:text-5xl">
            Let’s build a website that makes your business look impossible to ignore.
          </h3>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-xl bg-[#168DFF] px-8 py-4 font-black text-white shadow-[0_20px_60px_rgba(22,141,255,0.35)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}