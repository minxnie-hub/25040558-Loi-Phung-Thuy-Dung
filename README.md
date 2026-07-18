# Portfolio — Lôi Phùng Thuỳ Dung

Portfolio tĩnh cho học phần **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo**.

- Sinh viên: Lôi Phùng Thuỳ Dung
- Mã sinh viên: 25040558
- Khoá: QH2025
- Ngành: Ngôn ngữ Anh — ULIS, ĐHQGHN
- Stack: Next.js 14, TypeScript, Tailwind/PostCSS
- Xuất bản: Static export, tương thích GitHub Pages

## Nội dung

Website có trang giới thiệu và sáu trang bài tập. Nội dung bài được dựng bằng HTML theo đúng trình tự tài liệu gốc; bảng được kẻ lại bằng HTML, ảnh chỉ được dùng tại vị trí minh chứng thực tế.

## Chạy dự án

```bash
npm ci
npm run dev
```

## Kiểm tra build tĩnh

```bash
npm ci
npm run build
```

Kết quả static export nằm trong thư mục `out/`.

## Deploy GitHub Pages

Workflow có sẵn tại `.github/workflows/deploy.yml`. Trong GitHub, chọn **Settings → Pages → Source: GitHub Actions** rồi push nhánh `main`.

## Asset credits

Xem `public/ASSET-CREDITS.md`.
