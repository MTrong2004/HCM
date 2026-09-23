export interface CitationSource {
  id: string;
  title: string;
  author: string;
  year?: string;
  publisher?: string;
  details?: string;
  category: "tac-pham" | "hien-phap" | "nghi-quyet" | "hinh-anh";
}

export const CITATION_SOURCES: CitationSource[] = [
  {
    id: "hcm-toan-tap",
    title: "Hồ Chí Minh Toàn tập (Tập 1 – Tập 15)",
    author: "Hồ Chí Minh",
    publisher: "Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội",
    year: "2011",
    category: "tac-pham",
    details: "Các tập 4, 5, 6, 9, 10, 15 liên quan đến tổ chức chính quyền dân chủ nhân dân và quản trị pháp quyền.",
  },
  {
    id: "hien-phap-1946",
    title: "Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1946",
    author: "Quốc hội khóa I nước Việt Nam Dân chủ Cộng hòa",
    year: "1946",
    category: "hien-phap",
    details: "Bản Hiến pháp đầu tiên trong lịch sử dân tộc khẳng định quyền bính trong nước là của toàn thể nhân dân Việt Nam.",
  },
  {
    id: "hien-phap-1959",
    title: "Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1959",
    author: "Quốc hội nước Việt Nam Dân chủ Cộng hòa",
    year: "1959",
    category: "hien-phap",
    details: "Hiến pháp thời kỳ xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh thống nhất nước nhà.",
  },
  {
    id: "thu-gui-ubnd-1945",
    title: "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng",
    author: "Hồ Chí Minh",
    year: "1945",
    details: "Đăng trên Báo Cứu quốc số 69, ngày 17/10/1945. Nêu rõ trách nhiệm công bộc của người cán bộ nhà nước.",
    category: "tac-pham",
  },
  {
    id: "bai-bao-dan-van-1949",
    title: "Bài báo 'Dân vận'",
    author: "Hồ Chí Minh (Bút danh X.Y.Z)",
    year: "1949",
    details: "Đăng trên Báo Sự thật số 120, ngày 20/10/1949. Khái quát định nghĩa kinh điển về quyền hành và trách nhiệm của dân.",
    category: "tac-pham",
  },
  {
    id: "di-chuc-1969",
    title: "Bản Di chúc lịch sử",
    author: "Chủ tịch Hồ Chí Minh",
    year: "1969",
    publisher: "Nhà xuất bản Chính trị quốc gia Sự thật",
    category: "tac-pham",
    details: "Lời căn dặn thiêng liêng về giữ gìn sự đoàn kết, trong sạch của Đảng và phụng sự nhân dân.",
  },
  {
    id: "nghi-quyet-27-tw",
    title: "Nghị quyết số 27-NQ/TW về tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền XHCN Việt Nam trong giai đoạn mới",
    author: "Ban Chấp hành Trung ương Đảng khóa XIII",
    year: "2022",
    category: "nghi-quyet",
    details: "Kế thừa và phát triển sáng tạo tư tưởng Hồ Chí Minh về kiểm soát quyền lực và xây dựng bộ máy liêm chính.",
  },
  {
    id: "kho-anh-ttxvn",
    title: "Tư liệu ảnh Tổng tuyển cử 1946 & Kỳ họp Quốc hội khóa I",
    author: "Thông tấn xã Việt Nam & Trung tâm Lưu trữ Quốc gia III",
    category: "hinh-anh",
    details: "Nguồn ảnh tư liệu quý giá ghi lại không khí lịch sử lập quốc và hoạt động của Chính phủ Việt Nam Dân chủ Cộng hòa.",
  },
];
