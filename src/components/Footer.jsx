export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020B16] px-6 py-16 text-white">
      <div className="absolute left-[-140px] top-[-140px] h-[320px] w-[320px] rounded-full bg-[#168DFF]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="text-4xl text-[#168DFF]">▲</span>
              <div className="leading-none">
                <h2 className="text-3xl font-black tracking-[0.22em]">
                  SUMMIT
                </h2>
                <p className="mt-1 text-sm font-black tracking-[0.45em] text-[#168DFF]">
                  WEB CO.
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md leading-7 text-white/60">
              Premium websites, marketing systems, and brand experiences for
              local businesses ready to climb higher online.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-xl bg-[#168DFF] px-6 py-4 font-black text-white shadow-[0_20px_60px_rgba(22,141,255,0.3)] transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Start Your Project →
            </a>
          </div>

          <div>
            <h3 className="font-black uppercase tracking-[0.25em] text-[#168DFF]">
              Navigate
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#home" className="text-white/65 transition hover:text-white">
                Home
              </a>
              <a href="#services" className="text-white/65 transition hover:text-white">
                Services
              </a>
              <a href="#projects" className="text-white/65 transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="text-white/65 transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black uppercase tracking-[0.25em] text-[#168DFF]">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-white/65">
              <a
                href="mailto:hello@summitwebcompany.com"
                className="transition hover:text-white"
              >
                hello@summitwebcompany.com
              </a>

              <a
                href="https://summitwebcompany.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                summitwebcompany.com
              </a>

              <p>Websites + marketing for local businesses.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Summit Web Co. All rights reserved.</p>
          <p>Built to help local businesses climb higher.</p>
        </div>
      </div>
    </footer>
  );
}