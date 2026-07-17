# Portfolio Lôi Phùng Thuỳ Dung — 25040558

Portfolio tĩnh cho học phần **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo**.

## Công nghệ

- Next.js 14 + TypeScript
- Tailwind CSS
- Static export cho GitHub Pages
- Lucide icons
- Không tải font từ CDN; dùng bộ font hệ thống có fallback hỗ trợ tiếng Việt

## Thiết kế V2

- Bảng màu xuyên suốt: **British Red, trắng và xanh navy**.
- Phong cách British editorial / London learning journal, giảm cảm giác template và “AI-generated”.
- Sáu bài tập có sáu cách dàn trang riêng: field notebook, academic newspaper, prompt terminal, collaboration board, creative studio scrapbook và ethics manifesto.
- Union Jack, London skyline, Tube roundel, vé tàu, tem thư, kẹp giấy và ghi chú được dựng bằng CSS/SVG để giữ nét đồng bộ.
- Ảnh minh chứng và tài liệu đều lấy từ bài nộp gốc của sinh viên, không tạo minh chứng giả.
- Đã tối ưu desktop, tablet và mobile; có xử lý ngắt dòng cho tiếng Việt.

## Chạy local

```bash
npm ci
npm run dev
```

Mở `http://localhost:3000`.

## Build

```bash
npm run build
```

Thư mục deploy được xuất ra `out/`.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` tự động cài dependency, build và deploy khi push lên nhánh `main`. Trong **Settings → Pages**, chọn **Source: GitHub Actions**.

Workflow tự nhận tên repository để thiết lập `basePath`, vì vậy ảnh, PDF và các trang chi tiết vẫn hoạt động ở đường dẫn `username.github.io/ten-repository/`.

## Nội dung

- Giữ nguyên phần giới thiệu do sinh viên cung cấp.
- Ảnh ở trang chi tiết được lấy từ các tệp bài làm gốc.
- Tài liệu gốc nằm trong `public/documents/`.


## Pinterest graphic upgrade

- Added locally hosted crops from the supplied Pinterest reference board.
- Six assignments now use six different visual systems.
- Original student screenshots and PDFs are preserved.
- System font stacks are used to prevent Vietnamese diacritic errors.
- Decorative objects are contained inside dedicated visual regions to avoid overlap.
