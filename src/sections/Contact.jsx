import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".contact-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            items,
            { y: 50, opacity: 0 },
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
      id="contact"
      className="relative overflow-hidden bg-[#06162B] px-6 py-28 text-white"
    >
      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/20 blur-[120px]" />
      <div className="absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#168DFF]/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="contact-animate font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Start Your Project
          </p>

          <h2 className="contact-animate mt-5 text-4xl font-black leading-tight md:text-6xl">
            Ready to make your business look impossible to ignore?
          </h2>

          <p className="contact-animate mt-6 max-w-xl text-lg leading-8 text-white/70">
            Tell us what you need built, improved, or marketed. We’ll review
            your message and help point your business in the right direction.
          </p>

          <div className="contact-animate mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["⚡", "Fast Response"],
              ["💬", "Clear Communication"],
              ["🎯", "Growth Focused"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur-xl"
              >
                <div className="text-3xl">{icon}</div>
                <p className="mt-3 font-black">{text}</p>
              </div>
            ))}
          </div>

          <div className="contact-animate mt-10 rounded-[2rem] border border-[#168DFF]/25 bg-[#168DFF]/10 p-6">
            <h3 className="text-xl font-black text-[#168DFF]">
              Free Website Audit
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Not sure what your site needs? Send your business info and we can
              review your online presence for quick-win improvements.
            </p>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          className="contact-animate rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#168DFF]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#168DFF]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
                Business
              </label>
              <input
                name="business"
                type="text"
                placeholder="Business name"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#168DFF]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
                Service
              </label>
              <select
                name="service"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-[#168DFF]"
              >
                <option className="text-[#06162B]" value="">
                  What do you need?
                </option>
                <option className="text-[#06162B]">Website Design</option>
                <option className="text-[#06162B]">Landing Page</option>
                <option className="text-[#06162B]">Local SEO</option>
                <option className="text-[#06162B]">Branding</option>
                <option className="text-[#06162B]">Lead Funnel</option>
                <option className="text-[#06162B]">Custom Project</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell us about your business and what you need help with..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#168DFF]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-[#168DFF] px-8 py-4 font-black text-white shadow-[0_20px_70px_rgba(22,141,255,0.35)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Send Message →
          </button>

          <p className="mt-5 text-center text-sm text-white/50">
            We’ll never spam you. Just clear communication about your project.
          </p>
        </form>
      </div>
    </section>
  );
}