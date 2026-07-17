import { asset } from "@/lib/assets";

export function PageGallery({ task, pages, variant = "grid" }: { task: number; pages: number; variant?: "grid" | "spread" | "stack" }) {
  return (
    <div className={`page-gallery page-gallery--${variant}`}>
      {Array.from({ length: pages }, (_, index) => {
        const page = index + 1;
        return (
          <figure key={page} className="document-page">
            <img src={asset(`/projects/task${task}/page-${page}.webp`)} alt={`Bài ${task}, trang ${page} trong tài liệu gốc`} loading={page > 2 ? "lazy" : "eager"} />
            <figcaption>Trang {String(page).padStart(2, "0")}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
