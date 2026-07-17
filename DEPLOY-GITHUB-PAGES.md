# Deploy GitHub Pages

## Lỗi `next: not found`

Lỗi xảy ra khi workflow chạy `npm run build` trước khi cài dependencies. Workflow mới cài dependencies bằng:

```bash
npm ci --include=dev
```

Sau đó workflow kiểm tra `node_modules/.bin/next` trước khi build.

## Cập nhật repository hiện tại

1. Chép đè toàn bộ source mới vào repository.
2. Đảm bảo ở thư mục gốc có đủ:
   - `package.json`
   - `package-lock.json`
   - `.npmrc`
   - `.github/workflows/deploy.yml`
3. Commit và push lên nhánh `main`.
4. Vào **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Vào **Actions** và chạy lại workflow nếu cần.

Không đưa `node_modules`, `.next` hoặc `out` lên GitHub.
