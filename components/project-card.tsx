import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { asset } from "@/lib/assets";
import { NumberBadge, PaperSticker } from "./graphic-photo";

export function ProjectCard({ project }: { project: Project }) {
  const cover = asset(`/projects/task${Number(project.number)}/page-${project.coverPage}.webp`);
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card project-card--${project.theme}`}>
      <div className="project-card__visual">
        <img className="project-card__decor-photo" src={asset(project.decorImage)} alt="" aria-hidden="true" loading="lazy" />
        <span className="project-card__photo-wash" aria-hidden="true" />
        <figure className="project-card__document">
          <span className="project-card__tape" aria-hidden="true" />
          <img src={cover} alt={`Trang minh chứng thực tế của ${project.title}`} loading="lazy" />
        </figure>
        <NumberBadge value={project.number} />
        <PaperSticker className="project-card__sticker">{project.visualNote}</PaperSticker>
      </div>
      <div className="project-card__body">
        <div className="project-card__topline">
          <span>{project.label}</span>
          <span>CHAPTER {project.number}</span>
        </div>
        <h3>{project.shortTitle}</h3>
        <p>{project.description}</p>
        <div className="project-card__keywords">
          {project.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
        </div>
        <span className="project-card__open">Xem bài <ArrowUpRight aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
