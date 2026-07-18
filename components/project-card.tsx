import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectIcon } from "./british-scenes";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card project-card--${project.theme}`}>
      <div className="project-card__topline">
        <span>{Number(project.number).toString().padStart(2, "0")}</span>
        <small>{project.label}</small>
      </div>
      <ProjectIcon theme={project.theme} />
      <h3>{project.shortTitle}</h3>
      <p>{project.description}</p>
      <span className="project-card__open">Xem bài <ArrowRight aria-hidden="true" /></span>
    </Link>
  );
}
