export interface CanonicalSection {
  id: string;
  number: string;
  shortTitle: string;
  fullTitle: string;
  subtitle: string;
  hash: string;
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
  },
  {
    id: "phap-quyen",
    number: "4.2.2",
    shortTitle: "Pháp quyền",
    fullTitle: "Nhà nước pháp quyền",
    subtitle: "Thần linh pháp quyền, pháp quyền nhân nghĩa & tính độc lập tư pháp",
    hash: "#phap-quyen",
  },
  {
    id: "trong-sach-vung-manh",
    number: "4.2.3",
    shortTitle: "Trong sạch",
    fullTitle: "Nhà nước trong sạch, vững mạnh",
    subtitle: "Kiểm soát quyền lực, phòng chống tiêu cực & chỉnh đốn nội bộ",
    hash: "#trong-sach-vung-manh",
  },
  {
    id: "xay-dung-dang",
    number: "4.3.1",
    shortTitle: "Xây dựng Đảng",
    fullTitle: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
    subtitle: "Hạt nhân lãnh đạo, tính tiền phong gương mẫu & đạo đức cách mạng",
    hash: "#xay-dung-dang",
  },
  {
    id: "xay-dung-nha-nuoc",
    number: "4.3.2",
    shortTitle: "Xây dựng Nhà nước",
    fullTitle: "Xây dựng Nhà nước & Đổi mới phương thức lãnh đạo",
    subtitle: "Tinh gọn bộ máy, hiệu lực hiệu quả & liêm chính kiến tạo",
    hash: "#xay-dung-nha-nuoc",
  },
  {
    id: "phong-chong-tham-nhung",
    number: "4.3.3",
    shortTitle: "Chống tham nhũng",
    fullTitle: "Phòng, chống tham nhũng, lãng phí, quan liêu",
    subtitle: "Quốc nạn giặc nội xâm, chế tài nghiêm minh & giáo dục liêm sỉ",
    hash: "#phong-chong-tham-nhung",
  },
  {
    id: "ket-luan",
    number: "5",
    shortTitle: "Tổng kết & Nguồn",
    fullTitle: "Tổng kết & Danh mục tư liệu lưu trữ",
    subtitle: "Di sản trường tồn của Chủ tịch Hồ Chí Minh & Bảo vật Quốc gia",
    hash: "#ket-luan",
  },
] as const;

export const CANONICAL_SECTION_IDS = CANONICAL_SECTIONS.map((s) => s.id);

export function getSectionById(id: string): CanonicalSection | undefined {
  return CANONICAL_SECTIONS.find((s) => s.id === id);
}
