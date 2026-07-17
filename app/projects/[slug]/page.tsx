import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2, Download, FileArchive, FolderOpen, Lightbulb, MessageSquareText, Search, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { PageGallery } from "@/components/page-gallery";
import { Reveal } from "@/components/reveal";
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
      <div className="project-hero__grid">
        <div className="project-hero__copy">
          <Link href="/#bai-tap" className="back-link"><ArrowLeft /> Quay lại 6 bài tập</Link>
          <p className="eyebrow">{project.label} · Bài {Number(project.number)}</p>
          <h1>{project.title}</h1>
          <p className="project-hero__description">{project.description}</p>
          <div className="project-hero__meta">
            <span>{project.subject}</span>
            <span>{project.pages} trang tài liệu gốc</span>
          </div>
          <a className="button button--primary" href={asset(project.pdf)} target="_blank" rel="noreferrer">Mở PDF gốc <Download /></a>
        </div>
        <div className="project-hero__document">
          <img src={asset(`/projects/task${Number(project.number)}/page-${project.coverPage}.webp`)} alt={`Ảnh thật từ ${project.title}`} />
          <span className="document-tab">ORIGINAL WORK · {project.number}</span>
        </div>
      </div>
    </section>
  );
}

function FilesStory() {
  const steps = [
    ["01–04", "Khởi tạo không gian", "Mở File Explorer, truy cập ổ đĩa, tạo và mở thư mục thực hành."],
    ["05–07", "Tổ chức dữ liệu", "Tạo tệp văn bản, đổi tên và tạo thư mục con TaiLieu."],
    ["08–09", "Sao chép & di chuyển", "Phân biệt Copy/Paste với Cut/Paste qua minh chứng thực tế."],
    ["10–12", "Xóa & khôi phục", "Xóa vào Recycle Bin, xóa vĩnh viễn và khôi phục tệp."],
  ];
  return (
    <div className="files-story project-content-shell">
      <Reveal className="project-intro-grid">
        <div><p className="eyebrow">Windows field notes</p><h2>12 thao tác, một quy trình hoàn chỉnh</h2></div>
        <p>Phần trình bày giữ nguyên ảnh chụp File Explorer trong bài. Các trang được sắp theo tuyến thao tác để người xem theo dõi từ tạo thư mục đến khôi phục dữ liệu.</p>
      </Reveal>
      <div className="file-route">
        {steps.map(([range, title, text], index) => (
          <Reveal className="file-route__stop" key={range} delay={index * 60}>
            <span>{range}</span><FolderOpen /><div><h3>{title}</h3><p>{text}</p></div>
          </Reveal>
        ))}
      </div>
      <PageGallery task={1} pages={5} variant="stack" />
    </div>
  );
}

function ResearchStory() {
  const sources = ["Google Scholar", "ERIC", "Oxford Academic", "Scopus", "Thư viện số của trường"];
  return (
    <div className="research-story project-content-shell">
      <Reveal className="research-masthead">
        <span>THE ENGLISH LANGUAGE REVIEW</span>
        <h2>Artificial Intelligence in English Language Teaching and Learning</h2>
        <p>Báo cáo tổng hợp cơ sở dữ liệu học thuật, tạp chí chuyên ngành, sách chuyên khảo và nguồn mở.</p>
      </Reveal>
      <div className="research-columns">
        <Reveal className="research-index">
          <Search /><h3>Nguồn tìm kiếm</h3>
          <ol>{sources.map((source) => <li key={source}>{source}</li>)}</ol>
        </Reveal>
        <Reveal className="research-note" delay={70}>
          <BookOpenCheck /><h3>Tiêu chí đánh giá</h3>
          <p>Tác giả, đơn vị xuất bản, loại tài liệu, năm công bố và mức độ tin cậy được tổng hợp thành bảng xếp hạng trong báo cáo.</p>
        </Reveal>
        <Reveal className="research-note" delay={120}>
          <FileArchive /><h3>Đầu ra học thuật</h3>
          <p>Danh mục tài liệu tham khảo được trình bày theo định dạng Harvard ở phần cuối.</p>
        </Reveal>
      </div>
      <PageGallery task={2} pages={5} variant="spread" />
    </div>
  );
}

function PromptsStory() {
  const levels = [
    ["BASIC", "Prompt cơ bản", "Ngắn gọn, dễ dùng nhưng chưa quy định rõ cấu trúc và đầu ra."],
    ["IMPROVED", "Prompt cải tiến", "Bổ sung cấu trúc, độ dài, phong cách và mục tiêu cụ thể."],
    ["ADVANCED", "Prompt nâng cao", "Kết hợp vai trò, hướng dẫn theo bước và ví dụ minh họa."],
  ];
  return (
    <div className="prompts-story project-content-shell">
      <Reveal className="prompt-console-title"><span>PROMPT LAB / 03</span><h2>Ba cấp độ cho ba tác vụ học tập</h2></Reveal>
      <div className="prompt-levels">
        {levels.map(([code, title, text], index) => (
          <Reveal className="prompt-level" key={code} delay={index * 70}>
            <span>{code}</span><h3>{title}</h3><p>{text}</p><div className="prompt-cursor">_</div>
          </Reveal>
        ))}
      </div>
      <Reveal className="prompt-tasks">
        <article><MessageSquareText /><strong>Tóm tắt tài liệu học thuật</strong></article>
        <article><Lightbulb /><strong>Giải thích khái niệm phức tạp</strong></article>
        <article><CheckCircle2 /><strong>Tạo bộ câu hỏi ôn tập</strong></article>
      </Reveal>
      <PageGallery task={3} pages={6} variant="grid" />
    </div>
  );
}

