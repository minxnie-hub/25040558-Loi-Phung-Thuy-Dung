import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UnionJack } from "./brand-marks";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-link" aria-label="Về trang chủ">
          <UnionJack className="brand-flag" />
          <span className="brand-copy">
            <strong>L.P.T.D</strong>
            <small>English Language · ULIS</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/#gioi-thieu">Giới thiệu</Link>
          <Link href="/#bai-tap">Bài tập</Link>
          <Link href="/#hanh-trinh">Hành trình</Link>
          <Link href="/#thong-tin">Thông tin</Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
