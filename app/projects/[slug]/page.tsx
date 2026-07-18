import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { AssignmentContent } from "@/components/assignment-content";
import { ProjectIcon } from "@/components/british-scenes";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/assets";
import { getProject, projects, type Project } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function ProjectHero({ project }: { project: Project }) {
  return (
    <section className={`project-hero project-theme--${project.theme}`}>
      <div className="project-hero__shell">
        <div className="project-hero__copy">
          <Link href="/#bai-tap" className="back-link"><ArrowLeft /> Quay lại danh sách bài tập</Link>
          <p className="project-hero__kicker">Bài {Number(project.number).toString().padStart(2, "0")} · {project.label}</p>
          <h1>{project.title}</h1>
          <p className="project-hero__description">{project.description}</p>
          <dl className="project-hero__meta">
            <div><dt>Nội dung</dt><dd>{project.subject}</dd></div>
            <div><dt>Tài liệu gốc</dt><dd>{project.pages} trang PDF</dd></div>
          </dl>
          <a className="button button--primary" href={asset(project.pdf)} target="_blank" rel="noreferrer">Mở PDF gốc <Download /></a>
        </div>
        <div className="project-hero__symbol-card">
          <span className="project-hero__symbol-number">{Number(project.number).toString().padStart(2, "0")}</span>
          <ProjectIcon theme={project.theme} className="project-symbol--hero" />
          <p>{project.shortTitle}</p>
        </div>
      </div>
    </section>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className={`project-page project-page--${project.theme}`}>
      <SiteHeader />
      <ProjectHero project={project} />
      <AssignmentContent theme={project.theme} />
      <section className="next-project section-shell">
        <p className="eyebrow">Tiếp tục hành trình</p>
        <Link href={`/projects/${nextProject.slug}`}>
          <span>Bài {Number(nextProject.number)}</span>
          <strong>{nextProject.title}</strong>
          <ArrowRight aria-hidden="true" />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