function CollaborationStory() {
  return (
    <div className="collab-story project-content-shell">
      <Reveal className="collab-board-head"><div><p className="eyebrow">Midterm teamwork log</p><h2>Bảng điều phối cá nhân</h2></div><span className="status-chip">Hoàn thành đúng hạn</span></Reveal>
      <div className="collab-board">
        <Reveal className="collab-column"><h3>Việc phụ trách</h3><ul><li>Mô tả cách sử dụng công cụ AI và các prompt.</li><li>Phân tích lợi ích, thách thức và định hướng.</li><li>Ghi lại cuộc họp nhóm.</li><li>Nộp sản phẩm cá nhân.</li></ul></Reveal>
        <Reveal className="collab-column" delay={70}><h3>Công cụ & minh chứng</h3><ul><li>Google Docs: soạn thảo và lịch sử chỉnh sửa.</li><li>Google Drive: lưu trữ và chia sẻ.</li><li>Google Meet: họp nhóm trực tuyến.</li></ul></Reveal>
        <Reveal className="collab-column" delay={120}><h3>Thách thức</h3><p>Thành viên thảo luận chưa nhiệt tình.</p><h3>Giải pháp</h3><p>Mạnh dạn góp ý trên tinh thần tôn trọng và lịch sự.</p></Reveal>
      </div>
      <PageGallery task={4} pages={2} variant="spread" />
    </div>
  );
}

function StudioStory() {
  const pipeline = [
    ["01", "ChatGPT", "Tạo bài blog và điều chỉnh phần mở đầu cho sinh viên Việt Nam."],
    ["02", "DALL-E", "Tạo hình minh họa sinh viên học ngoại ngữ bằng nhiều hoạt động."],
    ["03", "Canva AI", "Sắp xếp bố cục, tiêu đề và các biểu tượng học tập."],
    ["04", "Biên tập cá nhân", "Bổ sung ví dụ, rút gọn nội dung và hoàn thiện sản phẩm."],
  ];
  return (
    <div className="studio-story project-content-shell">
      <Reveal className="studio-title"><Sparkles /><div><p className="eyebrow">Creative content pipeline</p><h2>5 phương pháp học ngoại ngữ hiệu quả cho sinh viên</h2></div></Reveal>
      <div className="studio-pipeline">
        {pipeline.map(([number, title, text], index) => (
          <Reveal className="studio-step" key={number} delay={index * 55}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index < pipeline.length - 1 && <ArrowRight aria-hidden="true" />}</Reveal>
        ))}
      </div>
      <Reveal className="studio-featured-image">
        <img src={asset("/projects/task5/page-4.webp")} alt="Ảnh chụp Canva AI thực tế trong bài tập 5" />
        <div><span>ACTUAL PROCESS CAPTURE</span><p>Ảnh minh chứng từ quy trình thiết kế trong bài nộp gốc.</p></div>
      </Reveal>
      <PageGallery task={5} pages={6} variant="grid" />
    </div>
  );
}

function EthicsStory() {
  const principles = ["Trung thực trong học thuật", "Minh bạch khi sử dụng AI", "Không sao chép nguyên văn", "Chịu trách nhiệm về sản phẩm cuối cùng", "Không để AI thay thế tư duy phản biện"];
  return (
    <div className="ethics-story project-content-shell">
      <Reveal className="ethics-manifesto">
        <div><ShieldCheck /><p className="eyebrow">Responsible AI manifesto</p><h2>AI hỗ trợ, người học quyết định</h2><p>Bài tập kết nối chính sách của ĐHQGHN, một nhiệm vụ IELTS Writing và bộ nguyên tắc sử dụng AI có trách nhiệm.</p></div>
        <img src={asset("/projects/task6/page-1.webp")} alt="Infographic sử dụng AI có trách nhiệm trong học thuật từ bài nộp gốc" />
      </Reveal>
      <div className="ethics-principles">
        {principles.map((principle, index) => <Reveal className="ethics-rule" key={principle} delay={index * 40}><span>{String(index + 1).padStart(2, "0")}</span><p>{principle}</p></Reveal>)}
      </div>
      <Reveal className="ethics-case">
        <p className="eyebrow">Case study in the report</p>
        <h3>IELTS Writing Task 2</h3>
        <blockquote>“With the advancement of technology that facilitates online communication, face-to-face contact will soon become a thing of the past.”</blockquote>
        <p>AI được dùng để gợi ý dàn ý, từ vựng học thuật và chỉnh sửa ngôn ngữ; lập luận và nội dung cuối cùng do người học đánh giá, điều chỉnh và chịu trách nhiệm.</p>
      </Reveal>
      <PageGallery task={6} pages={5} variant="stack" />
    </div>
  );
}

function ProjectStory({ project }: { project: Project }) {
  switch (project.theme) {
    case "files": return <FilesStory />;
    case "research": return <ResearchStory />;
    case "prompts": return <PromptsStory />;
    case "collab": return <CollaborationStory />;
    case "studio": return <StudioStory />;
    case "ethics": return <EthicsStory />;
  }
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
      <ProjectStory project={project} />
      <section className="next-project section-shell">
        <p className="eyebrow">Tiếp tục hành trình</p>
        <Link href={`/projects/${nextProject.slug}`}>
          <span>Bài {Number(nextProject.number)}</span>
          <strong>{nextProject.title}</strong>
          <ArrowRight />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
