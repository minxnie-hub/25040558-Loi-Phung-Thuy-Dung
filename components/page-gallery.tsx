import { asset } from "@/lib/assets";

export function PageGallery({ task, pages, variant = "grid" }: { task: number; pages: number; variant?: "grid" | "spread" | "stack" }) {
  return (
    <div className={`page-gallery page-gallery--${variant}`}>
      {Array.from({ length: pages }, (_, index) => {
        const page = index + 1;
        return (
          <figure key={page} className={`document-page document-page--${(index % 3) + 1}`}>
            <span className="document-page__tape" aria-hidden="true" />
            <img src={asset(`/projects/task${task}/page-${page}.webp`)} alt={`Bài ${task}, trang ${page} trong tài liệu gốc`} loading="eager" />
            <figcaption><span>ORIGINAL</span> Trang {String(page).padStart(2, "0")}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
