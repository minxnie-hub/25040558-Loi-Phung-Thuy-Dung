import { asset } from "@/lib/assets";

export function GraphicPhoto({
  src,
  alt,
  className = "",
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  return (
    <figure className={`graphic-photo ${className}`}>
      <img src={asset(src)} alt={alt} loading="eager" />
      {label && <span className="graphic-photo__label">{label}</span>}
    </figure>
  );
}

export function PaperSticker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`paper-sticker ${className}`}>{children}</span>;
}

export function NumberBadge({ value }: { value: string }) {
  return <span className="number-badge" aria-hidden="true">{value}</span>;
}
