export interface CanonicalSubtab {
  id: string;
  label: string;
  shortLabel: string;
  badge?: string;
}

export interface CanonicalSection {
  id: string;
  number: string;
  shortTitle: string;
  fullTitle: string;
  subtitle: string;
  hash: string;
  subtabs?: readonly CanonicalSubtab[];
}

export const CANONICAL_SECTIONS: readonly CanonicalSection[] = [
  {
    id: "hero",
    number: "0",
    shortTitle: "Mở đầu",
    fullTitle: "Mở đầu — Bản Tuyên ngôn & Lập hiến 1946",
    subtitle: "Kỷ niệm 80 năm Hiến pháp đầu tiên (1946 - 2026)",
    hash: "#hero",
  },
  {
    id: "dan-chu",
    number: "4.2.1",
    shortTitle: "Dân chủ",
    fullTitle: "Nhà nước dân chủ",
    subtitle: "Bản chất giai cấp, quyền làm chủ và sứ mệnh phục vụ của Nhà nước mới",
    hash: "#dan-chu",
    subtabs: [
      {
        id: "ban-chat-giai-cap",
        label: "a. Bản chất giai cấp của nhà nước",
        shortLabel: "a. Bản chất giai cấp",
        badge: "Giai cấp & Dân tộc",
      },
      {
        id: "nha-nuoc-cua-nhan-dan",
        label: "b. Nhà nước của nhân dân",
        shortLabel: "b. Của nhân dân",
        badge: "Quyền thuộc về dân",
      },
      {
        id: "nha-nuoc-do-nhan-dan",
        label: "c. Nhà nước do nhân dân",
        shortLabel: "c. Do nhân dân",
        badge: "Dân làm chủ",
      },
      {
        id: "nha-nuoc-vi-nhan-dan",
        label: "d. Nhà nước vì nhân dân",
        shortLabel: "d. Vì nhân dân",
        badge: "Phục vụ nhân dân",
      },
    ],
  },
  {
    id: "phap-quyen",
    number: "4.2.2",
    shortTitle: "Pháp quyền",
    fullTitle: "Nhà nước pháp quyền",
    subtitle: "Thần linh pháp quyền, pháp quyền nhân nghĩa & tính độc lập tư pháp",
    hash: "#phap-quyen",
    subtabs: [
      {
        id: "hop-hien-hop-phap",
        label: "a. Nhà nước hợp hiến, hợp pháp",
        shortLabel: "a. Hợp hiến, hợp pháp",
        badge: "1919 — 1946",
      },
      {
        id: "thuong-ton-phap-luat",
        label: "b. Nhà nước thượng tôn pháp luật",
        shortLabel: "b. Thượng tôn pháp luật",
        badge: "Thần linh pháp quyền",
      },
      {
        id: "phap-quyen-nhan-nghia",
        label: "c. Pháp quyền nhân nghĩa & Đạo đức cách mạng",
        shortLabel: "c. Pháp quyền nhân nghĩa",
        badge: "Đức trị & Pháp trị",
      },
    ],
  },
  {
    id: "trong-sach-vung-manh",
    number: "4.2.3",
    shortTitle: "Trong sạch",
    fullTitle: "Nhà nước trong sạch, vững mạnh",
    subtitle: "Kiểm soát quyền lực, phòng chống tiêu cực & chỉnh đốn nội bộ",
    hash: "#trong-sach-vung-manh",
    subtabs: [
      {
        id: "kiem-soat-quyen-luc",
        label: "a. Kiểm soát quyền lực nhà nước",
        shortLabel: "a. Kiểm soát quyền lực",
        badge: "Kiểm soát đa chiều",
      },
      {
        id: "phong-chong-tieu-cuc",
        label: "b. Phòng, chống tiêu cực trong bộ máy nhà nước",
        shortLabel: "b. Phòng chống tiêu cực",
        badge: "3 Căn bệnh nguy hiểm",
      },
      {
        id: "xay-di-doi-voi-chong",
        label: "c. Xây đi đôi với chống",
        shortLabel: "c. Xây đi đôi với chống",
        badge: "Chỉnh đốn bộ máy",
      },
    ],
  },
  {
    id: "xay-dung-dang",
    number: "4.3.1",
    shortTitle: "Xây dựng Đảng",
    fullTitle: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
    subtitle: "Hạt nhân lãnh đạo, tính tiền phong gương mẫu & đạo đức cách mạng",
    hash: "#xay-dung-dang",
    subtabs: [
      {
        id: "phuong-dien-duong-loi",
        label: "a. Tính tất yếu và quy luật xây dựng Đảng",
        shortLabel: "a. Tất yếu & Quy luật",
        badge: "Quy luật sinh tồn",
      },
      {
        id: "to-chuc-thuc-hien",
        label: "b. Nội dung công tác xây dựng Đảng",
        shortLabel: "b. Nội dung xây dựng",
        badge: "Tư tưởng & Đạo đức",
      },
      {
        id: "chinh-don-dang-va-sinh-vien",
        label: "c. Chỉnh đốn Đảng & Trách nhiệm thế hệ trẻ",
        shortLabel: "c. Chỉnh đốn & Tu dưỡng",
        badge: "Hành động sinh viên",
      },
    ],
  },
  {
    id: "xay-dung-nha-nuoc",
    number: "4.3.2",
    shortTitle: "Xây dựng Nhà nước",
    fullTitle: "Xây dựng Nhà nước & Đổi mới phương thức lãnh đạo",
    subtitle: "Tinh gọn bộ máy, hiệu lực hiệu quả & liêm chính kiến tạo",
    hash: "#xay-dung-nha-nuoc",
    subtabs: [
      {
        id: "phap-luat-quyen-luc",
        label: "a. Xây dựng bộ máy nhà nước tinh gọn, hiệu lực",
        shortLabel: "a. Bộ máy tinh gọn",
        badge: "Hiệu lực & Hiệu quả",
      },
      {
        id: "doi-ngu-can-bo",
        label: "b. Đổi mới phương thức lãnh đạo của Đảng",
        shortLabel: "b. Đổi mới lãnh đạo",
        badge: "Phương thức lãnh đạo",
      },
      {
        id: "giac-noi-xam-va-lanh-dao-dang",
        label: "c. Trọng dụng nhân tài & Liêm chính kiến tạo",
        shortLabel: "c. Trọng dụng nhân tài",
        badge: "Chiêu hiền đãi sĩ",
      },
    ],
  },
  {
    id: "phong-chong-tham-nhung",
    number: "4.3.3",
    shortTitle: "Chống tham nhũng",
    fullTitle: "Phòng, chống tham nhũng, lãng phí, quan liêu",
    subtitle: "Quốc nạn giặc nội xâm, chế tài nghiêm minh & giáo dục liêm sỉ",
    hash: "#phong-chong-tham-nhung",
    subtabs: [
      {
        id: "nhan-dien-van-de",
        label: "a. Nhận diện giặc nội xâm",
        shortLabel: "a. Nhận diện giặc nội xâm",
        badge: "3 Thứ giặc nội xâm",
      },
      {
        id: "ky-cuong-va-bien-phap",
        label: "b. Phương sách phòng, chống tham nhũng, lãng phí",
        shortLabel: "b. Phương sách phòng chống",
        badge: "Pháp trị & Liêm chính",
      },
    ],
  },
  {
    id: "ket-luan",
    number: "5",
    shortTitle: "Ứng dụng AI",
    fullTitle: "Ứng dụng AI & Tổng kết",
    subtitle: "Ứng dụng Trí tuệ nhân tạo trong nghiên cứu Tư tưởng Hồ Chí Minh",
    hash: "#ket-luan",
  },
] as const;

export const CANONICAL_SECTION_IDS = CANONICAL_SECTIONS.map((s) => s.id);

export function getSectionById(id: string): CanonicalSection | undefined {
  return CANONICAL_SECTIONS.find((s) => s.id === id);
}
