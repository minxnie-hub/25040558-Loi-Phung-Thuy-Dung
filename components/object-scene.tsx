import { asset } from "@/lib/assets";
import type { ProjectTheme } from "@/lib/projects";
import { UnionJack } from "./brand-marks";

const ObjectImage = ({ src, className, alt = "" }: { src: string; className: string; alt?: string }) => (
  <img className={`object-scene__image ${className}`} src={asset(src)} alt={alt} loading="eager" />
);

export function ObjectScene({ theme, compact = false }: { theme: ProjectTheme | "home"; compact?: boolean }) {
  return (
    <div className={`object-scene object-scene--${theme}${compact ? " object-scene--compact" : ""}`} aria-label="British graphic composition">
      <span className="object-scene__grid" aria-hidden="true" />
      <span className="object-scene__stamp">LONDON · ENGLAND</span>
      <span className="object-scene__redline" aria-hidden="true" />
      {theme === "home" && (
        <>
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben" alt="Big Ben" />
          <ObjectImage src="/objects/phone-box-postbox.webp" className="object-scene__phone" alt="Bốt điện thoại và hòm thư đỏ của Anh" />
          <ObjectImage src="/objects/cup-of-tea.webp" className="object-scene__tea" alt="Tách trà" />
          <ObjectImage src="/objects/books.webp" className="object-scene__books" alt="Chồng sách" />
          <span className="object-scene__flag"><UnionJack /></span>
          <span className="object-scene__caption">READ · RESEARCH · CREATE</span>
        </>
      )}
      {theme === "files" && (
        <>
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben" alt="Big Ben" />
          <ObjectImage src="/objects/phone-box-postbox.webp" className="object-scene__phone" alt="Bốt điện thoại đỏ" />
          <div className="object-scene__folder object-scene__folder--one">TaiLieu</div>
          <div className="object-scene__folder object-scene__folder--two">GhiChu.txt</div>
          <span className="object-scene__shortcut">CTRL + C · CTRL + V</span>
        </>
      )}
      {theme === "research" && (
        <>
          <ObjectImage src="/objects/books.webp" className="object-scene__books" alt="Sách học thuật" />
          <ObjectImage src="/objects/notebook.webp" className="object-scene__notebook" alt="Sổ nghiên cứu" />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--small" alt="Big Ben" />
          <span className="object-scene__magnifier" aria-hidden="true" />
          <span className="object-scene__citation">AUTHOR · SOURCE · METHOD · DATE</span>
        </>
      )}
      {theme === "prompts" && (
        <>
          <ObjectImage src="/objects/notebook.webp" className="object-scene__notebook object-scene__notebook--prompt" alt="Sổ ghi prompt" />
          <ObjectImage src="/objects/big-ben.webp" className="object-scene__bigben object-scene__bigben--prompt" alt="Big Ben" />
          <div className="object-scene__terminal"><b>PROMPT</b><code>Role + Context + Format + Constraints</code><span>RUN →</span></div>
          <div className="object-scene__bubble">Be clear.<br />Be specific.</div>
        </>
      )}
      {theme === "collab" && (
        <>
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
