import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lôi Phùng Thuỳ Dung | Portfolio Công nghệ số & AI",
  description: "Portfolio 6 bài tập học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo của Lôi Phùng Thuỳ Dung.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081a36",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
