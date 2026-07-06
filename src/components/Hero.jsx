import { useState, useEffect } from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // shared helper: fade + rise, staggered by delay
  const reveal = (extra = "") =>
    `transition-all duration-700 ease-out ${extra} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  const delay = (ms) => ({ transitionDelay: `${ms}ms` });

  return (
    <section
      id="top"
      className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center overflow-hidden"
    >
      {/* soft glow behind the portrait */}
      <div
        className={`pointer-events-none absolute right-0 top-0 w-[420px] h-[420px] rounded-full blur-3xl transition-opacity duration-[1400ms] ease-out ${
          mounted ? "opacity-20" : "opacity-0"
        }`}
        style={{ backgroundColor: "#E8B84B" }}
      />

      <div className="relative order-2 md:order-1">
        <span
          className={`inline-block text-xs tracking-[0.2em] uppercase mb-5 px-3 py-1 rounded-full border border-white/10 text-[#E8B84B] ${reveal()}`}
          style={delay(0)}
        >
          Available for work
        </span>

        <h1
          className={`text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#F5F3EE] mb-6 ${reveal()}`}
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            ...delay(120),
          }}
        >
          I build interfaces
          <br />
          that feel <span style={{ color: "#E8B84B" }}>inevitable</span>.
        </h1>

        <p
          className={`text-[#8B8F98] text-base md:text-lg leading-relaxed max-w-md mb-10 ${reveal()}`}
          style={delay(240)}
        >
          Zamin — a frontend developer crafting fast, considered products. Fewer
          decorations, more decisions that hold up.
        </p>

        <div
          className={`flex flex-wrap items-center gap-4 ${reveal()}`}
          style={delay(360)}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#0F1115] transition-transform duration-200 hover:scale-105"
            style={{ backgroundColor: "#E8B84B" }}
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#F5F3EE] border border-white/15 transition-colors duration-200 hover:border-white/40"
          >
            Get in touch
          </a>
        </div>

        <div
          className={`flex gap-10 mt-14 pt-8 border-t border-white/10 max-w-md ${reveal()}`}
          style={delay(480)}
        >
          <div>
            <p
              className="text-2xl text-[#F5F3EE]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              5+
            </p>
            <p className="text-xs text-[#8B8F98] mt-1">Years building</p>
          </div>
          <div>
            <p
              className="text-2xl text-[#F5F3EE]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              30+
            </p>
            <p className="text-xs text-[#8B8F98] mt-1">Projects shipped</p>
          </div>
          <div>
            <p
              className="text-2xl text-[#F5F3EE]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              12
            </p>
            <p className="text-xs text-[#8B8F98] mt-1">Happy clients</p>
          </div>
        </div>
      </div>

      <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
        <div
          className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-[900ms] ease-out ${
            mounted
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-95 rotate-3"
          }`}
          style={delay(150)}
        >
          <div
            className="absolute inset-0 rounded-[2rem] rotate-6"
            style={{ backgroundColor: "#E8B84B", opacity: 0.15 }}
          />
          <img
            src={heroImg}
            alt="Portrait"
            className="relative w-full h-full object-cover rounded-[2rem] border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
