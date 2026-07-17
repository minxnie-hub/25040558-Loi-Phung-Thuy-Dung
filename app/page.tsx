import Link from "next/link";
import { ArrowDownRight, BookOpen, BrainCircuit, Brush, CheckCircle2, Gamepad2, GraduationCap, Sparkles } from "lucide-react";
import { UnionJack } from "@/components/brand-marks";
import { GraphicPhoto, PaperSticker } from "@/components/graphic-photo";
import { ProjectCard } from "@/components/project-card";
import { HomeBritishBoard } from "@/components/theme-artboard";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/assets";
import { projects } from "@/lib/projects";

const intro = `Kính chào thầy/cô,
Em tên là Lôi Phùng Thuỳ Dung, sinh viên khoá QH2025 ngành Ngôn Ngữ Anh - Trường Đại học Ngoại ngữ, ĐHQGHN. Là một người luôn có tinh thần học hỏi, trách nhiệm và mong muốn không ngừng hoàn thiện bản thân, em luôn tận dụng thời gian rảnh để khám phá thế giới đầy màu sắc này thông qua những hoạt động bổ ích như: đọc sách, vẽ tranh, chơi game chiến thuật,...Những sở thích mang tính trí tuệ này không chỉ giúp em mở rộng kiến thức mà còn phát triển tư duy logic, khả năng sáng tạo, nâng cao sự tập trung và kỹ năng giải quyết vấn đề. Bên cạnh đó, em cũng quan tâm đến những xu hướng nổi bật của công nghệ số và ứng dụng trí tuệ nhân tạo (AI), bởi chúng giúp tự động hóa công việc, tối ưu hóa chuỗi cung ứng và cá nhân hóa trải nghiệm người dùng.`;

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__shell">
          <div className="hero__copy">
            <div className="hero__edition"><UnionJack /><span>British academic portfolio · QH2025</span></div>
            <p className="hero__kicker">ENGLISH LANGUAGE · ULIS–VNU · 25040558</p>
            <h1 id="hero-title"><span>Lôi Phùng</span><strong>Thuỳ Dung</strong></h1>
            <p className="hero__lead">Một hành trình học tập số được kể bằng tư duy ngôn ngữ, ảnh minh chứng thật và sáu chương thiết kế khác biệt.</p>
            <div className="hero__actions">
              <Link href="#bai-tap" className="button button--primary">Khám phá 6 bài tập <ArrowDownRight /></Link>
              <Link href="#gioi-thieu" className="button button--ghost">Giới thiệu bản thân</Link>
            </div>
            <div className="hero__meta">
              <span><b>6</b><small>Bài tập</small></span>
              <span><b>QH2025</b><small>Khoá học</small></span>
              <span><b>ULIS</b><small>Ngôn ngữ Anh</small></span>
            </div>
          </div>

          <div className="hero-collage">
            <div className="hero-collage__board">
              <HomeBritishBoard />
            </div>
            <figure className="hero-collage__portrait">
              <span className="hero-collage__portrait-tape" aria-hidden="true" />
              <img src={asset("/profile/loi-phung-thuy-dung.webp")} alt="Ảnh chân dung của sinh viên Lôi Phùng Thuỳ Dung" />
              <figcaption>English Language Student · ULIS</figcaption>
            </figure>
            <PaperSticker className="hero-collage__quote">Read widely.<br />Think clearly.<br />Create responsibly.</PaperSticker>
            <span className="hero-collage__flag"><UnionJack /></span>
          </div>
        </div>
        <div className="hero__ticker">
          <span>READ</span><i>•</i><span>CREATE</span><i>•</i><span>RESEARCH</span><i>•</i><span>THINK RESPONSIBLY</span><i>•</i><span>LEARN ENGLISH</span>
        </div>
      </section>

      <section id="gioi-thieu" className="about-section section-shell">
        <Reveal className="section-heading section-heading--rule">
          <div><p className="eyebrow">A personal introduction</p><h2>Giới thiệu</h2></div>
          <p>Không gian cá nhân được xây từ ba lớp: học thuật, sáng tạo và tinh thần trách nhiệm.</p>
        </Reveal>
        <div className="about-section__grid">
          <Reveal className="about-letter">
            <span className="about-letter__pin" aria-hidden="true" />
            {intro.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <span className="signature">Lôi Phùng Thuỳ Dung</span>
          </Reveal>
          <Reveal className="about-visual" delay={80}>
            <GraphicPhoto
              className="about-visual__photo"
              src="/graphics/panel-task5.webp"
              alt="Graphic trang trí phong cách creative studio"
              label="BRITISH VISUAL CULTURE"
            />
            <div className="interest-board">
              <article><BookOpen /><div><h3>Đọc sách</h3><p>Mở rộng kiến thức và góc nhìn.</p></div></article>
              <article><Brush /><div><h3>Vẽ tranh</h3><p>Nuôi dưỡng tư duy hình ảnh và sáng tạo.</p></div></article>
              <article><Gamepad2 /><div><h3>Game chiến thuật</h3><p>Rèn logic, tập trung và giải quyết vấn đề.</p></div></article>
              <article><BrainCircuit /><div><h3>Công nghệ số & AI</h3><p>Khám phá công cụ mới và ứng dụng có trách nhiệm.</p></div></article>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="bai-tap" className="projects-section">
        <div className="section-shell">
          <Reveal className="section-heading section-heading--split">
            <div><p className="eyebrow">Six assignments · six visual systems</p><h2>Hồ sơ bài tập</h2></div>
            <p>Mỗi bài có một ngôn ngữ thị giác riêng. Ảnh tài liệu vẫn là ảnh thật trong bài nộp; graphic chỉ đóng vai trò lớp trang trí.</p>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={Math.min(index * 45, 180)}><ProjectCard project={project} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="hanh-trinh" className="journey-section">
        <div className="section-shell journey-section__inner">
          <Reveal className="section-heading section-heading--dark">
            <div><p className="eyebrow">From foundations to responsibility</p><h2>Hành trình học tập</h2></div>
            <p>Sáu chặng nối từ kỹ năng số nền tảng tới năng lực nghiên cứu, sáng tạo và sử dụng AI có đạo đức.</p>
          </Reveal>
          <div className="journey-line">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="journey-stop">
                <span>{String(Number(project.number))}</span><strong>{project.shortTitle}</strong>
              </Link>
            ))}
          </div>
          <Reveal className="learning-outcomes">
            <article><GraduationCap /><h3>Nền tảng số</h3><p>Từ thao tác tệp tin đến tổ chức tài liệu học tập.</p></article>
            <article><BookOpen /><h3>Nghiên cứu</h3><p>Tìm kiếm, đánh giá và trình bày nguồn học thuật.</p></article>
            <article><Sparkles /><h3>Sáng tạo với AI</h3><p>Viết prompt, hợp tác và phát triển nội dung số.</p></article>
            <article><CheckCircle2 /><h3>Trách nhiệm</h3><p>Giữ vai trò chủ động, minh bạch và có đạo đức.</p></article>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
