import { Header } from "@/components/Header";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import { ProjectCard } from "@/components/ProjectCard";
import { about, profile, projects } from "@/data/site";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-sky-200 bg-gradient-to-br from-sky-100 via-sky-50 to-white">
          <OrbitBackdrop />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-600">
                {profile.role}
              </p>
              <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] tracking-tight text-sky-950 sm:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600 sm:text-xl">
                {profile.summary}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-600"
                >
                  See projects
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-sky-300 px-5 py-2.5 text-sm text-sky-800 transition-colors hover:border-sky-500 hover:bg-sky-100 hover:text-sky-950"
                >
                  GitHub
                </a>
              </div>
            </div>
            <dl className="grid gap-6 border-t border-sky-200 pt-8 sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:pt-0">
              <Info label="School" value={profile.school} />
              <Info label="Focus" value="Software engineering" />
              <Info label="Based in" value={profile.location} />
            </dl>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-b border-sky-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-600">
              01 — About
            </p>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-600">
              <p>{about.intro}</p>
              <p>{about.more}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-b border-sky-200 bg-sky-50">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-600">
                02 — Projects
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-sky-950 sm:text-4xl">
                Things I’ve shipped
              </h2>
            </div>
            <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-600">
              03 — Contact
            </p>
            <div>
              <h2 className="font-serif text-3xl tracking-tight text-sky-950 sm:text-4xl">
                Say hello
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                I’m around on GitHub and LinkedIn. If you want to talk code,
                school, or a project idea, reach out.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sky-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-sky-600"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-sky-300 px-5 py-2.5 text-sky-800 transition-colors hover:border-sky-500 hover:bg-sky-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-sky-200 bg-sky-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">Green Bay, WI</p>
        </div>
      </footer>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-600">
        {label}
      </dt>
      <dd className="mt-1 text-sky-950">{value}</dd>
    </div>
  );
}
