import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", href: "Work" },
  { label: "About", href: "About" },
  { label: "Skills", href: "Skills" },
  { label: "Contact", href: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Work");
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  const moveIndicatorTo = (label) => {
    const el = itemRefs.current[label];
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicator({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      opacity: 1,
    });
  };

  useEffect(() => {
    moveIndicatorTo(hovered || active);
  }, [hovered, active]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`w-full bg-[#0F1115] font-sans transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#0F1115] font-bold text-sm tracking-tight transition-transform duration-300 group-hover:rotate-12"
              style={{ backgroundColor: "#E8B84B" }}
            >
              Z
            </span>
            <span
              className="text-[1.35rem] tracking-tight text-[#F5F3EE]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Zamin<span style={{ color: "#E8B84B" }}>.</span>
            </span>
          </a>

          <div
            ref={containerRef}
            className="relative hidden md:flex items-center gap-1"
            onMouseLeave={() => setHovered(null)}
          >
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                ref={(el) => (itemRefs.current[link.label] = el)}
                href={link.href}
                onMouseEnter={() => setHovered(link.label)}
                onClick={() => setActive(link.label)}
                className={`relative px-4 py-2 text-sm tracking-wide transition-all duration-500 ease-out ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                } ${
                  active === link.label
                    ? "text-[#F5F3EE]"
                    : "text-[#8B8F98] hover:text-[#F5F3EE]"
                }`}
                style={{ transitionDelay: `${120 + i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}

            <span
              className="absolute bottom-1 h-[2px] rounded-full transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
                backgroundColor: "#E8B84B",
              }}
            />
          </div>

          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#0F1115] transition-all duration-500 ease-out hover:scale-105 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{ backgroundColor: "#E8B84B", transitionDelay: "450ms" }}
          >
            Let's talk
          </a>

          <button
            className="md:hidden text-[#F5F3EE] p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-1 border-t border-white/10 pt-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMobileOpen(false);
              }}
              className={`py-3 text-base tracking-wide border-b border-white/5 last:border-none ${
                active === link.label ? "text-[#E8B84B]" : "text-[#C9CBD1]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex justify-center items-center px-5 py-3 rounded-full text-sm font-medium text-[#0F1115]"
            style={{ backgroundColor: "#E8B84B" }}
          >
            Let's talk
          </a>
        </div>
      </div>
    </div>
  );
}
