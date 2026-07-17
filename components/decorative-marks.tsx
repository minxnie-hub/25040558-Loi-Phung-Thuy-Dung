import type { ProjectTheme } from "@/lib/projects";

export function LondonSkyline({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 230" role="img" aria-label="Nét vẽ các biểu tượng London">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 209h884" strokeWidth="3" />
        <path d="M42 208v-50h38v50m-29-50v-18h20v18m-10-18v-20m-7 0h14" strokeWidth="3" />
        <path d="M114 208v-88h62v88m-54-68h46m-46 22h46m-46 22h46" strokeWidth="3" />
        <path d="M205 208v-112h47v112m-36-112V64h25v32m-13-32V34m-8 0h16m-17 82h18m-18 26h18m-18 26h18" strokeWidth="3" />
        <circle cx="228" cy="127" r="8" strokeWidth="3" />
        <path d="M292 208v-42h70v42m-60-42 12-17h30l10 17m-52 12h48m-40 13h10m9 0h10" strokeWidth="3" />
        <circle cx="310" cy="208" r="11" strokeWidth="3" /><circle cx="346" cy="208" r="11" strokeWidth="3" />
        <circle cx="470" cy="138" r="68" strokeWidth="3" />
        <circle cx="470" cy="138" r="4" fill="currentColor" strokeWidth="0" />
        <path d="M470 70v136m-68-68h136m-116-48 96 96m0-96-96 96m48-116-28 136m28-136 28 136" strokeWidth="2" opacity=".82" />
        <path d="M450 208h40m-30-18 10-52 10 52" strokeWidth="3" />
        <path d="M590 208v-94h48v94m-40-78h32m-32 20h32m-32 20h32m-24-56V98h16v16m-8-16V80" strokeWidth="3" />
        <path d="M675 208v-65h40v65m-34-54h28m-28 17h28m-28 17h28m14 20v-106h58v106m-48-86h38m-38 21h38m-38 21h38m-38 21h38" strokeWidth="3" />
        <path d="M792 208v-80h45v80m-38-65h31m-31 18h31m-31 18h31m-22-51V99h14v29m-7-29V78" strokeWidth="3" />
        <path d="M650 208c20-23 35-23 55 0m-55-34c20-23 35-23 55 0" strokeWidth="2" opacity=".7" />
        <path d="M69 76c23-18 45-18 68 0m705 12c14-11 28-11 42 0" strokeWidth="2" opacity=".5" />
      </g>
    </svg>
  );
}

export function PostageStamp({ className = "", label = "LONDON" }: { className?: string; label?: string }) {
  return (
    <span className={`postage-stamp ${className}`} aria-hidden="true">
      <span className="postage-stamp__crown"><i /><i /><i /></span>
      <b>{label}</b>
      <small>QH2025 · ULIS</small>
    </span>
  );
}

export function TubeRoundel({ className = "", label = "LEARN" }: { className?: string; label?: string }) {
  return (
    <span className={`tube-roundel ${className}`} aria-hidden="true">
      <i />
      <b>{label}</b>
    </span>
  );
}

export function ProjectMotif({ theme }: { theme: ProjectTheme }) {
  return (
    <span className={`project-motif project-motif--${theme}`} aria-hidden="true">
      {theme === "files" && <><i className="motif-folder" /><i className="motif-paperclip" /></>}
      {theme === "research" && <><i className="motif-magnifier" /><i className="motif-quote">“</i></>}
      {theme === "prompts" && <><i className="motif-code">&gt;_</i><i className="motif-cursor" /></>}
      {theme === "collab" && <><i className="motif-note motif-note--one" /><i className="motif-note motif-note--two" /><i className="motif-pin" /></>}
      {theme === "studio" && <><i className="motif-scissors">CUT</i><i className="motif-tape" /></>}
      {theme === "ethics" && <><i className="motif-shield">✓</i><i className="motif-seal">AI</i></>}
    </span>
  );
}

export function ScribbleArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 70" aria-hidden="true">
      <path d="M5 50C30 8 73 8 112 42" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m98 30 16 13-20 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
