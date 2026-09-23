export interface PresentationSection {
  title: string;
  description?: string;
  points?: string[];
  subSections?: {
    title: string;
    content: string;
    bullets?: string[];
  }[];
  quote?: {
    text: string;
    author: string;
    context?: string;
  };
  visualHint?: string;
}

export interface ChapterContent {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  lead: string;
  sections: PresentationSection[];
  visualSummary?: {
    heroImageName: string;
    heroImageAlt: string;
    infographicId: string;
    infographicTitle: string;
    motionDescription: string;
  };
}

export interface PresentationData {
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    quote: string;
    author: string;
    sourceContext: string;
    scrollHint: string;
  };
  chapters: ChapterContent[];
  conclusion: {
    title: string;
    subtitle: string;
    summaryBullets: string[];
    finalQuote: {
      text: string;
      author: string;
      context: string;
    };
  };
}

export const PRESENTATION_CONTENT: PresentationData = {
  hero: {
    eyebrow: "CÔNG TRÌNH NGHIÊN CỨU HỌC THUẬT & TRUYỀN THÔNG SỐ",
    title: "Tư tưởng Hồ Chí Minh",
    titleHighlight: "về Nhà nước của dân, do dân và vì dân",
    quote:
      "Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân. Công cuộc đổi mới, xây dựng là trách nhiệm của dân. Sự nghiệp kháng chiến, kiến quốc là công việc của dân. Chính quyền từ xã đến Chính phủ trung ương do dân cử ra. Đoàn thể từ Trung ương đến xã do dân tổ chức nên. Nói tóm lại, quyền hành và lực lượng đều ở nơi dân.",
    author: "Hồ Chí Minh",
    sourceContext: "Báo Sự thật, số 120, ngày 20/10/1949",
    scrollHint: "Cuộn chuột để bắt đầu hành trình tương tác",
  },

  chapters: [
    {
      id: "dan-chu",
      number: "4.2.1",
      title: "Nhà nước dân chủ",
      subtitle:
        "Bản chất giai cấp, quyền làm chủ và sứ mệnh phục vụ của Nhà nước mới — Người trình bày: Gia, Trọng (Trang 79–83)",
      lead:
        "II. TƯ TƯỞNG HỒ CHÍ MINH VỀ NHÀ NƯỚC CỦA NHÂN DÂN, DO NHÂN DÂN, VÌ NHÂN DÂN: Trong tư tưởng Hồ Chí Minh, dân chủ vừa là bản chất cốt lõi của chế độ chính trị mới, vừa là mục tiêu tối thượng và động lực quyết định sự phát triển của cách mạng Việt Nam.",
      sections: [
        {
          title: "a. Bản chất giai cấp của Nhà nước",
          description:
            "Theo tư tưởng Hồ Chí Minh, Nhà nước Việt Nam là nhà nước dân chủ, mang bản chất giai cấp công nhân; không phải là 'nhà nước toàn dân' phi giai cấp. Bản chất giai cấp công nhân được thể hiện sâu sắc trên ba phương diện cốt lõi:",
          points: [
            "Đảng Cộng sản giữ vai trò cầm quyền: Đảng Cộng sản Việt Nam giữ vị trí và vai trò cầm quyền. Lời nói đầu của bản Hiến pháp năm 1959 khẳng định: 'Nhà nước của ta là Nhà nước dân chủ nhân dân, dựa trên nền tảng liên minh công nông, do giai cấp công nhân lãnh đạo'. Đảng cầm quyền bằng phương thức thích hợp sau đây: (1) Bằng đường lối, quan điểm, chủ trương để Nhà nước thể chế hóa thành pháp luật, chính sách, kế hoạch; (2) Bằng hoạt động của các tổ chức đảng và đảng viên của mình trong bộ máy, cơ quan nhà nước; (3) Bằng công tác kiểm tra.",
            "Tính định hướng XHCN: Đưa đất nước phát triển đi lên chủ nghĩa xã hội và chủ nghĩa cộng sản là mục tiêu cách mạng nhất quán của Hồ Chí Minh.",
            "Nguyên tắc vận hành: Tổ chức và hoạt động theo nguyên tắc tập trung dân chủ, vừa phát huy dân chủ rộng rãi, vừa bảo đảm sự lãnh đạo tập trung và thống nhất quyền lực.",
          ],
          subSections: [
            {
              title:
                "Sự thống nhất biện chứng giữa bản chất giai cấp công nhân với tính nhân dân và tính dân tộc",
              content:
                "Bản chất giai cấp công nhân của Người về Nhà nước mới ở Việt Nam là Nhà nước thống nhất với tính nhân dân và tính dân tộc sâu sắc, thể hiện cụ thể như sau:",
              bullets: [
                "Nhà nước Việt Nam ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của rất nhiều thế hệ người Việt Nam, của toàn thể dân tộc. Nhà nước Việt Nam mới không phải của riêng giai cấp, tầng lớp nào, mà là thuộc về nhân dân.",
                "Nhà nước Việt Nam ngay từ khi ra đời đã xác định rõ và luôn kiên trì, nhất quán mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi của dân tộc làm nền tảng.",
                "Đảm đương nhiệm vụ tổ chức toàn dân tiến hành các cuộc kháng chiến bảo vệ độc lập và xây dựng một nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.",
              ],
            },
          ],
        },
        {
          title: "b. 1. Nhà nước của nhân dân",
          description:
            "Nhà nước của nhân dân là nhà nước mà tất cả mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân. Nguyên lý 'dân là chủ' khẳng định vị thế tối cao của nhân dân trong xã hội và Nhà nước mới.",
          quote: {
            text: "Trong Nhà nước Việt Nam Dân chủ Cộng hòa của chúng ta, tất cả mọi quyền lực đều là của nhân dân.",
            author: "Hồ Chí Minh",
            context: "Nguyên lý hiến định khẳng định vị thế tối cao của nhân dân",
          },
          points: [
            "Hai hình thức thực thi quyền lực dân chủ: Dân chủ trực tiếp (Nhân dân trực tiếp quyết định mọi vấn đề liên quan đến vận mệnh của quốc gia, dân tộc và quyền lợi của dân chúng) và Dân chủ gián tiếp (Nhân dân thực thi quyền lực của mình thông qua các đại diện mà họ lựa chọn, bầu ra và những thiết chế quyền lực mà họ lập nên).",
            "Quyền lực nhà nước là 'thừa ủy quyền' của nhân dân: Tự bản thân nhà nước không có quyền lực. Quyền lực của nhà nước là do nhân dân ủy thác. Các cơ quan quyền lực nhà nước cùng với đội ngũ cán bộ cần có trách nhiệm 'gánh vác việc chung cho dân, chứ không phải để đè đầu dân'.",
            "Nhân dân có quyền kiểm soát, phê bình nhà nước, có quyền bãi miễn những đại biểu mà họ đã lựa chọn, bầu ra và có quyền giải tán những thiết chế quyền lực mà họ đã lập nên nếu không còn xứng đáng với sự tín nhiệm.",
            "Luật pháp dân chủ là công cụ thực thi quyền lực của nhân dân, là phương tiện sắc bén để kiểm soát quyền lực nhà nước.",
          ],
          subSections: [
            {
              title: "Cán bộ là người đầy tớ, công bộc của dân và quyền đuổi Chính phủ",
              content:
                "Theo quan điểm của Hồ Chí Minh, trong hình thức dân chủ đại diện, mối quan hệ giữa nhân dân và đội ngũ cán bộ công quyền được xác lập rành mạch:",
              bullets: [
                "Theo Hồ Chí Minh: 'Dân làm chủ thì Chủ tịch, Bộ trưởng, thứ trưởng, uỷ viên này uỷ viên khác là làm gì? Làm đầy tớ. Làm đầy tớ cho nhân dân, chứ không phải là làm quan cách mạng'.",
                "Người căn dặn: 'Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ. Trong bộ máy cách mạng, từ người quét nhà, nấu ăn cho đến Chủ tịch một nước đều là phân công làm đầy tớ cho dân'.",
                "Chủ tịch Hồ Chí Minh khẳng định: 'Bác mong đồng bào giúp đỡ, đôn đốc, kiểm soát và phê bình để làm trọn nhiệm vụ của mình là người đầy tớ trung thành tận tụy của nhân dân trong Nhà nước đó, nhân dân có quyền bãi miễn đại biểu Quốc hội và đại biểu Hội đồng nhân dân nếu những đại biểu ấy tỏ ra không xứng đáng với sự tín nhiệm của nhân dân, thậm chí nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ'.",
                "Đội ngũ cán bộ là công bộc của nhân dân, tuyệt đối không được quan liêu, hách dịch hay cậy quyền cậy thế.",
              ],
            },
          ],
        },
        {
          title: "2. Nhà nước do nhân dân",
          description:
            "Nhà nước do nhân dân trước hết là nhà nước do nhân dân xây dựng, lập nên sau thắng lợi của cách mạng, dựa trên nền tảng pháp lý dân chủ và thông qua các quyền bầu cử, phúc quyết. Nhân dân tham gia vào các công việc của Nhà nước và có quyền kiểm tra, giám sát hoạt động của bộ máy nhà nước.",
          subSections: [
            {
              title: "Mối quan hệ hữu cơ giữa 'Là chủ' và 'Làm chủ'",
              content:
                "Chủ tịch Hồ Chí Minh khẳng định: Nhân dân không chỉ ở vị thế 'là chủ' mà còn phải tích cực 'làm chủ'. Quyền làm chủ luôn gắn với nghĩa vụ công dân:",
              bullets: [
                "Tuân thủ Hiến pháp và pháp luật của Nhà nước.",
                "Chấp hành kỷ luật lao động, giữ gìn trật tự trị an chung.",
                "Đóng góp đúng kỳ, đúng số để xây dựng lợi ích chung.",
                "Hăng hái tham gia công việc chung, bảo vệ tài sản công cộng và bảo vệ Tổ quốc.",
              ],
            },
            {
              title: "Trách nhiệm của Nhà nước đối với năng lực làm chủ của nhân dân",
              content:
                "Nhà nước phải tạo điều kiện để nhân dân thực hiện đầy đủ quyền làm chủ; đồng thời coi trọng giáo dục nhân dân, nâng cao dân trí và năng lực làm chủ của nhân dân.",
            },
          ],
        },
        {
          title: "3. Nhà nước vì nhân dân",
          description:
            "Mục tiêu cao nhất của Nhà nước là phục vụ nhân dân. Nhà nước vì nhân dân là nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền, đặc lợi, thực sự trong sạch, cần, kiệm, liêm, chính. Mọi hoạt động của Nhà nước phải hướng tới tự do và hạnh phúc của nhân dân.",
          quote: {
            text: "Việc gì có lợi cho dân thì ta phải hết sức làm. Việc gì có hại cho dân thì ta phải hết sức tránh.",
            author: "Chủ tịch Hồ Chí Minh",
            context:
              "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (Báo Cứu quốc số 69, ngày 17/10/1945)",
          },
          subSections: [
            {
              title: "Thước đo lòng dân và phẩm chất người cán bộ",
              content:
                "Thước đo của Nhà nước vì dân là được lòng dân, được dân tin, dân mến, dân yêu. Cán bộ phải gần dân, hiểu dân, phục vụ dân:",
              bullets: [
                "Bộ máy nhà nước không có đặc quyền, đặc lợi, thực sự trong sạch, gương mẫu thực hành Cần, Kiệm, Liêm, Chính, Chí công vô tư.",
                "Cán bộ nhà nước vừa là người đầy tớ trung thành, tận tụy phục vụ nhân dân, vừa là người lãnh đạo có trí tuệ, sáng suốt, nhìn xa trông rộng, gần gũi nhân dân và biết trọng dụng hiền tài.",
                "Người cán bộ phải có đủ cả đức và tài: lấy đức làm gốc và trau dồi tài năng để hoàn thành tốt trọng trách phụng sự nhân dân.",
              ],
            },
          ],
        },
      ],
      visualSummary: {
        heroImageName: "nha-nuoc-dan-chu-hero.webp",
        heroImageAlt: "Không gian lịch sử Tổng tuyển cử ngày 6/1/1946 tại Hà Nội",
        infographicId: "infographic-cua-do-vi-dan",
        infographicTitle: "Sơ đồ chuyển hóa quyền lực: Của dân - Do dân - Vì dân",
        motionDescription:
          "Sơ đồ tương tác lan tỏa từ tâm điểm 'NHÂN DÂN' ra 4 nhánh: Là chủ, Làm chủ, Ủy quyền, Giám sát.",
      },
    },

    {
      id: "phap-quyen",
      number: "4.2.2",
      title: "Nhà nước pháp quyền",
      subtitle:
        "Nền tảng hợp hiến, quản trị thượng tôn pháp luật và tinh thần nhân nghĩa — Người trình bày: Chí Hiếu (Trang 83–86)",
      lead:
        "Tư tưởng Hồ Chí Minh về Nhà nước pháp quyền là sự kết hợp nhuần nhuyễn giữa tính nghiêm minh của pháp luật với tinh thần nhân văn, nhân đạo vì con người, xây dựng và điều hành xã hội trên nền tảng Hiến pháp và pháp luật dân chủ.",
      sections: [
        {
          title: "a. Nhà nước hợp hiến, hợp pháp",
          description:
            "Hồ Chí Minh luôn chú trọng xây dựng nền tảng pháp lý cho Nhà nước Việt Nam mới vì Người sớm thấy rõ tầm quan trọng của Hiến pháp và pháp luật trong đời sống chính trị - xã hội. Khi trở thành người đứng đầu Nhà nước, Người càng quan tâm bảo đảm Nhà nước được tổ chức, vận hành phù hợp với pháp luật và điều hành xã hội bằng pháp luật.",
          points: [
            "Biểu hiện sớm: Thể hiện qua bản Yêu sách của nhân dân An Nam gửi đến Hội nghị Vécxây (Pháp) năm 1919 với các yêu cầu: (1) Cải cách nền pháp lý ở Đông Dương, giúp người bản xứ được hưởng bảo đảm về pháp luật như người Châu Âu; (2) Xoá bỏ các toà án đặc biệt dùng làm công cụ khủng bố, áp bức người dân An Nam; (3) Thay thế chế độ ra sắc lệnh bằng chế độ ra các đạo luật.",
            "Thực tiễn hành động 3/9/1945: Ngay ngày 3/9/1945 (một ngày sau Tuyên ngôn độc lập), trong phiên họp đầu tiên của Chính phủ lâm thời, Người đề nghị Tổng tuyển cử với chế độ phổ thông đầu phiếu để lập Quốc hội, từ đó lập Chính phủ và bộ máy hợp hiến. Điều này tạo cơ sở pháp lý vững chắc để làm việc với quân Đồng Minh, quan hệ quốc tế bình đẳng và thiết lập cơ chế quyền lực hợp pháp.",
            "Tổng tuyển cử ngày 6/1/1946: Tiến hành thành công rực rỡ theo chế độ phổ thông đầu phiếu, trực tiếp, bỏ phiếu kín cho tất cả công dân từ 18 tuổi trở lên trên toàn quốc.",
            "Quốc hội khóa I (ngày 2/3/1946): Họp phiên đầu tiên, thành lập bộ máy Nhà nước và bầu Hồ Chí Minh làm Chủ tịch Chính phủ liên hiệp đầu tiên có đầy đủ tư cách pháp lý đối nội, đối ngoại; tiếp đó thông qua bản Hiến pháp năm 1946 lịch sử (và sau này là Hiến pháp 1959).",
          ],
        },
        {
          title: "b. Nhà nước thượng tôn pháp luật",
          description:
            "Nhà nước quản lý xã hội bằng nhiều biện pháp, nhưng quan trọng nhất là bằng Hiến pháp và pháp luật. Pháp luật là công cụ quyền lực của nhân dân, bảo vệ quyền làm chủ và phương tiện kiểm soát quyền lực nhà nước:",
          subSections: [
            {
              title: "Nâng cao công tác lập pháp",
              content:
                "Hồ Chí Minh 2 lần tham gia chỉ đạo soạn thảo Hiến pháp (Hiến pháp năm 1946 và Hiến pháp 1959). Người đã ký lệnh công bố 16 đạo luật, 613 sắc lệnh (trong đó có 243 sắc lệnh về tổ chức Nhà nước và pháp luật) cùng nhiều văn bản dưới luật, thể hiện sự coi trọng đặc biệt đối với công tác lập pháp.",
            },
            {
              title: "Đưa pháp luật vào cuộc sống & thực thi pháp luật",
              content:
                "Nâng cao trình độ hiểu biết, ý thức tuân thủ pháp luật của nhân dân. Pháp luật là công cụ quyền lực của dân, giúp dân 'biết hưởng quyền dân chủ, biết dùng quyền dân chủ, dám nói, dám làm'. Chú trọng giáo dục pháp luật (đặc biệt cho thế hệ trẻ) và nâng cao dân trí.",
            },
            {
              title: "Tính nghiêm minh của pháp luật",
              content:
                "Pháp luật vừa khoan hồng với người cải tà quy chính, vừa 'thẳng tay trừng trị những tên Việt gian đầu sỏ'. Yêu cầu người thực thi pháp luật phải công tâm, nghiêm minh. Phê phán hiện tượng 'thưởng quá rộng, phạt không nghiêm', lẫn lộn giữa công và tội.",
            },
            {
              title: "Phát huy vai trò giám sát & nêu gương",
              content:
                "Khuyến khích nhân dân phê bình, giám sát Nhà nước thực thi pháp luật. Cán bộ (đặc biệt là ngành hành pháp, tư pháp) phải nêu gương 'phụng công, thủ pháp, chí công, vô tư'. Bản thân Bác luôn tự giác chấp hành Hiến pháp và pháp luật như một thói quen, lối ứng xử tự nhiên.",
            },
          ],
        },
        {
          title: "c. Pháp quyền nhân nghĩa",
          description:
            "Pháp quyền nhân nghĩa là Nhà nước phải tôn trọng, bảo đảm thực hiện đầy đủ quyền con người, chăm lo lợi ích cho mọi người. Pháp luật trong Nhà nước pháp quyền phải là pháp luật vì con người:",
          points: [
            "Đảm bảo toàn diện quyền con người: Bác tiếp cận quyền con người từ quyền tự nhiên (cao nhất là quyền sống) đến các quyền chính trị, dân sự, kinh tế, văn hóa, xã hội. Mọi mục tiêu cách mạng nhằm giải phóng con người, giúp con người có cuộc sống hạnh phúc, tự do.",
            "Quan tâm đến quyền công dân nói chung và các nhóm cụ thể: Chăm lo chu đáo quyền của phụ nữ, trẻ em, đồng bào dân tộc thiểu số và những nhóm người yếu thế trong xã hội.",
            "Tính nhân văn và khuyến thiện của pháp luật: Ngay khi thành lập, Chính phủ lâm thời xóa bỏ mọi luật pháp hà khắc của thực dân.",
            "Pháp luật nghiêm minh nhưng khách quan, công bằng, tuyệt đối chống đối xử dã man. Kể cả kẻ phản bội Tổ quốc, Bác tuyên bố sẽ tha thứ hay trừng trị theo luật pháp chứ 'không có ai bị tàn sát'.",
            "Lấy giáo dục, cảm hóa, thức tỉnh con người làm căn bản; xây dựng dựa trên nền tảng đạo đức xã hội và truyền thống nhân nghĩa tốt đẹp của dân tộc.",
          ],
        },
      ],
      visualSummary: {
        heroImageName: "nha-nuoc-phap-quyen-hero.webp",
        heroImageAlt: "Bản Hiến pháp năm 1946 cùng bút ký và con dấu pháp lý lịch sử",
        infographicId: "infographic-phap-quyen-ba-tang",
        infographicTitle: "Ba tầng cấu trúc Nhà nước pháp quyền theo Tư tưởng Hồ Chí Minh",
        motionDescription:
          "Mô hình cán cân công lý chuyển động từ trạng thái nghiêng lệch sang cân bằng tuyệt đối khi cuộn tới nội dung Nghiêm minh & Nhân nghĩa.",
      },
    },

    {
      id: "trong-sach-vung-manh",
      number: "4.2.3",
      title: "Nhà nước trong sạch, vững mạnh",
      subtitle:
        "Kiểm soát quyền lực, phòng chống tiêu cực và phương châm xây đi đôi với chống (Trang 86–90)",
      lead:
        "Theo tư tưởng Hồ Chí Minh, xây dựng một Nhà nước trong sạch, vững mạnh không chỉ là xây dựng một bộ máy hoạt động hiệu quả mà còn phải kiểm soát quyền lực và phòng, chống các biểu hiện tiêu cực. Quyền lực nhà nước phải được thực hiện đúng mục đích, đúng pháp luật và hướng đến lợi ích của nhân dân. Đồng thời, cán bộ, công chức phải có trách nhiệm, đạo đức và không được lợi dụng chức vụ để phục vụ lợi ích cá nhân.",
      sections: [
        {
          title: "1. Kiểm soát quyền lực nhà nước (Slide 1 — 4)",
          description:
            "Thông điệp cốt lõi: QUYỀN LỰC ↓ KIỂM SOÁT ↓ TRÁCH NHIỆM ↓ NIỀM TIN NHÂN DÂN. Theo Hồ Chí Minh, quyền lực là cần thiết để Nhà nước thực hiện chức năng quản lý xã hội, nhưng quyền lực nếu không được kiểm soát có thể dẫn đến lạm quyền, lộng quyền hoặc chuyên quyền. Vì vậy, người được giao quyền lực không được tự ý sử dụng quyền lực theo ý muốn cá nhân mà phải chịu sự kiểm tra, giám sát và tuân thủ pháp luật. Nhấn mạnh: 'Có quyền lực nhưng không có nghĩa là có quyền tuyệt đối.'",
          subSections: [
            {
              title: "Ai kiểm soát quyền lực nhà nước? (Slide 3)",
              content:
                "Việc kiểm soát quyền lực không chỉ được thực hiện bởi một cá nhân hay một cơ quan mà cần có nhiều cơ chế và chủ thể cùng tham gia. Trong tư tưởng Hồ Chí Minh, việc kiểm soát quyền lực gắn với vai trò của Đảng, Nhà nước và nhân dân:",
              bullets: [
                "Kiểm soát của Đảng: Kiểm tra, giám sát cán bộ, đảng viên trong bộ máy nhà nước; kiểm tra việc thực thi đường lối.",
                "Kiểm soát trong bộ máy nhà nước: Pháp luật – Quy định – Kiểm tra trong nội bộ bộ máy, cơ chế kiểm soát giữa các cơ quan quyền lực.",
                "Kiểm soát của nhân dân: Tham gia – Giám sát – Phản ánh. Trong đó, nhân dân là chủ thể của quyền lực nhà nước, vì vậy kiểm soát của nhân dân và giám sát của nhân dân là quyền tối cao đối với toàn bộ hoạt động của Nhà nước.",
              ],
            },
            {
              title: "Nhân dân kiểm soát quyền lực như thế nào? (Slide 4)",
              content:
                "Nhân dân không trực tiếp điều hành tất cả hoạt động của Nhà nước nhưng có quyền tham gia quản lý xã hội, đóng góp ý kiến, kiểm tra, giám sát và phản ánh những hành vi sai phạm:",
              bullets: [
                "Khi phát hiện cán bộ hoặc cơ quan có dấu hiệu vi phạm, người dân có thể phản ánh, khiếu nại hoặc tố cáo đến cơ quan, người có thẩm quyền theo quy định.",
                "Người dân không nhất thiết phải phản ánh cho chính người bị phản ánh.",
                "Nguyên tắc cốt tử: 'Người có quyền lực cũng phải chịu sự kiểm soát'.",
              ],
            },
          ],
        },
        {
          title: "2. Vì sao phải phòng, chống tiêu cực & Những biểu hiện tiêu cực khác (Slide 5 — 6)",
          description:
            "Theo Hồ Chí Minh, những biểu hiện tiêu cực trong bộ máy Nhà nước có thể làm suy yếu hiệu quả hoạt động của Nhà nước và ảnh hưởng đến niềm tin của nhân dân. Vì vậy, muốn xây dựng Nhà nước trong sạch, vững mạnh thì phải chủ động phát hiện và ngăn chặn những biểu hiện tiêu cực, đặc biệt là tham ô, lãng phí và quan liêu ('giặc nội xâm', 'giặc ở trong lòng'):",
          points: [
            "Đặc quyền, đặc lợi: Cậy mình có chức, có quyền; cửa quyền, hách dịch, hạch sách nhân dân; lợi dụng chức vụ để mưu cầu lợi ích cá nhân, xa rời mục tiêu phục vụ nhân dân.",
            "Tham ô: Lợi dụng chức vụ, quyền hạn để chiếm đoạt tài sản công của Nhà nước và nhân dân dùng vào việc tư.",
            "Lãng phí: Sử dụng nguồn lực không hiệu quả, làm thất thoát lãng phí sức lao động, thời gian và tiền của Nhà nước và nhân dân.",
            "Quan liêu: Xa thực tế, xa nhân dân, chỉ dựa vào hội họp, chỉ thị, báo cáo trên giấy tờ; quan liêu là nguồn gốc dung túng, che chở cho tham ô và lãng phí.",
            "Tư túng, chia rẽ, kiêu ngạo: Tư túng (thiên vị người thân, phe nhóm hoặc lợi ích riêng, đưa người thân quen thiếu năng lực vào cơ quan nhà nước); Chia rẽ (gây mất đoàn kết trong tập thể, kéo bè kết phái, bài trừ người có năng lực nhưng không cùng phe phái); Kiêu ngạo (có chức vụ rồi coi thường người khác, tự cho mình là đúng, tự thị, không lắng nghe ý kiến đóng góp của quần chúng).",
          ],
        },
        {
          title: "3. Nguyên nhân của các hiện tượng tiêu cực",
          description:
            "Để phòng chống tiêu cực hiệu quả, Chủ tịch Hồ Chí Minh đã chỉ rõ căn nguyên trên cả hai phương diện chủ quan và khách quan:",
          subSections: [
            {
              title: "Nguyên nhân chủ quan (Gốc rễ bên trong)",
              content:
                "Bắt nguồn từ Chủ nghĩa cá nhân — căn bệnh mẹ đẻ ra trăm thứ bệnh nguy hiểm khác; cán bộ thiếu tu dưỡng, rèn luyện đạo đức cách mạng; ham danh, ham lợi, cậy quyền cậy thế; thiếu tinh thần trách nhiệm trước công việc và nhân dân.",
            },
            {
              title: "Nguyên nhân khách quan (Tác động bên ngoài)",
              content:
                "Công tác cán bộ chưa tốt; tổ chức và vận hành bộ máy chưa khoa học; sự phối hợp giữa Đảng và Nhà nước chưa hiệu quả; trình độ phát triển đời sống xã hội còn thấp; tàn dư tư tưởng của chế độ thực dân, phong kiến còn nặng nề; sự chống phá, mua chuộc của các thế lực thù địch.",
            },
          ],
        },
        {
          title: "4. Phương châm 'Xây đi đôi với Chống' & Biện pháp phòng chống tiêu cực (Slide 7 — 9)",
          description:
            "Theo tư tưởng Hồ Chí Minh, xây dựng Nhà nước trong sạch không thể chỉ tập trung vào việc 'xây' mà phải đồng thời thực hiện 'chống'. Xây là xây dựng Nhà nước dân chủ, có pháp luật, bộ máy hoạt động hiệu quả và đội ngũ cán bộ có đạo đức, trách nhiệm. Chống là chống tham ô, lãng phí, quan liêu, chủ nghĩa cá nhân và những hành vi lợi dụng quyền lực. 'Xây' để tạo ra cái tốt – 'Chống' để loại bỏ cái xấu.",
          points: [
            "01 — Phát huy dân chủ: Nâng cao trình độ dân chủ trong xã hội, tạo điều kiện thuận lợi để nhân dân tham gia rộng rãi và trực tiếp giám sát hoạt động của Nhà nước.",
            "02 — Tăng cường pháp luật, kiểm tra và giám sát: Quyền lực phải được đặt trong khuôn khổ pháp luật và có cơ chế kiểm tra thường xuyên, chặt chẽ.",
            "03 — Xử lý nghiêm minh: Sai phạm phải được phát hiện và xử lý đúng người, đúng mức độ, không có vùng cấm, không có ngoại lệ.",
            "04 — Cán bộ phải nêu gương: Người có chức vụ càng cao càng phải có trách nhiệm làm gương, hành động của người lãnh đạo có ảnh hưởng trực tiếp đến tập thể.",
            "05 — Phát huy sức mạnh của nhân dân: Động viên nhân dân tham gia phát hiện, phản ánh và đấu tranh kiên quyết với những biểu hiện tiêu cực.",
          ],
          quote: {
            text: "Cán bộ phải vừa có đức, vừa có tài, trong đó đức là gốc.",
            author: "Hồ Chí Minh",
            context: "Slide 9 — Nêu cao chuẩn mực đạo đức công vụ và trách nhiệm nêu gương của người lãnh đạo",
          },
        },
      ],
      visualSummary: {
        heroImageName: "nha-nuoc-trong-sach-vung-manh-hero.webp",
        heroImageAlt: "Không gian cơ quan hành chính minh bạch, hồ sơ kiểm tra công vụ",
        infographicId: "infographic-quyen-luc-kiem-soat-niem-tin",
        infographicTitle: "Chuỗi giá trị: Quyền lực → Kiểm soát → Trách nhiệm → Niềm tin",
        motionDescription:
          "Sơ đồ mạng kiểm soát quyền lực ba lớp: Đảng, Bộ máy nhà nước và Nhân dân kết nối chặt chẽ.",
      },
    },

    {
      id: "xay-dung-dang",
      number: "4.3.1",
      title: "Xây dựng Đảng thật sự trong sạch, vững mạnh",
      subtitle:
        "Hạt nhân lãnh đạo, tính tiền phong gương mẫu & đạo đức cách mạng — Người trình bày: Minh Hiếu (Trang 90–91)",
      lead:
        "Đảng Cộng sản Việt Nam giữ vai trò cầm quyền, lãnh đạo Nhà nước và xã hội. Sự nghiệp cách mạng và công cuộc đổi mới có thành công hay không hoàn toàn phụ thuộc vào chất lượng, năng lực lãnh đạo và sự trong sạch của bản thân Đảng. Muốn Nhà nước trong sạch, vững mạnh thì tiền đề quyết định trước hết là Đảng phải thực sự trong sạch, vững mạnh, là đạo đức, là văn minh.",
      sections: [
        {
          title: "(1) Phương diện đường lối: Phải đề ra đường lối, chủ trương đúng đắn",
          description:
            "Tầm quan trọng sinh tử: Giáo trình nhấn mạnh câu châm ngôn kinh điển: 'Sai một ly thì đi một dặm, đó là tầm quan trọng của đường lối, chủ trương của Đảng'. Một đường lối sai lầm về chính trị hoặc kinh tế sẽ kéo lùi sự phát triển của cả dân tộc, làm tổn hại sinh mạng và hạnh phúc của hàng chục triệu người dân. Cơ sở khoa học để hoạch định đường lối đúng đắn:",
          points: [
            "Phải kiên định và vận dụng sáng tạo nền tảng lý luận chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh vào điều kiện thực tiễn khách quan của đất nước.",
            "Phải xuất phát từ điều kiện thực tiễn khách quan của đất nước, tôn trọng quy luật kinh tế - xã hội trong từng thời kỳ, từng giai đoạn lịch sử cụ thể.",
            "Phải xuất phát từ lợi ích chân chính của nhân dân lao động: 'Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh'.",
          ],
        },
        {
          title: "(2) Phương diện tổ chức, thực hiện: Phải tổ chức thực hiện thật tốt đường lối, chủ trương của Đảng",
          description:
            "Đề ra đường lối đúng mới chỉ là một nửa chặng đường; khâu tổ chức thực hiện có ý nghĩa quyết định thắng lợi trong thực tế. Nội dung tổ chức thực hiện bao gồm:",
          points: [
            "Phải thể chế hóa đường lối của Đảng thành chính sách, pháp luật của Nhà nước và các đề án, kế hoạch hành động cụ thể.",
            "Phải biến đường lối thành hành động tích cực, tự giác của tất cả các tổ chức trong hệ thống chính trị và mọi tầng lớp nhân dân.",
            "Thực thi và phát huy đầy đủ vai trò, trách nhiệm của đội ngũ cán bộ, đảng viên, đặc biệt là đội ngũ cán bộ cấp chiến lược.",
            "Nêu cao trách nhiệm làm gương của người đứng đầu: Giáo trình chỉ rõ: 'Đặc biệt quan trọng nữa là người đứng đầu phải nêu cao trách nhiệm làm gương tốt để mọi người noi theo'. Hồ Chí Minh từng căn dặn: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'.",
          ],
        },
        {
          title: "(3) Phương diện công tác chỉnh đốn Đảng: Phải chú trọng hơn nữa công tác chỉnh đốn nội bộ",
          description:
            "Tính tất yếu sống còn: Giáo trình khẳng định sự nghiệp cách mạng và công cuộc đổi mới có thành công hay không hoàn toàn phụ thuộc vào chất lượng, năng lực lãnh đạo và sự trong sạch của bản thân Đảng. Thường xuyên tự chỉnh đốn nội bộ để Đảng luôn xứng đáng là người cầm quyền; để mỗi đảng viên luôn xứng đáng 'vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân'. Giữ vững bản chất cao quý của Đảng: Làm cho Đảng luôn luôn là 'Đảng là đạo đức, là văn minh' như Hồ Chí Minh đã khẳng định. Khắc phục khâu yếu kém nhất hiện nay: 'Cái thiếu nhất hiện nay là sự thống nhất giữa nói và làm trong Đảng'. Tăng cường kiểm tra, giám sát nhằm bảo đảm Đảng sử dụng và phát huy đúng đắn quyền lực chính trị do Nhân dân giao phó, phục vụ cho sự phát triển của dân tộc, đưa đất nước tiến những bước vững chắc lên chủ nghĩa xã hội, làm cho đất nước hùng cường, nhân dân ấm no, tự do, hạnh phúc.",
          quote: {
            text: "Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân.",
            author: "Chủ tịch Hồ Chí Minh",
            context: "Bản Di chúc lịch sử (1969)",
          },
        },
        {
          title: "(4) Phương diện phát triển và trách nhiệm của sinh viên",
          description:
            "Thế hệ trẻ, sinh viên là lực lượng kế tục sự nghiệp cách mạng, là nguồn cán bộ tương lai của Đảng và Nhà nước:",
          points: [
            "Đối với sinh viên đang là đảng viên: Cần chú trọng thực hiện thật tốt đường lối, quan điểm, chủ trương, Điều lệ Đảng; gương mẫu trong học tập và rèn luyện; phải là công dân gương mẫu và là sinh viên tốt.",
            "Đối với sinh viên chưa là đảng viên: Cần tích cực nghiên cứu, học tập thật tốt lý luận chính trị và tư tưởng Hồ Chí Minh; tu dưỡng đạo đức cách mạng; phấn đấu trở thành đảng viên Đảng Cộng sản Việt Nam hoặc người công dân tích cực ủng hộ Đảng, góp phần đưa nước nhà 'sánh vai với các cường quốc năm châu' như Bác Hồ đã gửi gắm trong Thư gửi học sinh nhân ngày khai trường đầu tiên (tháng 9/1945).",
          ],
        },
      ],
      visualSummary: {
        heroImageName: "xay-dung-dang-hero.webp",
        heroImageAlt: "Văn kiện lịch sử và con đường phát triển của cách mạng Việt Nam",
        infographicId: "infographic-duong-loi-den-hanh-dong",
        infographicTitle: "Quy trình chuyển hóa: Đường lối → Thể chế hóa → Hành động → Kiểm tra",
        motionDescription:
          "Timeline tương tác minh họa các bước đưa nghị quyết vào đời sống thực tiễn.",
      },
    },

    {
      id: "xay-dung-nha-nuoc",
      number: "4.3.2",
      title: "Xây dựng Nhà nước & Đổi mới phương thức lãnh đạo",
      subtitle:
        "Hoàn thiện pháp luật, tinh gọn bộ máy & kiểm soát quyền lực — Người trình bày: Đạt (Trang 91–92)",
      lead:
        "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa theo tư tưởng Hồ Chí Minh gắn liền với đẩy mạnh hoàn thiện hệ thống pháp luật, xác định rõ cơ chế phân công, phối hợp và kiểm soát quyền lực, xây dựng đội ngũ cán bộ công bộc và đổi mới phương thức lãnh đạo của Đảng đối với Nhà nước.",
      sections: [
        {
          title: "(1) Đẩy mạnh hoàn thiện hệ thống pháp luật gắn với tổ chức thi hành pháp luật",
          description:
            "Mục tiêu: Nâng cao hiệu lực, hiệu quả quản lý của Nhà nước, quản lý đất nước theo Hiến pháp và pháp luật, đồng thời coi trọng xây dựng nền tảng đạo đức xã hội.",
          points: [
            "Bản chất 'hai mặt biện chứng' của pháp luật: (1) Pháp luật là công cụ sắc bén để Nhà nước quản lý mọi mặt đời sống kinh tế - xã hội; (2) Pháp luật đồng thời là công cụ pháp lý tối thượng để Nhân dân làm chủ, kiểm tra, giám sát quyền lực nhà nước, ngăn ngừa sự tùy tiện, lộng quyền của cơ quan công quyền.",
            "Bảo vệ quyền con người, quyền công dân: Tiếp tục hoàn thiện hệ thống pháp luật theo hướng tôn trọng, bảo đảm, bảo vệ quyền con người, quyền và nghĩa vụ cơ bản của công dân.",
          ],
        },
        {
          title: "(2) Xác định rõ cơ chế phân công, phối hợp và kiểm soát quyền lực nhà nước",
          description:
            "Nguyên tắc nền tảng: Quyền lực nhà nước là thống nhất, thuộc về Nhân dân. Cơ chế vận hành phải xác định rõ sự phân công, phối hợp và kiểm soát giữa các cơ quan nhà nước:",
          points: [
            "Quyền lực nhà nước thuộc về Nhân dân — là cội nguồn của mọi quyền lực chính trị trong xã hội.",
            "Thực hiện ba nhánh quyền lực: Lập pháp (Quốc hội), Hành pháp (Chính phủ), Tư pháp (Tòa án và Viện kiểm sát).",
            "Quy định rõ hơn quyền hạn, trách nhiệm cụ thể của mỗi quyền để tránh chồng chéo hoặc đùn đẩy trách nhiệm.",
            "Phân định rành mạch thẩm quyền, trách nhiệm giữa cơ quan nhà nước ở Trung ương và địa phương; hoàn thiện cơ chế phối hợp và kiểm soát quyền lực ở từng cấp chính quyền địa phương.",
          ],
        },
        {
          title: "(3) Chú trọng công tác xây dựng đội ngũ cán bộ, công chức ('Công bộc của dân')",
          description:
            "Đảng tập trung lãnh đạo về đường lối, chủ trương, xây dựng tiêu chuẩn, cơ chế, chính sách về cán bộ, công chức. Chuẩn mực toàn diện 'vừa hồng vừa chuyên': Bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, có trình độ chuyên môn nghiệp vụ phù hợp để thực thi công vụ trong thời kỳ mới.",
          points: [
            "Đẩy mạnh dân chủ hóa công tác cán bộ; quy định rõ trách nhiệm, quyền hạn của người đứng đầu cơ quan hành chính.",
            "Thực hiện thí điểm dân trực tiếp bầu một số chức danh ở cơ sở và cấp huyện; mở rộng đối tượng thi tuyển chức danh cán bộ lãnh đạo, quản lý.",
            "Đổi mới căn bản tiêu chí đánh giá cán bộ: Lấy bản lĩnh chính trị, phẩm chất đạo đức, năng lực và hiệu quả thực tế của công việc làm thước đo để đánh giá, đề bạt, bổ nhiệm cán bộ.",
            "Xây dựng cơ chế, chính sách đãi ngộ xứng đáng, thu hút và trọng dụng nhân tài phục vụ đất nước.",
          ],
        },
        {
          title: "(4) Kiên quyết đấu tranh phòng, chống tham nhũng, lãng phí, quan liêu ('Giặc nội xâm')",
          description:
            "Nhận diện đúng bản chất hiểm họa: Bác coi tham ô, lãng phí, quan liêu là 'giặc ở trong lòng', 'giặc nội xâm' – kẻ thù phá hoại sự nghiệp cách mạng từ bên trong, làm xói mòn lòng tin sinh tử của nhân dân vào chế độ:",
          points: [
            "Kiên quyết đấu tranh chống thói quan liêu, hách dịch, cửa quyền, sách nhiễu nhân dân trong bộ máy hành chính; thực hành tiết kiệm triệt để trong các cơ quan nhà nước và trong đội ngũ cán bộ, công chức.",
            "Giữ vững nguyên tắc kỷ cương phép nước: 'Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai'.",
            "Xây dựng đồng bộ cơ chế: Cơ chế kiểm tra, giám sát để không thể tham nhũng, cơ chế xử phạt nghiêm minh để không dám tham nhũng, và chế độ đãi ngộ thỏa đáng để không cần tham nhũng.",
          ],
        },
        {
          title: "(5) Đổi mới, tăng cường sự lãnh đạo của Đảng đối với Nhà nước",
          description:
            "Tiếp tục nâng cao hiệu quả và đổi mới mạnh mẽ phương thức lãnh đạo của Đảng đối với Nhà nước:",
          points: [
            "Đảng lãnh đạo Nhà nước bằng các chủ trương, chính sách lớn; lãnh đạo thể chế hóa đường lối thành chính sách, pháp luật.",
            "Đảng lãnh đạo xây dựng đội ngũ cán bộ công chức đủ phẩm chất và năng lực; lãnh đạo tổ chức thực hiện có hiệu quả pháp luật.",
            "Tuyệt đối không bao biện làm thay, không làm thay công việc của các cơ quan nhà nước; đồng thời không buông lỏng vai trò lãnh đạo toàn diện của Đảng.",
            "Chú trọng lãnh đạo đổi mới, nâng cao chất lượng lập pháp, cải cách hành chính và cải cách tư pháp.",
            "Tính nêu gương tối cao: Mọi tổ chức Đảng và toàn thể đảng viên phải nghiêm chỉnh, gương mẫu tuân thủ Hiến pháp và pháp luật.",
            "Sự trong sạch, vững mạnh của Đảng là tiền đề tất yếu, quyết định sự thành bại của việc xây dựng Nhà nước theo tư tưởng Hồ Chí Minh.",
          ],
        },
      ],
      visualSummary: {
        heroImageName: "xay-dung-nha-nuoc-hero.webp",
        heroImageAlt: "Tòa nhà Quốc hội Việt Nam và biểu tượng Nhà nước pháp quyền hiện đại",
        infographicId: "infographic-dang-nha-nuoc-nhan-dan",
        infographicTitle: "Cơ chế vận hành: Đảng lãnh đạo - Nhà nước quản lý - Nhân dân làm chủ",
        motionDescription:
          "Sơ đồ phối hợp kiểm soát giữa 3 nhánh quyền lực Lập pháp - Hành pháp - Tư pháp trong khung quyền lực thuộc về Nhân dân.",
      },
    },

    {
      id: "phong-chong-tham-nhung",
      number: "4.3.3",
      title: "Phòng, chống tham nhũng",
      subtitle: "Nhận diện 'giặc nội xâm' và hệ giải pháp 4 trụ cột: Dân - Luật - Phạt - Gương",
      lead:
        "Tham ô, lãng phí và quan liêu là những căn bệnh nguy hại làm xói mòn niềm tin của nhân dân. Kiên quyết, kiên trì phòng, chống tham nhũng là đòi hỏi sống còn để giữ vững bản chất cách mạng và sự trong sạch, vững mạnh của Nhà nước.",
      sections: [
        {
          title: "Nhận diện vấn đề: Ba căn bệnh nguy hại",
          description:
            "Chủ tịch Hồ Chí Minh đã chỉ rõ bản chất phá hoại của ba căn bệnh tiêu cực cốt tử trong bộ máy chính quyền:",
          points: [
            "Tham ô: Lợi dụng chức vụ để chiếm đoạt tài sản công của Nhà nước và nhân dân làm của riêng.",
            "Lãng phí: Sử dụng nguồn lực không hiệu quả, làm thất thoát sức lao động, thời gian và tiền của công.",
            "Quan liêu: Xa dân, xa thực tế, chỉ dựa vào chỉ thị, giấy tờ, hội họp hình thức mà không nắm sát đời sống nhân dân.",
          ],
        },
        {
          title: "Hệ giải pháp: Bốn trụ cột cốt lõi (Dân - Luật - Phạt - Gương)",
          description:
            "Để triệt tiêu tận gốc mầm mống tham nhũng, lãng phí và quan liêu, tư tưởng Hồ Chí Minh xác lập hệ giải pháp 4 trụ cột đồng bộ:",
          points: [
            "DÂN: Nhân dân giám sát — phát huy tối đa quyền làm chủ và sự giám sát chặt chẽ của nhân dân đối với cơ quan công quyền.",
            "LUẬT: Pháp luật, kiểm tra, giám sát — hoàn thiện thể chế pháp lý, siết chặt kỷ cương, kiểm tra và kiểm toán nghiêm ngặt.",
            "PHẠT: Xử lý nghiêm minh — trừng trị thích đáng, kịp thời mọi hành vi sai phạm, không có vùng cấm, không có ngoại lệ.",
            "GƯƠNG: Cán bộ nêu gương — cán bộ, đảng viên, nhất là người đứng đầu phải nêu gương Cần, Kiệm, Liêm, Chính, chí công vô tư.",
          ],
        },
      ],
      visualSummary: {
        heroImageName: "nha-nuoc-trong-sach-vung-manh-hero.webp",
        heroImageAlt: "Không gian làm việc minh bạch, hồ sơ kiểm tra công vụ",
        infographicId: "infographic-quyen-luc-kiem-soat-niem-tin",
        infographicTitle: "Bốn trụ cột phòng chống tham nhũng: Dân - Luật - Phạt - Gương",
        motionDescription:
          "Chuyển cảnh từ vùng tối sang vùng sáng minh bạch khi các giải pháp Dân - Luật - Phạt - Gương được kích hoạt.",
      },
    },
  ],

  conclusion: {
    title: "Kết luận & Khát vọng Phụng sự",
    subtitle: "Giá trị trường tồn của Tư tưởng Hồ Chí Minh trong thời đại mới",
    summaryBullets: [
      "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân là sự kết tinh giữa tinh hoa văn hóa dân tộc, lý luận Mác - Lênin và các giá trị tiến bộ của nhân loại.",
      "Nhân dân luôn là chủ thể tối cao, là cội nguồn sức mạnh và là mục tiêu phục vụ duy nhất của toàn bộ bộ máy công quyền.",
      "Nhà nước pháp quyền phải là pháp quyền nhân nghĩa, lấy sự nghiêm minh của luật pháp kết hợp hài hòa với tinh thần nhân đạo sâu sắc vì con người.",
      "Kiểm soát quyền lực và kiên quyết bài trừ giặc nội xâm tham ô, lãng phí là điều kiện tiên quyết giữ gìn sự trong sạch, vững bền của chế độ.",
      "Xây dựng Nhà nước trong kỷ nguyên mới là sứ mệnh, trách nhiệm chung của toàn hệ thống chính trị, trong đó thế hệ trẻ, sinh viên giữ vai trò xung kích tiền phong.",
    ],
    finalQuote: {
      text: "Chúng ta phải hiểu rằng, các cơ quan của Chính phủ từ toàn quốc cho đến các làng, đều là công bộc của dân, nghĩa là để gánh vác việc chung cho dân, chứ không phải để đè đầu dân như trong thời kỳ dưới quyền thống trị của Pháp, Nhật.",
      author: "Hồ Chí Minh",
      context: "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng, ngày 17/10/1945",
    },
  },
};
