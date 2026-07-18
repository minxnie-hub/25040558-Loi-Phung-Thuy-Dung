import {
  Bot,
  FileText,
  FolderOpen,
  Lightbulb,
  MessagesSquare,
  Scale,
  Search,
  Sparkles,
} from "lucide-react";
import { asset } from "@/lib/assets";
import type { ProjectTheme } from "@/lib/projects";
import { UnionJack } from "./brand-marks";

function LondonEyeGraphic({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 260" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="120" cy="106" r="82" />
        <circle cx="120" cy="106" r="7" />
        {Array.from({ length: 16 }).map((_, index) => {
          const angle = (index * Math.PI * 2) / 16;
          const x = 120 + Math.cos(angle) * 82;
          const y = 106 + Math.sin(angle) * 82;
          return <line key={index} x1="120" y1="106" x2={x} y2={y} />;
        })}
        <path d="M120 113 76 239M120 113l45 126M55 239h132" />
        <path d="M39 245h162" />
      </g>
    </svg>
  );
}

function BusGraphic({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 310 190" aria-hidden="true">
      <g stroke="#071d3d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#cf1735" d="M31 25h213c25 0 44 20 44 44v88H20V46c0-12 5-21 11-21Z" />
        <path fill="#b70f2b" d="M20 101h268v56H20z" />
        <path fill="#fff" d="M45 43h44v43H45zM100 43h44v43h-44zM155 43h44v43h-44zM210 43h48v43h-48z" />
        <path fill="#f5f8fc" d="M45 109h44v30H45zM100 109h44v30h-44zM155 109h44v30h-44zM210 109h48v30h-48z" />
        <path fill="#071d3d" d="M28 143h260v15H28z" />
        <circle fill="#071d3d" cx="78" cy="158" r="23" />
        <circle fill="#fff" cx="78" cy="158" r="9" />
        <circle fill="#071d3d" cx="239" cy="158" r="23" />
        <circle fill="#fff" cx="239" cy="158" r="9" />
        <path fill="#f3c64d" d="M42 17h124v16H42z" />
      </g>
    </svg>
  );
}

function BridgeGraphic({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 860 160" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 123h840M28 128h800M110 123V74M720 123V74" />
        <path d="M78 74h64M688 74h64M94 74V38h32v36M704 74V38h32v36" />
        <path d="M110 38 126 16l16 22M720 38l16-22 16 22" />
        <path d="M126 53h578M142 72h546" />
        <path d="M126 53c83 78 188 75 289 20 97-52 200-57 289-20" />
        <path d="M126 53c84 62 188 61 289 16 96-43 199-48 289-16" strokeDasharray="7 9" />
        <path d="M210 123V84M300 123V98M390 123v-17M480 123v-17M570 123V98M660 123V84" />
        <path d="M0 145c120-14 220 10 335 0s231-15 352 0 120-2 173-2" strokeDasharray="12 10" />
      </g>
    </svg>
  );
}

export function HeroBritishScene() {
  return (
    <div className="british-hero-scene" aria-label="Minh họa các biểu tượng đặc trưng của Vương quốc Anh">
      <span className="british-hero-scene__flag"><UnionJack /></span>
      <span className="british-hero-scene__cloud british-hero-scene__cloud--one" aria-hidden="true" />
      <span className="british-hero-scene__cloud british-hero-scene__cloud--two" aria-hidden="true" />
      <span className="british-hero-scene__birds" aria-hidden="true">⌁⌁</span>
      <img className="british-hero-scene__bigben" src={asset("/objects/big-ben.webp")} alt="Big Ben" />
      <LondonEyeGraphic className="british-hero-scene__eye" />
      <BridgeGraphic className="british-hero-scene__bridge" />
      <BusGraphic className="british-hero-scene__bus" />
      <span className="british-hero-scene__label">London learning journal</span>
    </div>
  );
}

export function AboutPortraitScene() {
  return (
    <div className="about-portrait-scene">
      <figure className="about-portrait-card">
        <span className="about-portrait-card__tape" aria-hidden="true" />
        <img src={asset("/profile/loi-phung-thuy-dung.webp")} alt="Ảnh chân dung của Lôi Phùng Thuỳ Dung" />
        <figcaption>Keep learning, keep growing.</figcaption>
      </figure>
      <BridgeGraphic className="about-portrait-scene__bridge" />
      <img className="about-portrait-scene__phone" src={asset("/objects/phone-box-postbox.webp")} alt="Bốt điện thoại đỏ của Anh" />
      <span className="about-portrait-scene__flag"><UnionJack /></span>
    </div>
  );
}

export function ProjectIcon({ theme, className = "" }: { theme: ProjectTheme; className?: string }) {
  const common = { "aria-hidden": true, strokeWidth: 1.7 } as const;
  const icon = {
    files: <FolderOpen {...common} />,
    research: <Search {...common} />,
    prompts: <Bot {...common} />,
    collab: <MessagesSquare {...common} />,
    studio: <Sparkles {...common} />,
    ethics: <Scale {...common} />,
  }[theme];
  return <span className={`project-symbol project-symbol--${theme} ${className}`}>{icon}</span>;
}

export function SummaryIcon({ type }: { type: "journey" | "skills" | "future" }) {
  const common = { "aria-hidden": true, strokeWidth: 1.8 } as const;
  const icon = type === "journey" ? <FileText {...common} /> : type === "skills" ? <Lightbulb {...common} /> : <Sparkles {...common} />;
  return <span className={`summary-symbol summary-symbol--${type}`}>{icon}</span>;
}
