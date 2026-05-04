import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#06162B]/85 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <div className="text-[#168DFF] text-2xl font-black leading-none">
              ▲
            </div>

            <div className="leading-none">
              <p className="text-xl font-black uppercase tracking-[0.18em] text-white">
                Summit
              </p>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#168DFF]">
                Web Co.
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-black uppercase tracking-[0.14em] text-white/80 transition hover:text-[#168DFF]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-xl bg-[#168DFF] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Let’s Talk
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-[#168DFF] md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 top-0 z-[60] h-screen w-screen overflow-hidden bg-[#06162B]/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#168DFF]"
        >
          <X size={24} />
        </button>

        <div className="flex h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl font-black uppercase tracking-[0.14em] text-white transition hover:text-[#168DFF]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 rounded-2xl bg-[#168DFF] px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-blue-500"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </>
  );
}