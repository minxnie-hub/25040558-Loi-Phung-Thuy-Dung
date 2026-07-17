"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="mobile-menu">
      <button className="icon-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Đóng menu" : "Mở menu"}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Điều hướng di động">
          <Link onClick={close} href="/#gioi-thieu">Giới thiệu</Link>
          <Link onClick={close} href="/#bai-tap">Bài tập</Link>
          <Link onClick={close} href="/#hanh-trinh">Hành trình</Link>
          <Link onClick={close} href="/#thong-tin">Thông tin</Link>
        </nav>
      )}
    </div>
  );
}
