import { UnionJack } from "./brand-marks";

export function SiteFooter() {
  return (
    <footer id="thong-tin" className="site-footer">
      <div className="site-footer__flag"><UnionJack /></div>
      <div>
        <p className="eyebrow">Student Portfolio · QH2025</p>
        <h2>Lôi Phùng Thuỳ Dung</h2>
        <p>25040558 · Ngôn ngữ Anh · Trường Đại học Ngoại ngữ, ĐHQGHN</p>
      </div>
      <p className="site-footer__note">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</p>
    </footer>
  );
}
