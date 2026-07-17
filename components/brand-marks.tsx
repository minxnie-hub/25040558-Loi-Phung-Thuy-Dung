import { BusFront, Clock3, Crown, Landmark, Phone } from "lucide-react";

export function UnionJack({ className = "" }: { className?: string }) {
  return <span aria-label="Quốc kỳ Vương quốc Anh" role="img" className={`union-jack ${className}`} />;
}

export function LondonMarks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`london-marks ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <span><Landmark /></span>
      <span><Clock3 /></span>
      <span><BusFront /></span>
      <span><Phone /></span>
      <span><Crown /></span>
    </div>
  );
}
