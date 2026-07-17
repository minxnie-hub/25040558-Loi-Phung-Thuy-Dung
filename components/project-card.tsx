import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { asset } from "@/lib/assets";

export function ProjectCard({ project }: { project: Project }) {
  const cover = asset(`/projects/task${Number(project.number)}/page-${project.coverPage}.webp`);
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card project-card--${project.theme}`}>
      <div className="project-card__topline">
        <span>{project.label}</span>
        <span>{project.number}</span>
      </div>
      <div className="project-card__media">
        <img src={cover} alt={`Trang minh chứng thực tế của ${project.title}`} loading="lazy" />
        <span className="project-card__stamp">BÀI {Number(project.number)}</span>
      </div>
      <div className="project-card__body">
        <div>
          <h3>{project.shortTitle}</h3>
          <p>{project.description}</p>
        </div>
        <ArrowUpRight aria-hidden="true" />
      </div>
      <div className="project-card__keywords">
        {project.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
      </div>
    </Link>
  );
}
