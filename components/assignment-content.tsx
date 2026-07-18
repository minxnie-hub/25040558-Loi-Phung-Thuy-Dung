import { asset } from "@/lib/assets";
import type { ProjectTheme } from "@/lib/projects";
import { ObjectScene } from "./object-scene";

function ReportSection({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="report-section">
      <header className="report-section__header">
        {number && <span>{number}</span>}
        <h2>{title}</h2>
      </header>
      <div className="report-section__body">{children}</div>
    </section>
  );
}

function Evidence({ src, caption, wide = false }: { src: string; caption: string; wide?: boolean }) {
  return (
    <figure className={`evidence${wide ? " evidence--wide" : ""}`}>
      <img src={asset(src)} alt={caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const Bullets = ({ children }: { children: React.ReactNode }) => <ul className="report-list">{children}</ul>;
const PromptBox = ({ title, children }: { title: string; children: React.ReactNode }) => <div className="prompt-box"><strong>{title}</strong><p>{children}</p></div>;

function Task1() {
  const steps = [
    ["1", "Mở File Explorer", "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.", "img-000.webp"],
    ["2", "Truy cập ổ đĩa/thư mục", "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.", "img-001.webp"],
    ["3", "Tạo thư mục mới", "Nhấp chuột phải vào một khoảng trống → chọn New → Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.", "img-002.webp"],
    ["4", "Vào thư mục vừa tạo", "Nhấp đúp vào thư mục ThucHanh_NguyenVanA.", null],
    ["5", "Tạo tệp tin văn bản", "Nhấp chuột phải vào khoảng trống → New → Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.", "img-003.webp"],
    ["6", "Đổi tên tệp tin", "Nhấp chuột phải vào tệp GhiChu.txt → chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.", "img-004.webp"],
    ["7", "Tạo thư mục con", "Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải → New → Folder. Đặt tên là TaiLieu.", "img-005.webp"],
    ["8", "Sao chép tệp tin (Copy & Paste)", "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt → chọn Copy (hoặc Ctrl + C). Mở thư mục TaiLieu, nhấp chuột phải vào khoảng trống → Paste (hoặc Ctrl + V). Bây giờ có một bản sao của tệp trong thư mục TaiLieu.", null],
    ["9", "Di chuyển tệp tin (Cut & Paste)", "Quay lại thư mục ThucHanh_NguyenVanA, tạo tệp DiChuyen.txt. Chọn Cut (hoặc Ctrl + X), mở TaiLieu rồi Paste (hoặc Ctrl + V). Tệp gốc biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.", null],
    ["10", "Xóa tệp tin", "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt → Delete. Tệp được chuyển vào Thùng rác (Recycle Bin).", null],
    ["11", "Xóa vĩnh viễn", "Chọn tệp DiChuyen.txt, nhấn giữ Shift và nhấn Delete. Xác nhận cảnh báo để xóa vĩnh viễn mà không qua Thùng rác.", "img-006.webp"],
    ["12", "Khôi phục từ Thùng rác (Tùy chọn)", "Mở Recycle Bin, tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải và chọn Restore. Tệp quay trở lại vị trí ban đầu.", "img-007.webp"],
  ] as const;
  return (
    <div className="assignment-report assignment-report--files">
      <div className="report-intro-grid">
        <div>
          <p className="report-kicker">Bài 1 · Thực hành Windows</p>
          <h1>Thao tác cơ bản với tệp tin và thư mục</h1>
          <p className="report-lead">Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin, thư mục trên hệ điều hành Windows.</p>
        </div>
        <ObjectScene theme="files" />
      </div>
      <ReportSection number="I" title="Quy trình thực hiện">
        <div className="steps-document">
          {steps.map(([number, title, text, image]) => (
            <article className="step-document" key={number}>
              <div className="step-document__number">{number}</div>
              <div className="step-document__copy"><h3>{title}</h3><p>{text}</p></div>
              {image && <Evidence src={`/evidence/task1/${image}`} caption={`Minh chứng bước ${number}: ${title}`} wide />}
            </article>
          ))}
        </div>
      </ReportSection>
    </div>
  );
}

const sourceSummary = [
  ["1", "Hasumi & Chiu (2024). Technology-Enhanced Language Learning in English Language Education", "Bài báo", "★★★★★"],
  ["2", "Sun et al. (2022). Studies of Teaching and Learning English-Speaking Skills", "Bài báo", "★★★★★"],
  ["3", "Khany & Kamalvand (2022). 100 Years of Research on English Language Learning Materials", "Bài báo", "★★★★★"],
  ["4", "DiCerbo et al. (2014). Teaching Academic English to English Language Learners", "Bài báo", "★★★★★"],
  ["5", "Shormani & Alshawsh (2026). AI Tools in Arab University English Classrooms", "Bài báo", "★★★★☆"],
  ["6", "Lightbown & Spada. How Languages are Learned", "Sách", "★★★★★"],
  ["7", "Ionin & Montrul. Second Language Acquisition: Introducing Intervention Research", "Sách", "★★★★★"],
  ["8", "ELT Journal (Oxford)", "Tạp chí", "★★★★★"],
  ["9", "Language Acquisition (Taylor & Francis)", "Tạp chí", "★★★★★"],
  ["10", "ERIC Database", "Nguồn học thuật mở", "★★★★★"],
];
const reliability = [
  ["Hasumi & Chiu (2024)", "Giảng viên đại học", "Cogent Education", "Phân tích thư mục (1.816 bài báo)", "Cao", "2024", "★★★★★"],
  ["Sun et al. (2022)", "Nhóm nghiên cứu quốc tế", "Frontiers", "Bibliometric Analysis", "Cao", "2022", "★★★★★"],
  ["Khany & Kamalvand (2022)", "Các nhà nghiên cứu SLA", "TESL-EJ", "Systematic Review", "Cao", "2022", "★★★★★"],
  ["DiCerbo et al. (2014)", "Nhà nghiên cứu giáo dục", "Review of Educational Research", "Literature Review", "Rất cao", "2014", "★★★★★"],
  ["Shormani & Alshawsh (2026)", "Đại học Arab", "arXiv", "Systematic Review", "Trung bình", "2026", "★★★★☆"],
  ["How Languages are Learned", "Lightbown & Spada", "Oxford University Press", "Sách chuyên khảo", "Rất cao", "Mới tái bản", "★★★★★"],
  ["Second Language Acquisition", "Ionin & Montrul", "Cambridge University Press", "Sách học thuật", "Rất cao", "2023", "★★★★★"],
  ["ELT Journal", "Ban biên tập Oxford", "Oxford University Press", "Peer review", "Impact Factor cao", "2026", "★★★★★"],
  ["Language Acquisition", "Taylor & Francis", "Taylor & Francis", "Peer review", "Rất cao", "2026", "★★★★★"],
  ["ERIC Database", "US Department of Education", "ERIC", "CSDL học thuật", "Rất cao", "Liên tục cập nhật", "★★★★★"],
];

function Task2() {
  return (
    <div className="assignment-report assignment-report--research">
      <div className="report-intro-grid">
        <div><p className="report-kicker">Bài 2 · Báo cáo học thuật</p><h1>Tìm kiếm, đánh giá và tổng hợp nguồn thông tin học thuật về ngành Ngôn ngữ Anh</h1><p className="report-topic">Chủ đề: <b>Artificial Intelligence in English Language Teaching and Learning</b></p></div>
        <ObjectScene theme="research" />
      </div>
      <ReportSection number="I" title="Mục tiêu">
        <p>Mục tiêu của báo cáo là tìm kiếm, đánh giá và tổng hợp các nguồn tài liệu học thuật liên quan đến việc ứng dụng trí tuệ nhân tạo (AI) trong giảng dạy và học tập tiếng Anh. Nguồn thông tin được thu thập từ các cơ sở dữ liệu học thuật, tạp chí khoa học, sách chuyên khảo và các nguồn mở trên Internet. Sau đó, các tài liệu được đánh giá dựa trên độ tin cậy, tính học thuật và mức độ cập nhật.</p>
      </ReportSection>
      <ReportSection number="II" title="Quá trình tìm kiếm thông tin">
        <div className="report-columns">
          <article><h3>1. Cơ sở dữ liệu học thuật</h3><Bullets><li>Google Scholar</li><li>ERIC</li><li>Oxford Academic</li><li>Scopus (tham khảo qua Google Scholar)</li><li>Thư viện số của trường (nếu có quyền truy cập)</li></Bullets></article>
          <article><h3>Từ khóa tìm kiếm</h3><Bullets><li>Artificial Intelligence in English Language Teaching</li><li>AI-assisted Language Learning</li><li>Technology-enhanced Language Learning</li><li>English Language Education</li><li>Second Language Acquisition</li><li>English Language Teaching</li></Bullets></article>
          <article><h3>2. Tạp chí khoa học chuyên ngành</h3><Bullets><li>ELT Journal (Oxford University Press)</li><li>Language Acquisition (Taylor & Francis)</li><li>English Language Teaching (CCSE)</li><li>Cogent Education</li><li>TESL-EJ</li></Bullets></article>
          <article><h3>3. Sách chuyên khảo</h3><ol><li>How Languages are Learned</li><li>Second Language Acquisition</li><li>Key Questions in Second Language Acquisition</li></ol><h3>4. Nguồn mở</h3><Bullets><li>ERIC</li><li>Oxford Academic</li><li>Frontiers</li><li>arXiv</li></Bullets></article>
        </div>
      </ReportSection>
      <ReportSection number="III" title="Bảng tổng hợp tài liệu">
        <div className="table-wrap"><table className="report-table"><thead><tr><th>STT</th><th>Tài liệu</th><th>Loại</th><th>Đánh giá độ tin cậy</th></tr></thead><tbody>{sourceSummary.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>
      </ReportSection>
      <ReportSection number="IV" title="Đánh giá độ tin cậy của từng nguồn">
        <div className="table-wrap"><table className="report-table report-table--wide"><thead><tr><th>Nguồn</th><th>Tác giả</th><th>Nhà xuất bản</th><th>Phương pháp nghiên cứu</th><th>Lượt trích dẫn</th><th>Tính cập nhật</th><th>Xếp hạng</th></tr></thead><tbody>{reliability.map((row, ri) => <tr key={ri}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>
      </ReportSection>
      <ReportSection number="V" title="Nhận xét">
        <Bullets><li>Google Scholar vẫn là công cụ tìm kiếm học thuật hiệu quả nhất nhờ phạm vi bao phủ rộng.</li><li>ERIC đặc biệt phù hợp với các nghiên cứu về giáo dục và giảng dạy tiếng Anh.</li><li>Oxford Academic, Taylor & Francis và Frontiers đều là các nhà xuất bản uy tín với quy trình phản biện nghiêm ngặt.</li><li>Các bài tổng quan hệ thống (systematic review) và phân tích thư mục (bibliometric analysis) là nguồn đáng tin cậy để nắm bắt xu hướng nghiên cứu trong lĩnh vực Ngôn ngữ Anh.</li></Bullets>
      </ReportSection>
      <ReportSection number="VI" title="Kết luận">
        <p>Việc lựa chọn nguồn thông tin học thuật đáng tin cậy là bước quan trọng trong nghiên cứu ngành Ngôn ngữ Anh. Các cơ sở dữ liệu như Google Scholar, ERIC, Oxford Academic cùng các tạp chí phản biện quốc tế cung cấp nguồn tài liệu có chất lượng cao, cập nhật và được trích dẫn rộng rãi. Việc đánh giá nguồn theo các tiêu chí về tác giả, nhà xuất bản, phương pháp nghiên cứu, số lượng trích dẫn và tính cập nhật giúp người học lựa chọn được tài liệu phù hợp, nâng cao chất lượng nghiên cứu và học tập.</p>
      </ReportSection>
      <ReportSection title="Tài liệu tham khảo (Harvard)">
        <ol className="references"><li>DiCerbo, P.A., Anstrom, K.A., Baker, L.L. & Rivera, C. (2014) A Review of the Literature on Teaching Academic English to English Language Learners. Review of Educational Research, 84(3), pp.446–482.</li><li>Hasumi, T. & Chiu, M.S. (2024) Technology-Enhanced Language Learning in English Language Education: Performance Analysis, Core Publications, and Emerging Trends. Cogent Education.</li><li>Khany, R. & Kamalvand, A. (2022) 100 Years of Research on English Language Learning/Teaching Materials: A Systematic Literature Review. TESL-EJ.</li><li>Lightbown, P.M. & Spada, N. (2021) How Languages are Learned. 5th ed. Oxford: Oxford University Press.</li><li>Ionin, T. & Montrul, S. (2023) Second Language Acquisition: Introducing Intervention Research. Cambridge: Cambridge University Press.</li><li>Shormani, M.Q. & Alshawsh, M.Y. (2026) AI Tools in Arab University English Classrooms: Looking Back and Forward. arXiv.</li><li>Sun, Y. et al. (2022) Studies of Teaching and Learning English-Speaking Skills: A Review and Bibliometric Analysis. Frontiers in Education.</li><li>ELT Journal. Oxford University Press.</li><li>Language Acquisition. Taylor & Francis.</li><li>ERIC (Education Resources Information Center). Technology-Enhanced Language Learning in English Language Education.</li></ol>
      </ReportSection>
    </div>
  );
}

const prompts = [
  {
    task: "Tóm tắt một bài đọc/tài liệu học thuật",
    basic: "Hãy tóm tắt bài viết này thành một đoạn ngắn.",
    improved: "Hãy đọc tài liệu dưới đây và tóm tắt theo các mục: (1) Chủ đề chính; (2) Các luận điểm quan trọng; (3) Kết luận của tác giả. Viết bằng tiếng Việt học thuật, khoảng 200 từ và giữ nguyên các thuật ngữ chuyên ngành quan trọng.",
    advanced: "Bạn là một giảng viên đại học chuyên hướng dẫn sinh viên đọc tài liệu học thuật. Xác định chủ đề trung tâm, phân tích các luận điểm chính, tóm tắt nội dung theo phong cách học thuật dễ hiểu cho sinh viên năm nhất và liệt kê 3 từ khóa quan trọng nhất. Hãy trình bày theo từng mục rõ ràng."
  },
  {
    task: "Giải thích một khái niệm phức tạp",
    basic: "Giải thích khái niệm “trí tuệ nhân tạo”.",
    improved: "Hãy giải thích khái niệm “trí tuệ nhân tạo” cho sinh viên đại học năm nhất. Dùng ngôn ngữ đơn giản, có ví dụ thực tế, so sánh AI với cách con người học tập và trình bày trong khoảng 3 đoạn văn.",
    advanced: "Bạn là một giáo viên công nghệ đang giảng bài cho học sinh mới bắt đầu học AI. Hãy giải thích theo trình tự: định nghĩa cơ bản; AI hoạt động như thế nào; ví dụ thực tế; ưu điểm và hạn chế; tóm tắt ngắn gọn cuối bài. Sử dụng ví dụ gần gũi và so sánh đơn giản để dễ hiểu."
  },
  {
    task: "Tạo bộ câu hỏi ôn tập cho một chủ đề",
    basic: "Tạo câu hỏi ôn tập về chủ đề biến đổi khí hậu.",
    improved: "Hãy tạo 10 câu hỏi ôn tập về chủ đề “biến đổi khí hậu”: gồm 5 câu trắc nghiệm và 5 câu tự luận, có đáp án ngắn gọn, mức độ từ dễ đến trung bình và phù hợp cho học sinh THPT.",
    advanced: "Bạn là giáo viên môn Địa lý đang chuẩn bị đề ôn tập cho học sinh lớp 12 về chủ đề “biến đổi khí hậu”. Tạo 5 câu hỏi nhận biết, 3 câu hỏi vận dụng, 2 câu hỏi phân tích nâng cao; cung cấp đáp án và giải thích ngắn cho từng câu."
  }
];

function Task3() {
  return (
    <div className="assignment-report assignment-report--prompts">
      <div className="report-intro-grid"><div><p className="report-kicker">Bài 3 · Prompt Engineering</p><h1>Viết prompt hiệu quả cho các tác vụ học tập</h1><p className="report-lead">Ba tác vụ học tập được thử nghiệm ở ba cấp độ prompt: cơ bản, cải tiến và nâng cao.</p></div><ObjectScene theme="prompts" /></div>
      <ReportSection number="I" title="Bảng so sánh các phiên bản prompt">
        <div className="table-wrap"><table className="report-table prompt-table"><thead><tr><th>Nhiệm vụ</th><th>Prompt cơ bản</th><th>Prompt cải tiến</th><th>Prompt nâng cao</th></tr></thead><tbody>{prompts.map(row => <tr key={row.task}><th>{row.task}</th><td>{row.basic}</td><td>{row.improved}</td><td>{row.advanced}</td></tr>)}</tbody></table></div>
        <div className="technique-strip"><span>Role prompting</span><span>Chain-of-thought</span><span>Few-shot examples</span><span>Structured output</span><span>Constraint prompting</span></div>
      </ReportSection>
      <ReportSection number="II" title="Vì sao prompt nâng cao hiệu quả hơn?">
        <div className="numbered-notes"><article><b>1</b><h3>Cung cấp ngữ cảnh rõ ràng</h3><p>Ví dụ “Bạn là giảng viên đại học…” giúp AI hiểu vai trò và điều chỉnh cách diễn đạt phù hợp.</p></article><article><b>2</b><h3>Chia nhiệm vụ thành từng bước</h3><p>Định nghĩa, ví dụ, ưu điểm và kết luận được tách rõ nên câu trả lời đầy đủ và logic hơn.</p></article><article><b>3</b><h3>Đưa ra ràng buộc cụ thể</h3><p>Độ dài, đối tượng người đọc, mức độ khó và kiểu trình bày giúp kết quả ít lan man hơn.</p></article><article><b>4</b><h3>Sử dụng ví dụ minh họa</h3><p>Few-shot examples giúp AI hiểu định dạng, bắt chước phong cách và giảm lỗi hiểu sai yêu cầu.</p></article><article><b>5</b><h3>Yêu cầu phân tích theo bước</h3><p>AI thường phân tích logic tốt hơn, tránh bỏ sót ý và tạo câu trả lời có chiều sâu hơn.</p></article></div>
      </ReportSection>
      <ReportSection number="III" title="Nguyên tắc và mẹo viết prompt hiệu quả">
        <div className="principle-grid"><article><h3>Xác định rõ mục tiêu</h3><p>Không nên viết “Giải thích AI”; nên viết “Giải thích AI cho học sinh THPT bằng ví dụ đơn giản”.</p></article><article><h3>Chỉ định vai trò cho AI</h3><p>“Bạn là giáo viên…” hoặc “Bạn là chuyên gia…” giúp điều chỉnh giọng văn và chuyên môn.</p></article><article><h3>Chia yêu cầu thành từng phần</h3><p>Prompt có cấu trúc cho kết quả rõ ràng, ít thiếu ý và dễ kiểm soát hơn.</p></article><article><h3>Đưa ra ràng buộc</h3><p>Độ dài, ngôn ngữ, định dạng và đối tượng người đọc làm kết quả sát nhu cầu hơn.</p></article><article><h3>Sử dụng ví dụ mẫu</h3><p>Few-shot prompting hữu ích khi cần đúng định dạng, phong cách hoặc nội dung học thuật.</p></article><article><h3>Giải thích từng bước khi cần tư duy</h3><p>Phù hợp với phân tích, giải toán, tóm tắt logic và lập kế hoạch.</p></article></div>
      </ReportSection>
      <ReportSection number="IV" title="Kết luận"><Bullets><li>Prompt càng rõ ràng và có cấu trúc thì kết quả càng chất lượng.</li><li>Prompt nâng cao giúp AI hiểu đúng mục tiêu, đối tượng và cách trình bày.</li><li>Role prompting, chain-of-thought và few-shot examples tăng độ chính xác, tính logic và tính ứng dụng.</li></Bullets><p>Viết prompt hiệu quả không chỉ là “đặt câu hỏi”, mà là hướng dẫn AI thực hiện nhiệm vụ theo đúng mục tiêu mong muốn.</p></ReportSection>
    </div>
  );
}

function Task4() {
  return (
    <div className="assignment-report assignment-report--collab">
      <div className="report-intro-grid"><div><p className="report-kicker">Bài 4 · Dự án nhóm giữa kỳ</p><h1>Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm</h1><p className="report-lead">Vai trò cá nhân của Lôi Phùng Thuỳ Dung trong dự án NMCNS&ƯDTTNT.</p></div><ObjectScene theme="collab" /></div>
      <ReportSection number="I" title="Hiệu quả của công cụ đối với công việc cá nhân">
        <div className="report-columns report-columns--two"><article><h3>Tự động lưu và đồng bộ</h3><p>Mọi thao tác soạn thảo đều được tự động lưu theo thời gian thực, giúp không lo mất dữ liệu dù mất điện hay sập nguồn máy tính. Dữ liệu đồng bộ qua Google Drive cho phép chuyển đổi linh hoạt giữa điện thoại, máy tính bảng và laptop.</p></article><article><h3>Quản lý thông tin khoa học</h3><p>Thay vì sử dụng các ứng dụng ghi chú đơn thuần, người dùng có thể tạo một hệ thống tài liệu cá nhân chuyên nghiệp như kế hoạch du lịch, lưu trữ ý tưởng hoặc quản lý mục tiêu với tiêu đề và định dạng rõ ràng.</p></article><article><h3>Chia sẻ dễ dàng</h3><p>Nhanh chóng gửi tài liệu cho gia đình, bạn bè hoặc đồng nghiệp để cùng xem hoặc chỉnh sửa mà không cần đính kèm các tệp nặng qua email.</p></article><article><h3>Lịch sử chỉnh sửa</h3><p>Google Docs lưu trữ lịch sử phiên bản không giới hạn. Có thể xem lại thay đổi cũ hoặc khôi phục tài liệu trước đó nếu lỡ tay xóa nhầm nội dung.</p></article></div>
      </ReportSection>
      <ReportSection number="II" title="Thách thức và cách giải quyết"><div className="challenge-pair"><article><span>Thách thức</span><p>Thành viên thảo luận chưa được nhiệt tình.</p></article><article><span>Giải pháp</span><p>Mạnh dạn góp ý với bạn trên tinh thần tôn trọng, lịch sự.</p></article></div></ReportSection>
      <ReportSection number="III" title="Nhiệm vụ cá nhân"><p><b>Tên thành viên:</b> Lôi Phùng Thuỳ Dung</p><ol className="task-list"><li>Mô tả cách thức sử dụng công cụ AI cùng các prompt đã được sử dụng một cách đơn giản, dễ hiểu. Phân tích lợi ích và thách thức khi triển khai; đưa ra kết luận và định hướng phát triển trong tương lai.</li><li>Ghi lại cuộc họp nhóm.</li><li>Nộp sản phẩm cá nhân.</li></ol><p className="result-note"><b>Kết quả:</b> Hoàn thành đúng hạn.</p></ReportSection>
      <ReportSection number="IV" title="Ảnh minh chứng"><div className="evidence-grid"><Evidence src="/evidence/task4/img-000.webp" caption="Bảng phân công nhiệm vụ nhóm" /><Evidence src="/evidence/task4/img-001.webp" caption="Cuộc họp nhóm trên Microsoft Edge" /></div></ReportSection>
    </div>
  );
}

function Task5() {
  return (
    <div className="assignment-report assignment-report--studio">
      <div className="report-intro-grid"><div><p className="report-kicker">Bài 5 · Dự án sáng tạo nội dung bằng AI</p><h1>5 phương pháp học ngoại ngữ hiệu quả cho sinh viên</h1><p className="report-topic"><b>Loại nội dung:</b> Bài viết blog</p></div><ObjectScene theme="studio" /></div>
      <ReportSection number="I" title="Giới thiệu dự án"><h3>Mục tiêu</h3><Bullets><li>Chia sẻ các phương pháp học ngoại ngữ hiệu quả.</li><li>Minh họa bằng hình ảnh trực quan.</li><li>Tận dụng AI để tăng tốc quá trình sáng tạo nội dung.</li></Bullets><h3>Công cụ AI sử dụng</h3><ol><li>ChatGPT (tạo nội dung văn bản)</li><li>DALL-E (tạo hình ảnh minh họa)</li><li>Canva AI (thiết kế bài đăng hoàn chỉnh)</li></ol></ReportSection>
      <ReportSection number="II" title="Quá trình sử dụng AI">
        <div className="tool-workflow"><article><h3>A. ChatGPT — tạo văn bản</h3><PromptBox title="Prompt 1">Viết bài blog khoảng 700 từ với chủ đề “5 phương pháp học ngoại ngữ hiệu quả cho sinh viên”. Văn phong đơn giản, dễ hiểu, phù hợp với người mới bắt đầu học ngoại ngữ.</PromptBox><p><b>Kết quả:</b> AI đề xuất học từ vựng theo ngữ cảnh, luyện nghe mỗi ngày, thực hành giao tiếp thường xuyên, sử dụng ứng dụng học ngoại ngữ và duy trì thói quen đều đặn; đồng thời viết phần mở đầu, nội dung và kết luận.</p><p><b>Chỉnh sửa cá nhân:</b> Bổ sung ví dụ học tiếng Anh tại Việt Nam; thêm Duolingo và Elsa Speak; rút gọn các đoạn dài.</p><PromptBox title="Prompt 2">Hãy viết lại phần mở đầu hấp dẫn hơn, nhắm đến sinh viên đại học Việt Nam đang gặp khó khăn khi học tiếng Anh.</PromptBox><p>AI tạo phần mở đầu về việc nhiều sinh viên học tiếng Anh nhiều năm nhưng vẫn khó giao tiếp. Cá nhân bổ sung câu hỏi: “Bạn đã từng học tiếng Anh nhiều năm nhưng vẫn ngại giao tiếp chưa?”</p></article>
        <article><h3>B. DALL-E — tạo hình ảnh</h3><PromptBox title="Prompt">Create an illustration showing a university student learning foreign languages through reading books, listening to podcasts, using language learning apps, and speaking with international friends. Modern flat design style, bright colors.</PromptBox><p><b>Kết quả:</b> Hình ảnh gồm sinh viên học tập, điện thoại hiển thị ứng dụng, tai nghe/podcast và bạn bè quốc tế giao tiếp trực tuyến.</p><p><b>Chỉnh sửa:</b> Loại bỏ chi tiết thừa, điều chỉnh kích thước và thêm tiêu đề bằng Canva.</p></article>
        <article><h3>C. Canva AI — hỗ trợ thiết kế</h3><PromptBox title="Prompt">Create a modern educational blog poster about effective language learning methods for university students. Use blue and white color scheme and include icons for vocabulary, listening, speaking, apps, and study habits.</PromptBox><p><b>Kết quả:</b> Canva AI đề xuất bố cục, tạo tiêu đề nổi bật và bố trí biểu tượng học tập.</p><p><b>Chỉnh sửa:</b> Thay font sang Montserrat, bổ sung logo trường và điều chỉnh màu sắc hài hòa hơn.</p><Evidence src="/evidence/task5/img-000.webp" caption="Minh chứng quá trình thiết kế trên Canva AI" /></article></div>
      </ReportSection>
      <ReportSection number="III" title="So sánh kết quả từ các công cụ AI"><div className="table-wrap"><table className="report-table"><thead><tr><th>Công cụ</th><th>Điểm mạnh</th><th>Hạn chế</th></tr></thead><tbody><tr><th>ChatGPT</th><td>Tạo nội dung nhanh, logic, nhiều ý tưởng.</td><td>Một số ví dụ còn chung chung.</td></tr><tr><th>DALL-E</th><td>Hình ảnh sáng tạo, trực quan.</td><td>Đôi khi chi tiết chưa chính xác.</td></tr><tr><th>Canva AI</th><td>Thiết kế đẹp, tiết kiệm thời gian.</td><td>Một số bố cục còn giống mẫu có sẵn.</td></tr></tbody></table></div></ReportSection>
      <ReportSection number="IV" title="Sản phẩm hoàn thiện"><article className="final-article"><h3>5 phương pháp học ngoại ngữ hiệu quả cho sinh viên</h3><p>Bạn đã từng học tiếng Anh nhiều năm nhưng vẫn ngại giao tiếp chưa? Đây là tình trạng phổ biến của nhiều sinh viên hiện nay. Thay vì học thuộc lòng một cách máy móc, người học nên áp dụng những phương pháp phù hợp hơn để nâng cao hiệu quả học tập.</p><h4>1. Học từ vựng theo ngữ cảnh</h4><p>Thay vì học từng từ riêng lẻ, hãy học từ trong câu hoặc đoạn hội thoại. Điều này giúp ghi nhớ lâu hơn và biết cách sử dụng từ đúng tình huống.</p><h4>2. Luyện nghe mỗi ngày</h4><p>Nghe podcast, xem phim hoặc video bằng ngoại ngữ giúp làm quen với cách phát âm và ngữ điệu tự nhiên. Chỉ cần 15–20 phút mỗi ngày cũng mang lại hiệu quả đáng kể.</p><h4>3. Thực hành giao tiếp thường xuyên</h4><p>Ngôn ngữ là công cụ giao tiếp. Vì vậy, người học nên tìm cơ hội nói chuyện với bạn bè hoặc tham gia các câu lạc bộ ngoại ngữ để tăng sự tự tin.</p><h4>4. Tận dụng ứng dụng học tập</h4><p>Các ứng dụng như Duolingo, Elsa Speak hay Quizlet giúp việc học trở nên thú vị hơn thông qua các bài tập tương tác.</p><h4>5. Duy trì thói quen học tập</h4><p>Học 30 phút mỗi ngày hiệu quả hơn nhiều so với học dồn nhiều giờ vào cuối tuần. Sự kiên trì là yếu tố quan trọng quyết định thành công.</p><h4>Kết luận</h4><p>Không có phương pháp nào phù hợp với tất cả mọi người. Tuy nhiên, việc kết hợp học từ vựng theo ngữ cảnh, luyện nghe, giao tiếp thường xuyên, sử dụng công nghệ và duy trì thói quen học tập sẽ giúp sinh viên cải thiện khả năng ngoại ngữ một cách bền vững.</p></article></ReportSection>
      <ReportSection number="V" title="Phân tích vai trò của AI trong quá trình sáng tạo"><div className="report-columns report-columns--two"><article><h3>Những phần AI làm tốt</h3><Bullets><li>Tạo ý tưởng nhanh chóng.</li><li>Viết nội dung có cấu trúc rõ ràng.</li><li>Thiết kế hình ảnh và bố cục chuyên nghiệp.</li><li>Tiết kiệm đáng kể thời gian sáng tạo.</li></Bullets></article><article><h3>Những phần AI còn hạn chế</h3><Bullets><li>Một số thông tin còn mang tính tổng quát.</li><li>Hình ảnh đôi khi chưa đúng với mong muốn.</li><li>Chưa thể thay thế hoàn toàn kinh nghiệm và góc nhìn cá nhân.</li></Bullets></article></div><h3>AI đã thay đổi quy trình sáng tạo như thế nào?</h3><p>Trước đây, tôi phải tự tìm ý tưởng, viết nội dung và thiết kế từ đầu. Với AI, quá trình này được rút ngắn đáng kể. AI hỗ trợ khâu nghiên cứu, viết nháp và thiết kế, trong khi tôi tập trung vào việc chỉnh sửa, đánh giá và bổ sung các ý tưởng sáng tạo của riêng mình.</p><h3>Các vấn đề đạo đức cần cân nhắc</h3><ol><li>Kiểm tra độ chính xác của thông tin do AI tạo ra.</li><li>Minh bạch về việc sử dụng AI trong sản phẩm.</li><li>Tôn trọng bản quyền hình ảnh và nội dung.</li><li>Không phụ thuộc hoàn toàn vào AI mà cần có sự đóng góp sáng tạo của con người.</li><li>Đảm bảo AI được sử dụng như công cụ hỗ trợ thay vì thay thế hoàn toàn tư duy và kỹ năng của người sáng tạo.</li></ol></ReportSection>
    </div>
  );
}

function Task6() {
  return (
    <div className="assignment-report assignment-report--ethics">
      <div className="report-intro-grid"><div><p className="report-kicker">Bài 6 · Đạo đức học thuật</p><h1>Sử dụng AI có trách nhiệm trong học tập và nghiên cứu</h1><p className="report-lead">Phân tích chính sách, thực hành minh bạch và xây dựng bộ nguyên tắc cá nhân.</p></div><ObjectScene theme="ethics" /></div>
      <ReportSection number="I" title="Nghiên cứu chính sách của trường đại học về việc sử dụng AI"><p>Tôi lựa chọn nghiên cứu chính sách của Đại học Quốc gia Hà Nội (ĐHQGHN) vì đây là một trong những trường đại học tiên phong tại Việt Nam trong việc tích hợp AI vào đào tạo.</p><p>Từ năm học 2025–2026, ĐHQGHN triển khai học phần bắt buộc “Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (VNU1001)” cho toàn bộ sinh viên năm nhất nhằm trang bị kiến thức và kỹ năng sử dụng AI trong học tập và nghiên cứu. Nhà trường không cấm sử dụng AI mà khuyến khích sinh viên sử dụng AI như một công cụ hỗ trợ, đồng thời nhấn mạnh:</p><Bullets><li>Trung thực trong học thuật.</li><li>Minh bạch khi sử dụng AI.</li><li>Không sao chép nguyên văn đầu ra của AI.</li><li>Sinh viên phải chịu trách nhiệm về sản phẩm cuối cùng.</li><li>AI không được thay thế tư duy phản biện và khả năng nghiên cứu của người học.</li></Bullets><p>Việc triển khai học phần AI bắt buộc thể hiện định hướng giúp sinh viên khai thác AI hiệu quả nhưng vẫn đảm bảo đạo đức học thuật và phát triển năng lực cá nhân.</p></ReportSection>
      <ReportSection number="II" title="Thực hiện một nhiệm vụ học tập với sự hỗ trợ của AI"><p><b>Nhiệm vụ:</b> Viết bài luận tiếng Anh với chủ đề “With the advancement of technology that facilitates online communication, face-to-face contact will soon become a thing of the past. To what extent do you agree or disagree?” — chọn quan điểm <b>Disagree</b>.</p><div className="prompt-sequence"><PromptBox title="Prompt 1">Generate an IELTS Writing Task 2 outline for the topic “With the advancement of technology that facilitates online communication, face-to-face contact will soon become a thing of the past.” Take a disagree position.</PromptBox><div className="output-box"><b>Đầu ra AI</b><Bullets><li>Introduction</li><li>Body Paragraph 1: emotional connection; non-verbal cues improve understanding.</li><li>Body Paragraph 2: online communication complements rather than replaces direct interaction; technology strengthens existing relationships.</li><li>Conclusion: reaffirm disagreement.</li></Bullets></div><PromptBox title="Prompt 2">Suggest academic vocabulary related to emotional connection and face-to-face communication.</PromptBox><div className="output-box"><b>Đầu ra AI</b><p>interpersonal interaction, emotional bonding, social cohesion, mutual understanding, non-verbal communication, reinforce relationships, complement, empathy, authentic interaction.</p></div><PromptBox title="Prompt 3">Revise my paragraph into Band 7.5 IELTS Academic style without changing my ideas.</PromptBox><div className="output-box"><b>Đầu ra AI</b><Bullets><li>Sửa lỗi ngữ pháp.</li><li>Nâng cấp từ vựng học thuật.</li><li>Cải thiện liên kết câu.</li><li>Giữ nguyên lập luận của tôi.</li></Bullets></div></div><h3>Cách tôi đánh giá và chỉnh sửa đầu ra AI</h3><Bullets><li>Kiểm tra xem lập luận có phù hợp với đề bài hay không.</li><li>Đối chiếu các dẫn chứng với nguồn tham khảo.</li><li>Loại bỏ những câu mang tính chung chung.</li><li>Thay đổi cách diễn đạt theo phong cách viết của bản thân.</li><li>Kiểm tra lại ngữ pháp và tính logic trước khi hoàn thiện.</li></Bullets><p>Nhờ vậy, AI chỉ đóng vai trò hỗ trợ ý tưởng và chỉnh sửa ngôn ngữ, còn toàn bộ lập luận và nội dung cuối cùng đều do tôi quyết định.</p><div className="declaration"><b>Declaration of AI Use</b><p>ChatGPT was used to assist with brainstorming ideas, improving grammar, suggesting academic vocabulary, and refining sentence structures. All final arguments, organization, critical evaluation, and editing were completed by the author, who takes full responsibility for the submitted work.</p></div></ReportSection>
      <ReportSection number="III" title="Phân tích các vấn đề đạo đức khi sử dụng AI trong học thuật"><h3>3.1 Ranh giới giữa hỗ trợ hợp lý và gian lận học thuật</h3><p>AI được xem là công cụ hỗ trợ khi người học sử dụng để tìm ý tưởng, sửa lỗi ngữ pháp, gợi ý từ vựng hoặc tóm tắt tài liệu. Ngược lại, sao chép toàn bộ nội dung AI tạo ra rồi nộp như sản phẩm của bản thân là gian lận học thuật vì người học không thực sự tham gia vào quá trình tư duy và sáng tạo. Ranh giới quan trọng nằm ở việc AI hỗ trợ người học hay thay thế hoàn toàn người học.</p><h3>3.2 Quyền sở hữu trí tuệ và trích dẫn</h3><Bullets><li>AI có thể tạo ra nội dung dựa trên nhiều nguồn khác nhau.</li><li>AI đôi khi tạo thông tin không chính xác hoặc trích dẫn giả.</li><li>Nếu sử dụng AI trong quá trình làm bài, cần khai báo minh bạch theo quy định của trường hoặc giảng viên.</li><li>Người học vẫn phải tự kiểm chứng mọi thông tin trước khi sử dụng.</li></Bullets><h3>3.3 Tác động đến quá trình học tập và phát triển kỹ năng</h3><div className="report-columns report-columns--two"><article><h4>Lợi ích</h4><Bullets><li>Tiết kiệm thời gian.</li><li>Hỗ trợ tìm kiếm ý tưởng.</li><li>Cải thiện kỹ năng viết.</li><li>Học từ các ví dụ chất lượng.</li></Bullets></article><article><h4>Hạn chế</h4><Bullets><li>Dễ phụ thuộc vào AI.</li><li>Giảm khả năng tư duy phản biện.</li><li>Giảm kỹ năng nghiên cứu độc lập.</li><li>Có nguy cơ vi phạm đạo đức học thuật nếu sử dụng không đúng cách.</li></Bullets></article></div><p>Vì vậy, AI nên được xem là công cụ hỗ trợ, không phải là người làm bài thay sinh viên.</p></ReportSection>
      <ReportSection number="IV" title="Bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm"><ol className="principles-list"><li>Chỉ sử dụng AI để hỗ trợ học tập, không để thay thế tư duy của bản thân.</li><li>Luôn kiểm chứng thông tin do AI cung cấp trước khi sử dụng.</li><li>Không sao chép nguyên văn nội dung AI tạo ra.</li><li>Minh bạch khi sử dụng AI nếu môn học hoặc giảng viên yêu cầu.</li><li>Luôn chỉnh sửa và bổ sung quan điểm cá nhân vào sản phẩm cuối cùng.</li><li>Tôn trọng quyền sở hữu trí tuệ và trích dẫn đầy đủ các nguồn tham khảo.</li><li>Sử dụng AI như một công cụ học tập nhằm nâng cao kiến thức và kỹ năng lâu dài thay vì chỉ hoàn thành bài tập.</li></ol></ReportSection>
      <ReportSection number="V" title="Infographic minh họa"><Evidence src="/evidence/task6/img-000.webp" caption="Infographic “Sử dụng AI có trách nhiệm trong học thuật”" wide /></ReportSection>
    </div>
  );
}

export function AssignmentContent({ theme }: { theme: ProjectTheme }) {
  switch (theme) {
    case "files": return <Task1 />;
    case "research": return <Task2 />;
    case "prompts": return <Task3 />;
    case "collab": return <Task4 />;
    case "studio": return <Task5 />;
    case "ethics": return <Task6 />;
  }
}
