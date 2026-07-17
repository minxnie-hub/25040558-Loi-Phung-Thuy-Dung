import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2, Download, FileArchive, FolderOpen, Lightbulb, MessageSquareText, Search, ShieldCheck, Sparkles } from "lucide-react";
import { UnionJack } from "@/components/brand-marks";
import { GraphicPhoto, NumberBadge, PaperSticker } from "@/components/graphic-photo";
import { PageGallery } from "@/components/page-gallery";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/assets";
import { getProject, projects, type Project, type ProjectTheme } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function ThemeStickers({ theme }: { theme: ProjectTheme }) {
  switch (theme) {
    case "files":
      return (
        <>
          <img className="project-hero__sticker-img project-hero__sticker-img--a" src={asset("/graphics/stickers/bigben-stamp.png")} alt="" aria-hidden="true" />
          <img className="project-hero__sticker-img project-hero__sticker-img--b" src={asset("/graphics/stickers/bus-red.png")} alt="" aria-hidden="true" />
        </>
      );
    case "research":
      return (
        <>
          <img className="project-hero__sticker-img project-hero__sticker-img--a" src={asset("/graphics/stickers/magnifier.png")} alt="" aria-hidden="true" />
          <img className="project-hero__sticker-img project-hero__sticker-img--b" src={asset("/graphics/stickers/research-notes.png")} alt="" aria-hidden="true" />
        </>
      );
    case "prompts":
      return (
        <>
          <img className="project-hero__sticker-img project-hero__sticker-img--a" src={asset("/graphics/stickers/chip.png")} alt="" aria-hidden="true" />
          <img className="project-hero__sticker-img project-hero__sticker-img--b" src={asset("/graphics/stickers/uk-flag.png")} alt="" aria-hidden="true" />
        </>
      );
    case "collab":
      return (
        <>
          <img className="project-hero__sticker-img project-hero__sticker-img--a" src={asset("/graphics/stickers/tube-sign.png")} alt="" aria-hidden="true" />
          <img className="project-hero__sticker-img project-hero__sticker-img--b" src={asset("/graphics/stickers/uk-flag.png")} alt="" aria-hidden="true" />
        </>
      );
    case "studio":
      return (
        <>
          <img className="project-hero__sticker-img project-hero__sticker-img--a" src={asset("/graphics/stickers/scissors.png")} alt="" aria-hidden="true" />
          <img className="project-hero__sticker-img project-hero__sticker-img--b" src={asset("/graphics/stickers/camera.png")} alt="" aria-hidden="true" />
        </>
      );
    case "ethics":
      return (
        <>
          <img className="project-hero__sticker-img project-hero__sticker-img--a" src={asset("/graphics/stickers/ethics-shield.png")} alt="" aria-hidden="true" />
          <img className="project-hero__sticker-img project-hero__sticker-img--b" src={asset("/graphics/stickers/ethics-badge.png")} alt="" aria-hidden="true" />
        </>
      );
  }
}

function ProjectHero({ project }: { project: Project }) {
  return (
    <section className={`project-hero project-theme--${project.theme}`}>
      <div className="project-hero__shell">
        <div className="project-hero__copy">
          <Link href="/#bai-tap" className="back-link"><ArrowLeft /> Quay lại 6 bài tập</Link>
          <div className="project-hero__edition"><UnionJack /><span>{project.label} · Bài {Number(project.number)}</span></div>
          <NumberBadge value={String(Number(project.number))} />
          <h1>{project.title}</h1>
          <p className="project-hero__description">{project.description}</p>
          <div className="project-hero__meta"><span>{project.subject}</span><span>{project.pages} trang tài liệu gốc</span></div>
          <a className="button button--primary" href={asset(project.pdf)} target="_blank" rel="noreferrer">Mở PDF gốc <Download /></a>
        </div>
        <div className="project-hero__visual">
          <div className="project-hero__board">
            <GraphicPhoto className="project-hero__photo" src={project.decorImage} alt={`Graphic trang trí cho ${project.title}`} label={project.visualNote} />
            <ThemeStickers theme={project.theme} />
          </div>
          <figure className="project-hero__document">
            <span className="project-hero__tape" aria-hidden="true" />
            <img src={asset(`/projects/task${Number(project.number)}/page-${project.coverPage}.webp`)} alt={`Ảnh thật từ ${project.title}`} />
            <figcaption>ORIGINAL WORK · {String(Number(project.number))}</figcaption>
          </figure>
          <PaperSticker className="project-hero__sticker">REAL EVIDENCE<br />+ GRAPHIC STORYTELLING</PaperSticker>
        </div>
      </div>
    </section>
  );
}

