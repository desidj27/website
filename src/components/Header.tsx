import { profile } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-sky-200/80 bg-sky-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-sky-950 transition-colors hover:text-sky-600"
        >
          {profile.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-slate-600 transition-colors hover:bg-sky-100 hover:text-sky-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
