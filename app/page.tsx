import Link from "next/link";
import { ArrowDownRight, BookOpen, BrainCircuit, Brush, Gamepad2 } from "lucide-react";
import { AboutPortraitScene, HeroBritishScene, SummaryIcon } from "@/components/british-scenes";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
            <p className="hero__kicker">Portfolio · Ngôn ngữ Anh · ULIS–VNU</p>
            <h1 id="hero-title"><span>Lôi Phùng</span><strong>Thuỳ Dung</strong></h1>
            <p className="hero__lead">Portfolio tổng hợp 6 bài tập của học phần “Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo”, trình bày theo đúng nội dung và minh chứng trong các tệp bài nộp.</p>
            <div className="hero__actions">
              <Link href="#bai-tap" className="button button--primary">Khám phá bài tập <ArrowDownRight /></Link>
              <Link href="#gioi-thieu" className="button button--ghost">Giới thiệu bản thân</Link>
            </div>
            <dl className="hero__meta">
              <div><dt>6</dt><dd>Bài tập hoàn thành</dd></div>
              <div><dt>QH2025</dt><dd>Khoá học</dd></div>
              <div><dt>ULIS</dt><dd>Ngôn ngữ Anh</dd></div>
            </dl>
          </div>
          <HeroBritishScene />
        </div>
      </section>

      <section id="bai-tap" className="projects-section">
        <div className="section-shell">
          <Reveal className="section-heading section-heading--centered">
            <div><p className="eyebrow">6 assignments · 6 steps</p><h2>Hồ sơ bài tập</h2></div>
            <p>Mỗi bài được dựng lại bằng HTML theo đúng thứ tự nội dung; ảnh chụp chỉ được đặt tại phần minh chứng tương ứng.</p>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={Math.min(index * 45, 180)}><ProjectCard project={project} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="hanh-trinh" className="summary-section">
        <div className="section-shell">
          <Reveal className="section-heading section-heading--centered">
            <div><p className="eyebrow">Learning summary</p><h2>Tổng kết hành trình</h2></div>
          </Reveal>
          <div className="summary-notebooks">
            <Reveal className="summary-notebook">
              <SummaryIcon type="journey" />
              <span>01</span>
              <h3>Hành trình học tập</h3>
              <p>Từ thao tác tệp tin cơ bản đến nghiên cứu, hợp tác trực tuyến, sáng tạo nội dung và sử dụng AI có trách nhiệm.</p>
            </Reveal>
            <Reveal className="summary-notebook" delay={70}>
              <SummaryIcon type="skills" />
              <span>02</span>
              <h3>Kỹ năng đạt được</h3>
              <p>Tìm kiếm và đánh giá nguồn học thuật, viết prompt có cấu trúc, làm việc nhóm và trình bày sản phẩm số.</p>
            </Reveal>
            <Reveal className="summary-notebook" delay={140}>
              <SummaryIcon type="future" />
              <span>03</span>
              <h3>Định hướng tương lai</h3>
              <p>Tiếp tục ứng dụng công nghệ số và AI theo hướng minh bạch, chủ động, kiểm chứng và phù hợp với việc học ngoại ngữ.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="gioi-thieu" className="about-section section-shell">
        <Reveal className="section-heading section-heading--rule">
          <div><p className="eyebrow">About me</p><h2>Giới thiệu</h2></div>
          <p>Phần giới thiệu được giữ nguyên theo nội dung Lôi Phùng Thuỳ Dung cung cấp.</p>
        </Reveal>
        <div className="about-section__grid">
          <Reveal><AboutPortraitScene /></Reveal>
          <Reveal className="about-letter" delay={80}>
            <span className="about-letter__pin" aria-hidden="true" />
            {intro.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="interest-board">
              <article><BookOpen /><div><h3>Đọc sách</h3><p>Mở rộng kiến thức và góc nhìn.</p></div></article>
              <article><Brush /><div><h3>Vẽ tranh</h3><p>Nuôi dưỡng tư duy hình ảnh và sáng tạo.</p></div></article>
              <article><Gamepad2 /><div><h3>Game chiến thuật</h3><p>Rèn logic, tập trung và kỹ năng giải quyết vấn đề.</p></div></article>
              <article><BrainCircuit /><div><h3>Công nghệ số & AI</h3><p>Khám phá công cụ mới và ứng dụng có trách nhiệm.</p></div></article>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
