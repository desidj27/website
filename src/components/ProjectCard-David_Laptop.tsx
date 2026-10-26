import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full min-h-[22rem] flex-col rounded-2xl border border-sky-200 bg-white p-6 shadow-sm shadow-sky-100 transition-colors hover:border-sky-400 hover:shadow-md hover:shadow-sky-100 sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-600">
          {project.eyebrow}
        </p>
        <p className="font-mono text-xs text-slate-400">{project.year}</p>
      </div>
      <h3 className="mt-3 font-serif text-2xl tracking-tight text-sky-950">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-sky-700"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-sky-600 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-800 hover:decoration-sky-600"
          >
            Open live site
          </a>
        ) : (
          <span className="invisible font-medium" aria-hidden="true">
            Open live site
          </span>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 underline decoration-sky-200 underline-offset-4 transition-colors hover:text-sky-700"
        >
          View source
        </a>
      </div>
    </article>
  );
}
