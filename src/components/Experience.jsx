import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    title: "Perfume-Store-Shop",
    tech: "React, Node.js, Express, MongoDB",
    desc: "An online store for selling perfumes with a modern UI and seamless shopping experience.",
    github: "https://github.com/zaminaliabro/Perfume-Store-Shop-frontend",
    demo: "https://perfume-store-shop-frontend-b21d-kdrkae0kn-zamin-ali1.vercel.app/",
  },
  {
    title: "E-commerce Website",
    tech: "Html CSS javascript",
    desc: "buy and sell products online with a user-friendly interface and secure payment options.",
    github: "https://github.com/zaminaliabro/E-Commerce",
    demo: "effervescent-moonbeam-3b813d.netlify.app",
  },
  {
    title: "Portfolio Website",
    tech: "React, Vite, Tailwind CSS",
    desc: "Modern responsive portfolio with smooth animations and dark premium UI.",
    github: "https://github.com/zaminaliabro/react-portfolio-real",
    demo: "https://your-demo.vercel.app",
  },
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

function Row({ item, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-14 last:pb-0 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="absolute left-[7px] top-2 bottom-0 w-px bg-white/10" />

      <span
        className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2"
        style={{ borderColor: "#E8B84B", backgroundColor: "#0F1115" }}
      />

      <p className="text-xs tracking-[0.15em] uppercase text-[#E8B84B] mb-2">
        {item.period}
      </p>
      <h3
        className="text-xl md:text-2xl text-[#F5F3EE] mb-1"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        {item.role}
      </h3>
      <p className="text-sm text-[#8B8F98] mb-3">{item.company}</p>
      <p className="text-[#C9CBD1] text-sm md:text-base leading-relaxed max-w-xl">
        {item.desc}
      </p>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="skills"
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      {/* Projects */}
      <div className="mt-24">
        <h2
          className="text-3xl md:text-5xl text-[#F5F3EE] mb-12"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-[#16181D] border border-white/10 rounded-2xl p-6 hover:border-[#E8B84B] transition duration-300"
            >
              <h3 className="text-2xl text-[#F5F3EE] mb-2">{project.title}</h3>

              <p className="text-[#E8B84B] text-sm mb-4">{project.tech}</p>

              <p className="text-[#C9CBD1] leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white/20 rounded-full hover:border-[#E8B84B] transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#E8B84B] text-black rounded-full hover:opacity-90 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
