import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

// GitHub and LinkedIn were removed from lucide-react in v1.0 (brand icons
// were dropped for trademark reasons), so they're defined here as small
// inline SVGs instead.
function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.73.81 1.17 1.83 1.17 3.09 0 4.42-2.69 5.39-5.26 5.68.42.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Email",
    value: "hello@zamin.dev",
    href: "https://mail.google.com/mail/u/0/#inbox",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/zamin",
    href: "https://github.com",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zamin",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section
      id="contact"
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-[380px] h-[380px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#E8B84B" }}
      />

      <div className="grid md:grid-cols-2 gap-16 relative">
        <div>
          <span className="inline-block text-xs tracking-[0.2em] uppercase mb-4 text-[#E8B84B]">
            Contact
          </span>
          <h2
            className="text-3xl md:text-5xl leading-[1.1] tracking-tight text-[#F5F3EE] mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Got a project in mind?
            <br />
            Let's talk it through.
          </h2>
          <p className="text-[#8B8F98] text-base leading-relaxed max-w-sm mb-10">
            I usually reply within a day. Tell me what you're building and what
            you need — no brief is too rough to start with.
          </p>

          <div className="flex flex-col gap-1">
            {SOCIALS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noreferrer" : undefined}
                className="group flex items-center justify-between py-4 border-b border-white/10 text-[#F5F3EE] transition-colors duration-200 hover:text-[#E8B84B]"
              >
                <span className="flex items-center gap-3 text-sm">
                  <Icon
                    size={16}
                    className="text-[#8B8F98] group-hover:text-[#E8B84B] transition-colors"
                  />
                  {value}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[#8B8F98] group-hover:text-[#E8B84B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs tracking-[0.15em] uppercase text-[#8B8F98] mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-white/15 py-3 text-[#F5F3EE] placeholder-[#5C6068] focus:outline-none focus:border-[#E8B84B] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs tracking-[0.15em] uppercase text-[#8B8F98] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent border-b border-white/15 py-3 text-[#F5F3EE] placeholder-[#5C6068] focus:outline-none focus:border-[#E8B84B] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs tracking-[0.15em] uppercase text-[#8B8F98] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="What are you building?"
              className="w-full bg-transparent border-b border-white/15 py-3 text-[#F5F3EE] placeholder-[#5C6068] focus:outline-none focus:border-[#E8B84B] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#0F1115] transition-transform duration-200 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 w-fit"
            style={{ backgroundColor: "#E8B84B" }}
          >
            {status === "idle" && "Send message"}
            {status === "sending" && "Sending…"}
            {status === "sent" && "Sent — thank you"}
          </button>
        </form>
      </div>
    </section>
  );
}
