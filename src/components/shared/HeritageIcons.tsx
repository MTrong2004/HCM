import React from "react";

/**
 * Huy hiệu chân dung Bác Hồ kết hợp hoa sen mạ vàng
 * Phong cách đồ họa hàn lâm, tôn nghiêm theo đúng thiết kế mẫu
 */
export function HoChiMinhEmblem({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Huy hiệu chân dung Chủ tịch Hồ Chí Minh và hoa sen"
    >
      <circle cx="60" cy="60" r="58" stroke="#D4AF37" strokeWidth="2.5" fill="#4A0E0E" />
      <circle cx="60" cy="60" r="53" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {/* Vòng hào quang / cánh sen nền */}
      <path
        d="M60 14 C65 26, 75 32, 85 35 C75 42, 70 52, 69 64 C60 56, 52 56, 45 62 C48 50, 44 40, 35 35 C45 32, 55 26, 60 14Z"
        fill="#D4AF37"
        opacity="0.15"
      />
      {/* Hình khối chân dung Bác Hồ cách điệu (Vector nét đơn tinh xảo) */}
      <g fill="#D4AF37">
        {/* Vầng trán cao và tóc */}
        <path d="M50 32 C54 28, 62 27, 68 30 C73 33, 76 38, 77 43 C74 42, 69 41, 65 42 C61 43, 56 46, 54 49 C53 43, 51 37, 50 32Z" />
        {/* Khuôn mặt, sống mũi và ánh mắt */}
        <path d="M68 34 C72 38, 73 45, 71 50 C70 52, 72 54, 75 55 C74 57, 72 58, 69 58 C67 61, 64 64, 62 65 C60 66, 58 64, 58 62 C57 58, 59 52, 63 48 C66 45, 67 40, 68 34Z" />
        {/* Chòm râu đặc trưng của Người */}
        <path d="M63 65 C66 69, 68 75, 68 81 C66 84, 63 87, 60 89 C59 85, 59 79, 61 74 C62 70, 62 67, 63 65Z" />
        <path d="M60 68 C61 73, 62 78, 61 83 C59 86, 57 88, 55 90 C55 85, 56 80, 58 75 C59 71, 59 69, 60 68Z" opacity="0.8" />
        {/* Cổ áo và bờ vai */}
        <path d="M42 86 C48 80, 54 78, 62 80 C68 82, 74 86, 80 92 C74 95, 66 97, 58 97 C51 97, 45 93, 42 86Z" opacity="0.9" />
      </g>
      {/* Đóa sen nâng đỡ phía dưới */}
      <path
        d="M60 84 C66 84, 72 88, 76 94 C71 96, 65 98, 60 98 C55 98, 49 96, 44 94 C48 88, 54 84, 60 84Z"
        fill="#D4AF37"
      />
      <path
        d="M60 78 C63 82, 67 85, 73 87 C68 90, 63 92, 60 92 C57 92, 52 90, 47 87 C53 85, 57 82, 60 78Z"
        fill="#F3E5AB"
      />
      {/* 2 ngôi sao trang trí 2 bên */}
      <polygon points="22,60 24,64 29,64 25,67 27,71 22,68 18,71 20,67 16,64 21,64" fill="#D4AF37" />
      <polygon points="98,60 100,64 105,64 101,67 103,71 98,68 94,71 96,67 92,64 97,64" fill="#D4AF37" />
    </svg>
  );
}

/**
 * Biểu tượng Cán cân công lý mạ vàng (Scales of Justice)
 */
export function JusticeScalesIcon({ className = "w-8 h-8 text-amber-600" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cán cân công lý"
    >
      {/* Trục đứng và đỉnh cán cân */}
      <path d="M24 6 V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="6" r="3" fill="currentColor" />
      <path d="M16 42 H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 38 H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Thanh ngang cân bằng */}
      <path d="M8 14 H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="14" r="2.5" fill="currentColor" />
      {/* Đĩa cân bên trái */}
      <path d="M8 14 L4 26 M8 14 L12 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 26 Q8 32 13 26 Z" fill="currentColor" opacity="0.85" />
      {/* Đĩa cân bên phải */}
      <path d="M40 14 L36 26 M40 14 L44 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M35 26 Q40 32 45 26 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

/**
 * Họa tiết hoa sen chìm góc chân trang
 */
export function LotusWatermark({ className = "w-28 h-28 opacity-15" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 15 C55 35 70 50 85 55 C70 60 58 75 50 90 C42 75 30 60 15 55 C30 50 45 35 50 15 Z"
        fill="currentColor"
      />
      <path
        d="M50 30 C53 45 62 55 75 60 C62 65 55 78 50 88 C45 78 38 65 25 60 C38 55 47 45 50 30 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M50 45 C52 55 58 62 66 65 C58 68 53 76 50 84 C47 76 42 68 34 65 C42 62 48 55 50 45 Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

/**
 * Con dấu son đỏ "DÂN VI BẢN" / "LẬP QUỐC"
 */
export function HeritageSeal({ text = "DÂN VI BẢN", className = "w-10 h-10" }: { text?: string; className?: string }) {
  return (
    <div
      className={`border-2 border-primary/80 text-primary font-serif font-black flex items-center justify-center p-1 rounded-sm rotate-[-3deg] select-none shadow-xs ${className}`}
      title={text}
    >
      <div className="border border-primary/50 w-full h-full flex flex-col items-center justify-center text-[8px] leading-tight font-serif tracking-widest uppercase">
        {text.split(" ").map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}
