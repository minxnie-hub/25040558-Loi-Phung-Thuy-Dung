import type { ProjectTheme } from "@/lib/projects";
import { asset } from "@/lib/assets";

type Sticker = {
  src: string;
  alt: string;
  className: string;
};

const stickerMap: Record<ProjectTheme, Sticker[]> = {
  files: [
    { src: "/graphics/stickers2/task1-bigben.png", alt: "Big Ben graphic", className: "sticker-board__item sticker-board__item--files-bigben" },
    { src: "/graphics/stickers2/task1-bus.png", alt: "Xe bus đỏ London graphic", className: "sticker-board__item sticker-board__item--files-bus" },
    { src: "/graphics/stickers2/task1-teacup.png", alt: "Tách trà I love UK", className: "sticker-board__item sticker-board__item--files-cup" },
  ],
  research: [
    { src: "/graphics/stickers2/task2-library.png", alt: "Library graphic", className: "sticker-board__item sticker-board__item--research-library" },
    { src: "/graphics/stickers2/task2-magnifier.png", alt: "Magnifier graphic", className: "sticker-board__item sticker-board__item--research-magnifier" },
    { src: "/graphics/stickers2/task2-notes.png", alt: "Research note graphic", className: "sticker-board__item sticker-board__item--research-notes" },
  ],
  prompts: [
    { src: "/graphics/stickers2/task3-console.png", alt: "Prompt console graphic", className: "sticker-board__item sticker-board__item--prompts-console" },
    { src: "/graphics/stickers2/task3-robot.png", alt: "Robot assistant graphic", className: "sticker-board__item sticker-board__item--prompts-robot" },
    { src: "/graphics/stickers2/task3-chip.png", alt: "Chip graphic", className: "sticker-board__item sticker-board__item--prompts-chip" },
  ],
  collab: [
    { src: "/graphics/stickers2/task4-map.png", alt: "Tube map graphic", className: "sticker-board__item sticker-board__item--collab-map" },
    { src: "/graphics/stickers2/task4-chat.png", alt: "Group chat graphic", className: "sticker-board__item sticker-board__item--collab-chat" },
    { src: "/graphics/stickers2/task4-passport.png", alt: "Passport graphic", className: "sticker-board__item sticker-board__item--collab-passport" },
  ],
  studio: [
    { src: "/graphics/stickers2/task5-polaroids.png", alt: "Creative polaroid graphic", className: "sticker-board__item sticker-board__item--studio-polaroids" },
    { src: "/graphics/stickers2/task5-scissors.png", alt: "Scissors graphic", className: "sticker-board__item sticker-board__item--studio-scissors" },
    { src: "/graphics/stickers2/task5-colorbar.png", alt: "Color palette graphic", className: "sticker-board__item sticker-board__item--studio-colorbar" },
  ],
  ethics: [
    { src: "/graphics/stickers2/task6-shield.png", alt: "Ethics shield graphic", className: "sticker-board__item sticker-board__item--ethics-shield" },
    { src: "/graphics/stickers2/task6-checklist.png", alt: "Ethics checklist graphic", className: "sticker-board__item sticker-board__item--ethics-checklist" },
    { src: "/graphics/stickers2/task6-badge.png", alt: "Ethics badge graphic", className: "sticker-board__item sticker-board__item--ethics-badge" },
  ],
};

export function ThemeArtboard({ theme, variant = "page" }: { theme: ProjectTheme; variant?: "card" | "page" }) {
  const stickers = stickerMap[theme];
  return (
    <div className={`sticker-board sticker-board--${variant} sticker-board--${theme}`}>
      <span className="sticker-board__paper" aria-hidden="true" />
      {stickers.map((sticker) => (
        <img key={sticker.src} src={asset(sticker.src)} alt={sticker.alt} className={sticker.className} loading="lazy" />
      ))}
    </div>
  );
}

export function HomeBritishBoard() {
  return (
    <div className="sticker-board sticker-board--home sticker-board--home-english">
      <span className="sticker-board__paper" aria-hidden="true" />
      <img src={asset("/graphics/stickers2/task2-library.png")} alt="Library graphic" className="sticker-board__item sticker-board__item--home-library" loading="lazy" />
      <img src={asset("/graphics/stickers2/task2-magnifier.png")} alt="Magnifier graphic" className="sticker-board__item sticker-board__item--home-magnifier" loading="lazy" />
      <img src={asset("/graphics/stickers2/task1-bigben.png")} alt="Big Ben graphic" className="sticker-board__item sticker-board__item--home-bigben" loading="lazy" />
      <img src={asset("/graphics/stickers2/task1-bus.png")} alt="Red London bus graphic" className="sticker-board__item sticker-board__item--home-bus" loading="lazy" />
      <img src={asset("/graphics/stickers2/task1-teacup.png")} alt="Tea cup UK graphic" className="sticker-board__item sticker-board__item--home-cup" loading="lazy" />
    </div>
  );
}
