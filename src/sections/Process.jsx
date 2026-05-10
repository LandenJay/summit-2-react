import { useEffect, useRef } from "react";
import gsap from "gsap";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your business, goals, customers, services, and what your website needs to accomplish.",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a clean, modern direction that builds trust and clearly communicates your offer.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop the website, forms, lead systems, automations, and mobile experience.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We connect the domain, test everything, optimize the basics, and help you go live professionally.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".process-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            items,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.1,
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
      id="process"
      className="relative overflow-hidden bg-[#06162B] px-6 py-28 text-white"
    >
      <div className="absolute left-[-180px] top-[-160px] h-[440px] w-[440px] rounded-full bg-[#168DFF]/20 blur-[120px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[440px] w-[440px] rounded-full bg-[#168DFF]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="process-animate mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Our Process
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Simple, clear, and built around results.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            No confusing tech talk. Just a clean process from idea to launch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-animate group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#168DFF]/45 hover:bg-white/[0.09]"
            >
              <div className="absolute right-6 top-6 text-6xl font-black text-white/5 transition group-hover:text-[#168DFF]/10">
                {step.number}
              </div>

              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#168DFF] text-xl font-black shadow-[0_20px_60px_rgba(22,141,255,0.35)]">
                {step.number}
              </div>

              <h3 className="mt-8 text-2xl font-black uppercase tracking-wide">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-white/65">{step.text}</p>

              <div className="mt-8 h-1 w-16 rounded-full bg-[#168DFF]" />
            </div>
          ))}
        </div>

        <div className="process-animate mt-14 rounded-[2rem] border border-[#168DFF]/25 bg-[#168DFF]/10 p-8 text-center">
          <h3 className="text-2xl font-black md:text-4xl">
            From first conversation to launch, we keep the path clear.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
            Every project is built around clarity, communication, and creating a
            website that helps your business look professional online.
          </p>
        </div>
      </div>
    </section>
  );
}