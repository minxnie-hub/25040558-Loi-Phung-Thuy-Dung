export type ProjectTheme = "files" | "research" | "prompts" | "collab" | "studio" | "ethics";

export type Project = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  label: string;
  theme: ProjectTheme;
  description: string;
  subject: string;
  coverPage: number;
  pages: number;
  pdf: string;
  keywords: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "thao-tac-tep-tin-va-thu-muc",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    shortTitle: "Tệp tin & thư mục",
    label: "Digital Foundations",
    theme: "files",
    description: "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin trên Windows bằng minh chứng chụp màn hình.",
    subject: "12 thao tác cơ bản · File Explorer · Copy / Cut / Delete / Restore",
    coverPage: 1,
    pages: 5,
    pdf: "/documents/bai-1-thao-tac-tep-tin-va-thu-muc.pdf",
    keywords: ["File Explorer", "Windows", "Thực hành"]
  },
  {
    number: "02",
    slug: "tim-kiem-va-danh-gia-thong-tin-hoc-thuat",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    shortTitle: "Nghiên cứu học thuật",
    label: "Academic Research",
    theme: "research",
    description: "Báo cáo tìm kiếm, đánh giá và tổng hợp nguồn học thuật về Artificial Intelligence in English Language Teaching and Learning.",
    subject: "Google Scholar · ERIC · Oxford Academic · Harvard references",
    coverPage: 1,
    pages: 5,
    pdf: "/documents/bai-2-tim-kiem-va-danh-gia-thong-tin-hoc-thuat.pdf",
    keywords: ["AI in ELT", "Nguồn học thuật", "Harvard"]
  },
  {
    number: "03",
    slug: "viet-prompt-hieu-qua",
    title: "Viết prompt hiệu quả cho các tác vụ học tập",
    shortTitle: "Prompt Engineering",
    label: "Prompt Lab",
    theme: "prompts",
    description: "So sánh prompt cơ bản, cải tiến và nâng cao cho ba tác vụ: tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập.",
    subject: "Basic · Improved · Advanced · Role prompting · Few-shot",
    coverPage: 1,
    pages: 6,
    pdf: "/documents/bai-3-viet-prompt-hieu-qua.pdf",
    keywords: ["Prompt", "AI", "Học tập"]
  },
  {
    number: "04",
    slug: "cong-cu-hop-tac-truc-tuyen",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    shortTitle: "Hợp tác trực tuyến",
    label: "Collaboration Board",
    theme: "collab",
    description: "Nhật ký cá nhân trong dự án giữa kỳ, ghi nhận nhiệm vụ, lịch sử làm việc nhóm và minh chứng sử dụng công cụ cộng tác.",
    subject: "Google Docs · Google Drive · Google Meet · Hoàn thành đúng hạn",
    coverPage: 2,
    pages: 2,
    pdf: "/documents/bai-4-cong-cu-hop-tac-truc-tuyen.pdf",
    keywords: ["Google Docs", "Làm việc nhóm", "Minh chứng"]
  },
  {
    number: "05",
    slug: "ai-tao-sinh-sang-tao-noi-dung",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    shortTitle: "Creative AI Studio",
    label: "Content Studio",
    theme: "studio",
    description: "Dự án blog “5 phương pháp học ngoại ngữ hiệu quả cho sinh viên” với ChatGPT, DALL-E và Canva AI.",
    subject: "ChatGPT → DALL-E → Canva AI → Sản phẩm hoàn thiện",
    coverPage: 4,
    pages: 6,
    pdf: "/documents/bai-5-ai-tao-sinh-sang-tao-noi-dung.pdf",
    keywords: ["ChatGPT", "DALL-E", "Canva AI"]
  },
  {
    number: "06",
    slug: "ai-co-trach-nhiem",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    shortTitle: "Responsible AI",
    label: "Ethics Manifesto",
    theme: "ethics",
    description: "Phân tích chính sách, minh bạch việc dùng AI, các vấn đề đạo đức và bộ nguyên tắc cá nhân; kèm infographic thực tế trong bài.",
    subject: "Academic integrity · AI declaration · IELTS Writing · Infographic",
    coverPage: 1,
    pages: 5,
    pdf: "/documents/bai-6-ai-co-trach-nhiem.pdf",
    keywords: ["Đạo đức AI", "Minh bạch", "Học thuật"]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
