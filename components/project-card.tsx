import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ObjectScene } from "./object-scene";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card project-card--${project.theme}`}>
      <div className="project-card__visual">
        <ObjectScene theme={project.theme} compact />
        <span className="project-card__number">{Number(project.number)}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__topline">
          <span>{project.label}</span>
          <span>Bài {Number(project.number)}</span>
        </div>
        <h3>{project.shortTitle}</h3>
        <p>{project.description}</p>
        <div className="project-card__keywords">
          {project.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
        </div>
        <span className="project-card__open">Mở nội dung đầy đủ <ArrowUpRight aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
