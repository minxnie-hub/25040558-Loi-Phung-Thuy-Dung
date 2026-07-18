import { asset } from "@/lib/assets";
import type { ProjectTheme } from "@/lib/projects";
import { UnionJack } from "./brand-marks";

const ObjectImage = ({ src, className, alt = "" }: { src: string; className: string; alt?: string }) => (
  <img className={`object-scene__image ${className}`} src={asset(src)} alt={alt} loading="eager" />
);

const Doodles = () => (
  <>
    <span className="object-scene__doodle object-scene__doodle--cloud object-scene__doodle--one" aria-hidden="true" />
    <span className="object-scene__doodle object-scene__doodle--cloud object-scene__doodle--two" aria-hidden="true" />
    <span className="object-scene__doodle object-scene__doodle--star object-scene__doodle--three" aria-hidden="true">✦</span>
    <span className="object-scene__doodle object-scene__doodle--arrow object-scene__doodle--four" aria-hidden="true" />
  </>
);

const Note = ({ className, kicker, title, text }: { className: string; kicker: string; title: string; text: string }) => (
  <div className={`object-scene__note-card ${className}`}>
    <span>{kicker}</span>
    <strong>{title}</strong>
    <p>{text}</p>
  </div>
);

export function ObjectScene({ theme, compact = false }: { theme: ProjectTheme | "home"; compact?: boolean }) {
  return (
    <div className={`object-scene object-scene--${theme}${compact ? " object-scene--compact" : ""}`} aria-label="British graphic composition">
      <span className="object-scene__grid" aria-hidden="true" />
      <span className="object-scene__stamp">LONDON · ENGLAND</span>
      <span className="object-scene__redline" aria-hidden="true" />
      <Doodles />

      {theme === "home" && (
        <>
          <Note className="object-scene__note-card--home" kicker="Study journal" title="Learn English" text="Read widely · think clearly · create responsibly." />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--home" alt="Big Ben" />
          <ObjectImage src="/objects/phone-box-postbox.webp" className="object-scene__phone object-scene__phone--home" alt="Bốt điện thoại và hòm thư đỏ của Anh" />
          <ObjectImage src="/objects/cup-of-tea.webp" className="object-scene__tea object-scene__tea--home" alt="Tách trà" />
          <ObjectImage src="/objects/books.webp" className="object-scene__books object-scene__books--home" alt="Chồng sách" />
          <span className="object-scene__flag"><UnionJack /></span>
          <span className="object-scene__caption">READ · RESEARCH · CREATE</span>
        </>
      )}

      {theme === "files" && (
        <>
          <Note className="object-scene__note-card--files" kicker="Task 01" title="Open · create · move" text="Tổ chức tệp tin rõ ràng và thao tác đúng quy trình." />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--files" alt="Big Ben" />
          <ObjectImage src="/objects/phone-box-postbox.webp" className="object-scene__phone object-scene__phone--files" alt="Bốt điện thoại đỏ" />
          <div className="object-scene__folder object-scene__folder--one">TaiLieu</div>
          <div className="object-scene__folder object-scene__folder--two">GhiChu.txt</div>
          <span className="object-scene__shortcut">CTRL + C · CTRL + V</span>
        </>
      )}

      {theme === "research" && (
        <>
          <Note className="object-scene__note-card--research" kicker="Task 02" title="Search & evaluate" text="Nguồn học thuật cần rõ tác giả, phương pháp, ngày xuất bản." />
          <ObjectImage src="/objects/books.webp" className="object-scene__books object-scene__books--research" alt="Sách học thuật" />
          <ObjectImage src="/objects/notebook.webp" className="object-scene__notebook object-scene__notebook--research" alt="Sổ nghiên cứu" />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--small" alt="Big Ben" />
          <span className="object-scene__magnifier" aria-hidden="true" />
          <span className="object-scene__citation">AUTHOR · SOURCE · METHOD · DATE</span>
        </>
      )}

      {theme === "prompts" && (
        <>
          <ObjectImage src="/objects/notebook.webp" className="object-scene__notebook object-scene__notebook--prompt" alt="Sổ ghi prompt" />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--prompt" alt="Big Ben" />
          <div className="object-scene__terminal"><b>PROMPT LAB</b><code>Role + Context + Goal + Format + Constraints</code><span>RUN →</span></div>
          <div className="object-scene__bubble">Good prompt<br />✓ clear<br />✓ specific<br />✓ example-led</div>
        </>
      )}

      {theme === "collab" && (
        <>
          <Note className="object-scene__note-card--collab" kicker="Task 04" title="Work together" text="Phân công, lưu trữ và họp trực tuyến theo tiến độ." />
          <ObjectImage src="/objects/phone-box-postbox.webp" className="object-scene__phone object-scene__phone--collab" alt="Bốt điện thoại đỏ" />
          <ObjectImage src="/objects/notebook.webp" className="object-scene__notebook object-scene__notebook--collab" alt="Sổ nhiệm vụ" />
          <span className="object-scene__tube object-scene__tube--a" />
          <span className="object-scene__tube object-scene__tube--b" />
          <span className="object-scene__tube object-scene__tube--c" />
          <div className="object-scene__station object-scene__station--one">DOCS</div>
          <div className="object-scene__station object-scene__station--two">DRIVE</div>
          <div className="object-scene__station object-scene__station--three">MEET</div>
        </>
      )}

      {theme === "studio" && (
        <>
          <Note className="object-scene__note-card--studio" kicker="Task 05" title="Creative workflow" text="Viết nội dung, tạo hình ảnh và hoàn thiện thiết kế." />
          <ObjectImage src="/objects/scissors.webp" className="object-scene__scissors" alt="Kéo thủ công" />
          <ObjectImage src="/objects/cup-of-tea.webp" className="object-scene__tea object-scene__tea--studio" alt="Tách trà" />
          <ObjectImage src="/objects/books.webp" className="object-scene__books object-scene__books--studio" alt="Sách" />
          <div className="object-scene__polaroid object-scene__polaroid--one">TEXT</div>
          <div className="object-scene__polaroid object-scene__polaroid--two">IMAGE</div>
          <div className="object-scene__swatches"><i /><i /><i /><i /></div>
        </>
      )}

      {theme === "ethics" && (
        <>
          <Note className="object-scene__note-card--ethics" kicker="Task 06" title="Use AI responsibly" text="Minh bạch, kiểm chứng và giữ tư duy học thuật độc lập." />
          <ObjectImage src="/objects/scales.webp" className="object-scene__scales" alt="Cán cân công lý" />
          <ObjectImage src="/objects/books.webp" className="object-scene__books object-scene__books--ethics" alt="Sách học thuật" />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--ethics" alt="Big Ben" />
          <div className="object-scene__seal">RESPONSIBLE<br /><b>AI</b></div>
          <div className="object-scene__checklist">✓ Minh bạch<br />✓ Kiểm chứng<br />✓ Trách nhiệm</div>
        </>
      )}
    </div>
  );
}
