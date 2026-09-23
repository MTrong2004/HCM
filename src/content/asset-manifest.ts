export interface AssetManifestItem {
  id: string;
  section: string;
  filename: string;
  type: "hero-image" | "supporting-image" | "infographic-svg" | "icon-svg";
  aspectRatio: string;
  minResolution: string;
  description: string;
  status: "placeholder" | "ready";
  sourceReference?: string;
}

export const ASSET_MANIFEST: AssetManifestItem[] = [
  // Images 4.2.1 Nhà nước dân chủ
  {
    id: "img-dan-chu-hero",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "nha-nuoc-dan-chu-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1024x768",
    description: "Nhân dân nô nức tham gia Tổng tuyển cử ngày 6/1/1946 tại Hà Nội.",
    status: "ready",
    sourceReference: "Trung tâm Lưu trữ Quốc gia III",
  },
  {
    id: "img-bac-ho-mit-tinh-cu-tri-1946",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "archival/bac-ho-mit-tinh-cu-tri-1946.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "750x496",
    description: "Chủ tịch Hồ Chí Minh gặp gỡ, nói chuyện cùng cử tri Hà Nội trước thềm Tổng tuyển cử năm 1946.",
    status: "ready",
    sourceReference: "Trung tâm Lưu trữ Quốc gia III",
  },
  {
    id: "img-bac-ho-bo-phieu-1946",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "archival/bac-ho-bo-phieu-1946.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "720x746",
    description: "Chủ tịch Hồ Chí Minh thực hiện quyền công dân, bỏ phiếu bầu cử Quốc hội khóa I tại hòm phiếu số 10 khu Trúc Bạch, Hà Nội (06/01/1946).",
    status: "ready",
    sourceReference: "Bảo tàng Lịch sử Quốc gia",
  },
  {
    id: "img-can-bo-phuc-vu",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "can-bo-phuc-vu-nhan-dan.webp",
    type: "supporting-image",
    aspectRatio: "3:2",
    minResolution: "1600x1060",
    description: "Chủ tịch Hồ Chí Minh cùng các cán bộ tiếp xúc, lắng nghe ý kiến kiều bào và nhân dân lao động.",
    status: "ready",
    sourceReference: "Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch",
  },

  // Images 4.2.2 Nhà nước pháp quyền
  {
    id: "img-phap-quyen-hero",
    section: "4.2.2 Nhà nước pháp quyền",
    filename: "nha-nuoc-phap-quyen-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1080x709",
    description: "Bản gốc Hiến pháp năm 1946 có bút tích và chữ ký của Chủ tịch Hồ Chí Minh.",
    status: "ready",
    sourceReference: "Bảo tàng Lịch sử Quốc gia",
  },
  {
    id: "img-quoc-hoi-khoa-1-1946",
    section: "4.2.2 Nhà nước pháp quyền",
    filename: "archival/quoc-hoi-khoa-1-1946.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "1600x899",
    description: "Kỳ họp thứ nhất Quốc hội khóa I tại Nhà hát Lớn Hà Nội (02/03/1946) thành lập bộ máy Nhà nước hợp hiến.",
    status: "ready",
    sourceReference: "Trung tâm Lưu trữ Quốc gia III",
  },
  {
    id: "img-soan-thao-hien-phap-1946",
    section: "4.2.2 Nhà nước pháp quyền",
    filename: "soan-thao-hien-phap-1946.webp",
    type: "supporting-image",
    aspectRatio: "4:3",
    minResolution: "744x552",
    description: "Chủ tịch Hồ Chí Minh chủ trì Ban Dự thảo Hiến pháp năm 1946.",
    status: "ready",
    sourceReference: "Bảo tàng Hồ Chí Minh",
  },

  // Images 4.2.3 Nhà nước trong sạch, vững mạnh
  {
    id: "img-trong-sach-hero",
    section: "4.2.3 Nhà nước trong sạch, vững mạnh",
    filename: "nha-nuoc-trong-sach-vung-manh-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1091x1152",
    description: "Không gian làm việc minh bạch, ngăn nắp với hồ sơ thanh tra công vụ và ánh sáng trang nghiêm.",
    status: "ready",
  },
  {
    id: "img-bac-ho-lam-viec-phu-chu-tich-1957",
    section: "4.2.3 Nhà nước trong sạch, vững mạnh",
    filename: "archival/bac-ho-lam-viec-phu-chu-tich-1957.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "1600x896",
    description: "Chủ tịch Hồ Chí Minh làm việc trong căn phòng mộc mạc tại Phủ Chủ tịch (1957) — tấm gương mẫu mực về cần kiệm liêm chính.",
    status: "ready",
    sourceReference: "Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch",
  },

  // Images 4.3.1 Xây dựng Đảng
  {
    id: "img-xay-dung-dang-hero",
    section: "4.3.1 Xây dựng Đảng",
    filename: "xay-dung-dang-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1600x2135",
    description: "Văn kiện đường lối Đại hội và con đường ánh sáng tượng trưng cho chân lý cách mạng.",
    status: "ready",
  },
  {
    id: "img-bac-ho-dai-hoi-2-1951",
    section: "4.3.1 Xây dựng Đảng",
    filename: "archival/bac-ho-dai-hoi-2-1951.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "448x281",
    description: "Chủ tịch Hồ Chí Minh đọc Báo cáo Chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951).",
    status: "ready",
    sourceReference: "Viện Lịch sử Đảng",
  },

  // Images 4.3.2 Xây dựng Nhà nước
  {
    id: "img-xay-dung-nha-nuoc-hero",
    section: "4.3.2 Xây dựng Nhà nước",
    filename: "xay-dung-nha-nuoc-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "628x855",
    description: "Hội trường Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.",
    status: "ready",
  },
  {
    id: "img-chinh-phu-hop-hien-1946",
    section: "4.3.2 Xây dựng Nhà nước",
    filename: "archival/chinh-phu-hop-hien-1946.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "750x508",
    description: "Chính phủ Liên hiệp Kháng chiến ra mắt Quốc hội khóa I ngày 2/3/1946 do Chủ tịch Hồ Chí Minh đứng đầu.",
    status: "ready",
    sourceReference: "Trung tâm Lưu trữ Quốc gia III",
  },
];
