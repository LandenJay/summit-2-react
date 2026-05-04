import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "The website made the business look much more professional and gave customers a clear way to reach out.",
    name: "Local Service Business",
    role: "Website Build",
  },
  {
    quote:
      "Clean design, strong communication, and a smooth process from start to finish.",
    name: "Small Business Owner",
    role: "Brand + Website",
  },
  {
    quote:
      "The form setup and online flow made everything feel more organized and trustworthy.",
    name: "Service Provider",
    role: "Lead System",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".testimonial-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            items,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
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
      className="relative overflow-hidden bg-[#EEF7FF] px-6 py-28 text-[#06162B]"
    >
      <div className="absolute left-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/10 blur-[110px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="testimonial-animate font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Trust Built Online
          </p>

          <h2 className="testimonial-animate mt-5 text-4xl font-black leading-tight md:text-6xl">
            Built Around Clarity, Trust, And Growth
          </h2>

          <p className="testimonial-animate mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every Summit project is designed to make businesses look stronger,
            communicate clearer, and turn more visitors into leads.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="testimonial-animate rounded-[2rem] border border-white bg-white p-8 shadow-[0_25px_80px_rgba(6,22,43,0.08)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(22,141,255,0.16)]"
            >
              <div className="mb-8 text-5xl text-[#168DFF]">“</div>

              <p className="text-lg font-bold leading-8 text-slate-700">
                {item.quote}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#06162B] text-xl font-black text-[#168DFF]">
                  ▲
                </div>

                <div>
                  <h3 className="font-black">{item.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#168DFF]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonial-animate mt-16 grid gap-6 rounded-[2rem] bg-[#06162B] p-8 text-white md:grid-cols-3 md:p-10">
          {[
            ["Mobile First", "Designed for the way customers browse today."],
            ["Lead Focused", "Built to make contacting you simple."],
            ["Growth Ready", "Structured for future marketing upgrades."],
          ].map(([title, text]) => (
            <div key={title} className="text-center">
              <h3 className="text-2xl font-black text-[#168DFF]">{title}</h3>
              <p className="mt-3 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}