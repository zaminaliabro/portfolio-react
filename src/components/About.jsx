import { useEffect, useRef, useState } from "react";
import profile from "../assets/hero.png";

const SKILLS = [
  "Html",
  "Css",
  "Javascript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 w-[360px] h-[360px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#E8B84B" }}
      />

      <div
        ref={ref}
        className={`grid md:grid-cols-[280px_1fr] gap-14 items-start relative transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="relative w-40 md:w-full mx-auto md:mx-0">
          <div
            className="absolute inset-0 rounded-[1.5rem] -rotate-3"
            style={{ backgroundColor: "#E8B84B", opacity: 0.15 }}
          />
          <img
            src={profile}
            alt="Zamin"
            className="relative w-full aspect-square object-cover rounded-[1.5rem] border border-white/10"
          />
        </div>

        <div>
          <span className="inline-block text-xs tracking-[0.2em] uppercase mb-4 text-[#E8B84B]">
            About
          </span>
          <h2
            className="text-3xl md:text-5xl leading-[1.1] tracking-tight text-[#F5F3EE] mb-6 max-w-xl"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Design and code, treated as one craft.
          </h2>

          <div className="text-[#8B8F98] text-base md:text-lg leading-relaxed max-w-2xl space-y-4 mb-10">
            <p>
              I'm Zamin, a frontend developer based in Karachi. I spend most of
              my time in the space between design and engineering — where a good
              idea either survives contact with real constraints, or doesn't.
            </p>
            <p>
              My approach stays quiet on purpose: fewer moving parts, clearer
              hierarchy, decisions that still make sense a year later. I care as
              much about how a button feels to click as how clean the component
              behind it is.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#8B8F98] mb-4">
              Tools I reach for
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm border border-white/10 text-[#F5F3EE] transition-colors duration-200 hover:border-[#E8B84B] hover:text-[#E8B84B]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
