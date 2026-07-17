import Link from "next/link";
import { ArrowDownRight, BookOpen, BrainCircuit, Brush, CheckCircle2, Gamepad2, GraduationCap, Sparkles } from "lucide-react";
import { LondonMarks, UnionJack } from "@/components/brand-marks";
import { ProjectCard } from "@/components/project-card";
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

      <section className="hero min-h-[100dvh]" aria-labelledby="hero-title">
        <div className="hero__flag-field" aria-hidden="true"><UnionJack /></div>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__kicker">QH2025 · ENGLISH LANGUAGE · ULIS–VNU</p>
            <h1 id="hero-title">
              <span>Lôi Phùng</span>
              <strong>Thuỳ Dung</strong>
            </h1>
            <p className="hero__lead">Một hành trình học tập số được kể bằng tư duy ngôn ngữ, dữ liệu thật và sáu sản phẩm học thuật.</p>
            <div className="hero__actions">
              <Link href="#bai-tap" className="button button--primary">Khám phá 6 bài tập <ArrowDownRight /></Link>
              <Link href="#gioi-thieu" className="button button--ghost">Giới thiệu bản thân</Link>
            </div>
            <div className="hero__meta" aria-label="Thông tin sinh viên">
              <span><b>25040558</b><small>Mã sinh viên</small></span>
              <span><b>06</b><small>Bài tập</small></span>
              <span><b>QH2025</b><small>Khoá học</small></span>
            </div>
          </div>

          <div className="hero__portrait-wrap">
            <div className="hero__portrait-frame">
              <img src={asset("/profile/loi-phung-thuy-dung.webp")} alt="Ảnh chân dung của sinh viên Lôi Phùng Thuỳ Dung" />
              <span className="hero__portrait-tag">English Language Student</span>
            </div>
            <div className="hero__landmark-line" aria-hidden="true">
              <LondonMarks />
            </div>
          </div>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <span>READ</span><i>•</i><span>CREATE</span><i>•</i><span>RESEARCH</span><i>•</i><span>THINK RESPONSIBLY</span><i>•</i><span>LEARN ENGLISH</span>
        </div>
      </section>

      <section id="gioi-thieu" className="about-section section-shell">
        <Reveal className="about-section__heading">
          <p className="eyebrow">A personal introduction</p>
          <h2>Giới thiệu</h2>
        </Reveal>
        <div className="about-section__grid">
          <Reveal className="about-section__letter">
            {intro.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <span className="signature">Lôi Phùng Thuỳ Dung</span>
          </Reveal>
          <Reveal className="interest-board" delay={80}>
            <div className="interest-board__top"><span>Things that shape my thinking</span><UnionJack /></div>
            <article><BookOpen /><div><h3>Đọc sách</h3><p>Mở rộng kiến thức và góc nhìn.</p></div></article>
            <article><Brush /><div><h3>Vẽ tranh</h3><p>Nuôi dưỡng tư duy hình ảnh và sáng tạo.</p></div></article>
            <article><Gamepad2 /><div><h3>Game chiến thuật</h3><p>Rèn logic, tập trung và giải quyết vấn đề.</p></div></article>
            <article><BrainCircuit /><div><h3>Công nghệ số & AI</h3><p>Khám phá công cụ mới và ứng dụng có trách nhiệm.</p></div></article>
          </Reveal>
        </div>
      </section>

      <section id="bai-tap" className="projects-section section-shell">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Six assignments · one learning route</p>
            <h2>Hồ sơ bài tập</h2>
          </div>
          <p>Mỗi bài có một ngôn ngữ thị giác riêng, nhưng toàn bộ ảnh minh chứng và trang tài liệu đều được lấy trực tiếp từ bài nộp gốc.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 45, 180)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="hanh-trinh" className="journey-section">
        <div className="section-shell journey-section__inner">
          <Reveal className="journey-section__title">
            <p className="eyebrow">From foundations to responsibility</p>
            <h2>Hành trình học tập</h2>
          </Reveal>
          <div className="journey-line" aria-label="Sáu chặng học tập">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="journey-stop">
                <span>{project.number}</span>
                <strong>{project.shortTitle}</strong>
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
