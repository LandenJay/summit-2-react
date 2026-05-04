import { useEffect, useRef } from "react";
import gsap from "gsap";

const plans = [
  {
    name: "Starter Site",
    price: "$500+",
    description: "Perfect for simple businesses that need a clean online presence.",
    features: [
      "1-page website",
      "Mobile-friendly design",
      "Basic contact form",
      "Service sections",
      "Launch support",
    ],
    featured: false,
  },
  {
    name: "Growth Site",
    price: "$1,000+",
    description: "Best for businesses that want a stronger website built for leads.",
    features: [
      "Multi-section website",
      "Lead capture form",
      "Basic local SEO setup",
      "Google profile guidance",
      "Backend/email setup",
    ],
    featured: true,
  },
  {
    name: "Marketing Partner",
    price: "Quote",
    description: "For businesses that want ongoing web, content, and growth support.",
    features: [
      "Website + marketing support",
      "Landing pages",
      "Social graphics",
      "SEO improvements",
      "Lead funnel strategy",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".pricing-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            items,
            { y: 55, opacity: 0 },
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
      id="pricing"
      className="relative overflow-hidden bg-white px-6 py-28 text-[#06162B]"
    >
      <div className="absolute left-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/10 blur-[110px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="pricing-animate font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Simple Pricing
          </p>

          <h2 className="pricing-animate mt-5 text-4xl font-black leading-tight md:text-6xl">
            Website Packages Built For Growth
          </h2>

          <p className="pricing-animate mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Start simple, grow stronger. Every package is built around clarity,
            trust, and turning visitors into real business opportunities.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-animate relative overflow-hidden rounded-[2rem] border p-8 shadow-[0_25px_80px_rgba(6,22,43,0.08)] transition duration-500 hover:-translate-y-3 ${
                plan.featured
                  ? "border-[#168DFF] bg-[#06162B] text-white shadow-[0_30px_100px_rgba(22,141,255,0.22)]"
                  : "border-slate-200 bg-white text-[#06162B]"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-[#168DFF] px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}

              <p
                className={`font-black uppercase tracking-[0.25em] ${
                  plan.featured ? "text-[#168DFF]" : "text-[#168DFF]"
                }`}
              >
                {plan.name}
              </p>

              <h3 className="mt-6 text-5xl font-black">{plan.price}</h3>

              <p
                className={`mt-5 leading-7 ${
                  plan.featured ? "text-white/65" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 ${
                      plan.featured ? "text-white/75" : "text-slate-600"
                    }`}
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#168DFF] text-xs font-black text-white">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 inline-block w-full rounded-xl px-6 py-4 text-center font-black transition ${
                  plan.featured
                    ? "bg-[#168DFF] text-white shadow-[0_20px_60px_rgba(22,141,255,0.35)] hover:bg-blue-500"
                    : "border-2 border-[#168DFF] text-[#168DFF] hover:bg-[#168DFF] hover:text-white"
                }`}
              >
                {plan.featured ? "Start Growth Site →" : "Get Started"}
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-animate mt-12 rounded-[2rem] bg-[#EEF7FF] p-8 text-center">
          <p className="text-lg font-bold text-slate-700">
            Need something custom? Payments, booking systems, automations, and
            advanced funnels can be quoted based on scope.
          </p>
        </div>
      </div>
    </section>
  );
}