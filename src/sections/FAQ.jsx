import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const faqs = [
  {
    question: "How long does a website usually take?",
    answer:
      "Most simple business websites can be built in 1–3 weeks depending on the size, content, revisions, and features needed.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. If your current website looks outdated, loads slowly, or does not bring in leads, we can redesign it with a cleaner and more modern approach.",
  },
  {
    question: "Can you help with local SEO?",
    answer:
      "Yes. We can help structure your website with better headings, service sections, keywords, metadata, and local search foundations.",
  },
  {
    question: "Do you build websites for specific industries?",
    answer:
      "Summit Web Co. focuses heavily on local service businesses like HVAC, painting, roofing, landscaping, cleaning, contractors, coaches, and similar businesses.",
  },
  {
    question: "Can you add contact forms and lead systems?",
    answer:
      "Yes. We can add contact forms, quote request forms, auto-replies, email notifications, and simple lead systems to help you respond faster.",
  },
  {
    question: "Do you offer marketing services too?",
    answer:
      "Yes. Along with websites, Summit Web Co. can help with branding, social graphics, landing pages, lead funnels, and growth-focused marketing systems.",
  },
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".faq-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            items,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
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
      id="faq"
      className="relative overflow-hidden bg-[#EEF7FF] px-6 py-28 text-[#06162B]"
    >
      <div className="absolute left-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/10 blur-[110px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="faq-animate font-black uppercase tracking-[0.35em] text-[#168DFF]">
            FAQ
          </p>

          <h2 className="faq-animate mt-5 text-4xl font-black leading-tight md:text-6xl">
            Questions business owners usually ask.
          </h2>

          <p className="faq-animate mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Here are a few common questions about websites, marketing, lead
            systems, and working with Summit Web Co.
          </p>

          <a
            href="#contact"
            className="faq-animate mt-8 inline-block rounded-xl bg-[#168DFF] px-7 py-4 font-black text-white shadow-[0_20px_60px_rgba(22,141,255,0.28)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Ask A Question →
          </a>
        </div>

        <div className="faq-animate space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_20px_70px_rgba(6,22,43,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                >
                  <span className="text-lg font-black md:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EEF7FF] text-2xl font-black text-[#168DFF] transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}