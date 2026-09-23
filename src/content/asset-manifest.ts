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
  // Images 4.2.1
  {
    id: "img-dan-chu-hero",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "nha-nuoc-dan-chu-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1920x1080",
    description: "Toàn cảnh nhân dân nô nức tham gia Tổng tuyển cử ngày 6/1/1946 tại Hà Nội.",
    status: "placeholder",
    sourceReference: "Trung tâm Lưu trữ Quốc gia III",
  },
  {
    id: "img-tong-tuyen-cu-1946",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "tong-tuyen-cu-1946.webp",
    type: "supporting-image",
    aspectRatio: "4:3",
    minResolution: "1200x900",
    description: "Hình ảnh hòm phiếu và cử tri bỏ lá phiếu đầu tiên trong lịch sử độc lập.",
    status: "placeholder",
  },
  {
    id: "img-can-bo-phuc-vu",
    section: "4.2.1 Nhà nước dân chủ",
    filename: "can-bo-phuc-vu-nhan-dan.webp",
    type: "supporting-image",
    aspectRatio: "3:2",
    minResolution: "1200x800",
    description: "Chủ tịch Hồ Chí Minh và cán bộ gặp gỡ, lắng nghe ý kiến kiều bào và nhân dân lao động.",
    status: "placeholder",
  },

  // Images 4.2.2
  {
    id: "img-phap-quyen-hero",
    section: "4.2.2 Nhà nước pháp quyền",
    filename: "nha-nuoc-phap-quyen-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1920x1080",
    description: "Bản gốc Hiến pháp năm 1946 có bút tích và chữ ký của Chủ tịch Hồ Chí Minh.",
    status: "placeholder",
    sourceReference: "Bảo tàng Lịch sử Quốc gia",
  },
  {
    id: "img-thuong-ton-phap-luat",
    section: "4.2.2 Nhà nước pháp quyền",
    filename: "thuong-ton-phap-luat.webp",
    type: "supporting-image",
    aspectRatio: "4:3",
    minResolution: "1200x900",
    description: "Kỳ họp thứ nhất Quốc hội khóa I tại Nhà hát Lớn Hà Nội thông qua Hiến pháp 1946.",
    status: "placeholder",
  },

  // Images 4.2.3
  {
    id: "img-trong-sach-hero",
    section: "4.2.3 Nhà nước trong sạch, vững mạnh",
    filename: "nha-nuoc-trong-sach-vung-manh-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1920x1080",
    description: "Không gian làm việc minh bạch, ngăn nắp với hồ sơ thanh tra công vụ và ánh sáng trang nghiêm.",
    status: "placeholder",
  },

  // Images 4.3.1
  {
    id: "img-xay-dung-dang-hero",
    section: "4.3.1 Xây dựng Đảng",
    filename: "xay-dung-dang-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1920x1080",
    description: "Văn kiện đường lối Đại hội và con đường ánh sáng tượng trưng cho chân lý cách mạng.",
    status: "placeholder",
  },

  // Images 4.3.2
  {
    id: "img-xay-dung-nha-nuoc-hero",
    section: "4.3.2 Xây dựng Nhà nước",
    filename: "xay-dung-nha-nuoc-hero.webp",
    type: "hero-image",
    aspectRatio: "16:9",
    minResolution: "1920x1080",
    description: "Hội trường Diên Hồng - Tòa nhà Quốc hội nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.",
    status: "placeholder",
  },

  // Supporting Image: Nhà nước trong sạch, vững mạnh & Phòng chống giặc nội xâm
  {
    id: "img-phong-chong-tham-nhung-hero",
    section: "4.2.3 Nhà nước trong sạch, vững mạnh",
    filename: "phong-chong-tham-nhung-lang-phi.webp",
    type: "supporting-image",
    aspectRatio: "16:9",
    minResolution: "1920x1080",
    description: "Hồ sơ vụ án Trần Dụ Châu và biểu tượng cán cân công lý thượng tôn pháp luật.",
    status: "placeholder",
    sourceReference: "Tư liệu Lịch sử & Viện Hồ Chí Minh",
  },
];
