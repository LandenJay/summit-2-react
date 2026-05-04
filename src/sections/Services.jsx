import { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  ["💻", "Web Design", "Premium mobile-first websites built to look professional."],
  ["📍", "Local SEO", "Help customers find your business online."],
  ["📈", "Lead Funnels", "Landing pages and contact forms built to convert."],
  ["🎨", "Brand Identity", "Logos, colors, and visuals that build trust."],
  ["💳", "Payments", "Stripe payments for deposits and packages."],
  ["⚡", "Automation", "Auto-replies, notifications, and simple business systems."],
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headerItems = section.querySelectorAll(".services-header > *");
    const cards = section.querySelectorAll(".service-card");

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
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              delay: 0.2,
            }
          );

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-white px-6 py-28 text-[#06162B]"
    >
      <div className="absolute left-[-160px] top-20 h-[350px] w-[350px] rounded-full bg-[#168DFF]/10 blur-[90px]" />
      <div className="absolute bottom-[-160px] right-[-160px] h-[400px] w-[400px] rounded-full bg-[#168DFF]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="services-header mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-[#168DFF]">
            What We Build
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Websites + Systems Built To Grow Local Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Summit Web Co. combines design, marketing, lead generation, and
            automation so your website does more than just sit online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([icon, title, text], index) => (
            <div
              key={title}
              className="service-card group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#168DFF]/40 hover:shadow-[0_30px_90px_rgba(22,141,255,0.16)]"
            >
              <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition group-hover:text-[#168DFF]/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-[#EEF7FF] text-3xl transition group-hover:scale-110">
                {icon}
              </div>

              <h3 className="text-2xl font-black uppercase tracking-wide">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{text}</p>

              <div className="mt-8 flex items-center gap-3 font-black text-[#168DFF]">
                <span className="h-[2px] w-10 bg-[#168DFF]" />
                <span>Built to convert</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#168DFF] transition duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}