function FilesStory({ project }: { project: Project }) {
  const steps = [
    ["01–04", "Khởi tạo không gian", "Mở File Explorer, truy cập ổ đĩa, tạo và mở thư mục thực hành."],
    ["05–07", "Tổ chức dữ liệu", "Tạo tệp văn bản, đổi tên và tạo thư mục con TaiLieu."],
    ["08–09", "Sao chép & di chuyển", "Phân biệt Copy/Paste với Cut/Paste qua minh chứng thực tế."],
    ["10–12", "Xóa & khôi phục", "Xóa vào Recycle Bin, xóa vĩnh viễn và khôi phục tệp."],
  ];
  return (
    <div className="files-story project-content-shell">
      <Reveal className="story-heading">
        <div><p className="eyebrow">Windows field notes</p><h2>12 thao tác, một quy trình hoàn chỉnh</h2></div>
        <PaperSticker>KEEP CALM<br />& ORGANIZE<br />YOUR FILES</PaperSticker>
      </Reveal>
      <div className="files-overview">
        <GraphicPhoto className="story-photo story-photo--portrait" src={project.decorImage} alt="London collage cho bài 1" label="LONDON FIELD NOTE" />
        <div className="file-route">
          {steps.map(([range, title, text], index) => (
            <Reveal className="file-route__stop" key={range} delay={index * 60}>
              <span>{range}</span><FolderOpen /><div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="gallery-caption"><span>Ảnh thật từ bài nộp</span><p>Toàn bộ ảnh File Explorer được giữ nguyên; graphic London chỉ nằm ở lớp trang trí bên ngoài.</p></div>
      <PageGallery task={1} pages={5} variant="stack" />
    </div>
  );
}

function ResearchStory({ project }: { project: Project }) {
  const sources = ["Google Scholar", "ERIC", "Oxford Academic", "Scopus", "Thư viện số của trường"];
  return (
    <div className="research-story project-content-shell">
      <GraphicPhoto className="research-story__banner" src={project.decorImage} alt="Editorial Big Ben cho bài nghiên cứu" label="ACADEMIC ARCHIVE · LONDON" />
      <Reveal className="research-masthead">
        <div className="research-masthead__issue"><span>VOL. 01</span><b>THE ENGLISH LANGUAGE REVIEW</b><span>2026</span></div>
        <h2>Artificial Intelligence in English Language Teaching and Learning</h2>
        <p>Báo cáo tổng hợp cơ sở dữ liệu học thuật, tạp chí chuyên ngành, sách chuyên khảo và nguồn mở.</p>
      </Reveal>
      <div className="research-columns">
        <Reveal className="research-index"><Search /><h3>Nguồn tìm kiếm</h3><ol>{sources.map((source) => <li key={source}>{source}</li>)}</ol></Reveal>
        <Reveal className="research-note" delay={70}><BookOpenCheck /><h3>Tiêu chí đánh giá</h3><p>Tác giả, đơn vị xuất bản, loại tài liệu, năm công bố và mức độ tin cậy được tổng hợp thành bảng.</p></Reveal>
        <Reveal className="research-note" delay={120}><FileArchive /><h3>Đầu ra học thuật</h3><p>Danh mục tài liệu tham khảo được trình bày theo định dạng Harvard ở phần cuối.</p></Reveal>
      </div>
      <div className="research-pullquote"><span>Research note</span><p>Nguồn tốt không chỉ “đúng chủ đề” mà còn phải rõ tác giả, nơi xuất bản, phương pháp và tính cập nhật.</p></div>
      <PageGallery task={2} pages={5} variant="spread" />
    </div>
  );
}

function PromptsStory({ project }: { project: Project }) {
  const levels = [
    ["BASIC", "Prompt cơ bản", "Ngắn gọn, dễ dùng nhưng chưa quy định rõ cấu trúc và đầu ra."],
    ["IMPROVED", "Prompt cải tiến", "Bổ sung cấu trúc, độ dài, phong cách và mục tiêu cụ thể."],
    ["ADVANCED", "Prompt nâng cao", "Kết hợp vai trò, hướng dẫn theo bước và ví dụ minh họa."],
  ];
  return (
    <div className="prompts-story project-content-shell">
      <div className="prompt-visual-band">
        <GraphicPhoto className="prompt-visual-band__photo" src={project.decorImage} alt="Concept Prompt Engineering" label="INPUT → REFINE → EVALUATE" />
        <div className="prompt-visual-band__console"><span>SYSTEM</span><code>You are a helpful English tutor.</code><span>USER</span><code>Explain the passive voice for A2 learners.</code><span>OUTPUT</span><code>Clear · structured · example-led</code></div>
      </div>
      <Reveal className="prompt-console-title"><span>PROMPT LAB / 3</span><h2>Ba cấp độ cho ba tác vụ học tập</h2></Reveal>
      <div className="prompt-levels">
        {levels.map(([code, title, text], index) => (
          <Reveal className="prompt-level" key={code} delay={index * 70}><span>{code}</span><h3>{title}</h3><p>{text}</p><div className="prompt-cursor">_</div></Reveal>
        ))}
      </div>
      <Reveal className="prompt-tasks">
        <article><MessageSquareText /><strong>Tóm tắt tài liệu học thuật</strong></article>
        <article><Lightbulb /><strong>Giải thích khái niệm phức tạp</strong></article>
        <article><CheckCircle2 /><strong>Tạo bộ câu hỏi ôn tập</strong></article>
      </Reveal>
      <div className="prompt-command-strip"><code>ROLE</code><span>+</span><code>CONTEXT</code><span>+</span><code>FORMAT</code><span>+</span><code>CONSTRAINTS</code></div>
      <PageGallery task={3} pages={6} variant="grid" />
    </div>
  );
}

function CollaborationStory({ project }: { project: Project }) {
  return (
    <div className="collab-story project-content-shell">
      <div className="collab-intro">
        <GraphicPhoto className="collab-intro__photo" src={project.decorImage} alt="Concept bảng làm việc nhóm" label="CONNECTED ROUTE · TEAMWORK" />
        <Reveal className="collab-intro__copy"><p className="eyebrow">Midterm teamwork log</p><h2>Bảng điều phối cá nhân</h2><p>Mỗi nhiệm vụ là một trạm, mỗi công cụ là một tuyến kết nối.</p><span className="status-chip">Hoàn thành đúng hạn</span></Reveal>
      </div>
      <div className="collab-board">
        <Reveal className="collab-column"><h3>Việc phụ trách</h3><ul><li>Mô tả cách sử dụng công cụ AI và các prompt.</li><li>Phân tích lợi ích, thách thức và định hướng.</li><li>Ghi lại cuộc họp nhóm.</li><li>Nộp sản phẩm cá nhân.</li></ul></Reveal>
        <Reveal className="collab-column" delay={70}><h3>Công cụ & minh chứng</h3><ul><li>Google Docs: soạn thảo và lịch sử chỉnh sửa.</li><li>Google Drive: lưu trữ và chia sẻ.</li><li>Google Meet: họp nhóm trực tuyến.</li></ul></Reveal>
        <Reveal className="collab-column" delay={120}><h3>Thách thức</h3><p>Thành viên thảo luận chưa nhiệt tình.</p><h3>Giải pháp</h3><p>Mạnh dạn góp ý trên tinh thần tôn trọng và lịch sự.</p></Reveal>
      </div>
      <div className="collab-timeline"><span>Phân công</span><i /><span>Thảo luận</span><i /><span>Chỉnh sửa</span><i /><span>Hoàn thành</span></div>
      <PageGallery task={4} pages={2} variant="spread" />
    </div>
  );
}

function StudioStory({ project }: { project: Project }) {
  const pipeline = [
    ["01", "ChatGPT", "Tạo bài blog và điều chỉnh phần mở đầu cho sinh viên Việt Nam."],
    ["02", "DALL-E", "Tạo hình minh họa sinh viên học ngoại ngữ bằng nhiều hoạt động."],
    ["03", "Canva AI", "Sắp xếp bố cục, tiêu đề và các biểu tượng học tập."],
    ["04", "Biên tập cá nhân", "Bổ sung ví dụ, rút gọn nội dung và hoàn thiện sản phẩm."],
  ];
  return (
    <div className="studio-story project-content-shell">
      <div className="studio-collage">
        <GraphicPhoto className="studio-collage__london" src={project.decorImage} alt="London city graphic" label="LONDON CREATIVE CUT" />
        <figure className="studio-collage__project"><span aria-hidden="true" /><img src={asset("/projects/task5/page-4.webp")} alt="Ảnh chụp Canva AI thực tế trong bài tập 5" /><figcaption>ACTUAL PROCESS CAPTURE</figcaption></figure>
        <PaperSticker className="studio-collage__note">IDEA → TEXT → IMAGE → LAYOUT → HUMAN EDIT</PaperSticker>
      </div>
      <Reveal className="studio-title"><Sparkles /><div><p className="eyebrow">Creative content pipeline</p><h2>5 phương pháp học ngoại ngữ hiệu quả cho sinh viên</h2></div></Reveal>
      <div className="studio-pipeline">
        {pipeline.map(([number, title, text], index) => (
          <Reveal className="studio-step" key={number} delay={index * 55}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index < pipeline.length - 1 && <ArrowRight aria-hidden="true" />}</Reveal>
        ))}
      </div>
      <div className="studio-margin-note"><span>Human edit</span><p>AI tạo bản nháp; sinh viên chọn lọc, sửa nội dung và quyết định bố cục cuối.</p></div>
      <PageGallery task={5} pages={6} variant="grid" />
    </div>
  );
}

function EthicsStory({ project }: { project: Project }) {
  const principles = ["Trung thực trong học thuật", "Minh bạch khi sử dụng AI", "Không sao chép nguyên văn", "Chịu trách nhiệm về sản phẩm cuối cùng", "Không để AI thay thế tư duy phản biện"];
  return (
    <div className="ethics-story project-content-shell">
      <div className="ethics-visual">
        <GraphicPhoto className="ethics-visual__court" src={project.decorImage} alt="Concept Responsible AI" label="POLICY · JUSTICE · ACCOUNTABILITY" />
        <Reveal className="ethics-visual__manifesto"><ShieldCheck /><p className="eyebrow">Responsible AI manifesto</p><h2>AI hỗ trợ, người học quyết định</h2><p>Bài tập kết nối chính sách của ĐHQGHN, một nhiệm vụ IELTS Writing và bộ nguyên tắc sử dụng AI có trách nhiệm.</p><span className="ethics-seal">CHECKED<br /><b>RESPONSIBLE AI</b></span></Reveal>
      </div>
      <div className="ethics-principles">
        {principles.map((principle, index) => <Reveal className="ethics-rule" key={principle} delay={index * 40}><span>{String(index + 1).padStart(2, "0")}</span><p>{principle}</p></Reveal>)}
      </div>
      <Reveal className="ethics-case">
        <p className="eyebrow">Case study in the report</p><h3>IELTS Writing Task 2</h3>
        <blockquote>“With the advancement of technology that facilitates online communication, face-to-face contact will soon become a thing of the past.”</blockquote>
        <p>AI được dùng để gợi ý dàn ý, từ vựng học thuật và chỉnh sửa ngôn ngữ; lập luận và nội dung cuối cùng do người học đánh giá, điều chỉnh và chịu trách nhiệm.</p>
      </Reveal>
      <PageGallery task={6} pages={5} variant="stack" />
    </div>
  );
}

function ProjectStory({ project }: { project: Project }) {
  switch (project.theme) {
    case "files": return <FilesStory project={project} />;
    case "research": return <ResearchStory project={project} />;
    case "prompts": return <PromptsStory project={project} />;
    case "collab": return <CollaborationStory project={project} />;
    case "studio": return <StudioStory project={project} />;
    case "ethics": return <EthicsStory project={project} />;
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
        <Link href={`/projects/${nextProject.slug}`}><span>Bài {Number(nextProject.number)}</span><strong>{nextProject.title}</strong><ArrowRight /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
