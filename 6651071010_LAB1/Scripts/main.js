/* ===================================================================
   THIẾT KẾ WEB - THỰC HÀNH LAB 1 (BUỔI 1-2)
   GV: Nguyễn Thiện Dương
   Sinh viên thực hiện: Ngô Thuận Dương
   Mã số sinh viên (MSSV): 6651071010
   Scripts/main.js - Xử lý tương tác & Giỏ hàng E-commerce Organi
=================================================================== */

'use strict';

// 1. DỮ LIỆU SẢN PHẨM MẪU (SPORTS SHOP PRODUCTS)
const SPORTS_PRODUCTS = [
  {
    id: 1,
    name: 'Giày Chạy Bộ Nike Air Zoom Pegasus 40',
    category: 'running',
    categoryName: 'Chạy Bộ',
    brand: 'Nike',
    price: 3290000,
    originalPrice: 3690000,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Dòng giày chạy biểu tượng suốt 4 thập kỷ của Nike. Công nghệ đệm khí kép Zoom Air kết hợp bọt React siêu êm ái, mang lại độ nảy tối đa cho cự ly từ 5km đến marathon 42km.',
    fullDescription: 'Nike Air Zoom Pegasus 40 tiếp tục truyền thống là mẫu giày chạy bộ "ngựa chiến" đáng tin cậy nhất mọi thời đại. Được thiết kế với form ôm chân cải tiến, đệm lót mắt cá chân êm ái và vùng đệm ngón chân thông thoáng, giúp bạn tự tin hoàn thành mọi buổi tập từ chạy cự ly ngắn hàng ngày đến đường chạy bán marathon 21km và full marathon 42km.\n\nVải dệt Mesh đa lớp được gia cố ở các vị trí chịu lực cao, đảm bảo độ thoáng khí tuyệt đối trong những ngày hè oi bức, đồng thời giữ cố định bàn chân không bị trượt bên trong thân giày.',
    specifications: [
      'Thương hiệu: Nike (Chính hãng 100%)',
      'Công nghệ đệm: Double Zoom Air Unit + Nike React Foam',
      'Chất liệu thân giày: Vải dệt Engineered Mesh đa lớp siêu nhẹ',
      'Đế ngoài: Cao su đúc nguyên khối Waffle chống trượt mài mòn',
      'Xuất xứ: Gia công tại Việt Nam chuẩn xuất khẩu quốc tế'
    ],
    sizes: ['40', '41', '42', '43'],
    colors: ['Đỏ Đen', 'Trắng Xám'],
    rating: 5,
    reviewsCount: 50,
    stock: 25,
    weight: '288g (Size 42)',
    sku: 'NK-PEG40-RED-42',
    reviews: [
      { author: 'Trần Minh Tuấn (Runner 10km)', rating: 5, comment: 'Giày mang rất ôm chân và nảy. Mình chạy 10km mà bàn chân không hề bị ê buốt. Chuẩn size, giao hàng nhanh 2h.' },
      { author: 'Lê Hoàng Nam', rating: 5, comment: 'Màu đỏ đen bên ngoài nhìn rất đẹp và mạnh mẽ. Hàng chính hãng fullbox tem tag đầy đủ.' }
    ]
  },
  {
    id: 2,
    name: 'Áo Đấu CLB Real Madrid Sân Nhà 2024/25',
    category: 'football',
    categoryName: 'Bóng Đá',
    brand: 'Adidas',
    price: 1850000,
    originalPrice: 2100000,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Mẫu áo đấu chính thức mùa giải 2024/25 của đội bóng hoàng gia Real Madrid. Ứng dụng công nghệ làm mát HEAT.RDY vượt trội, logo dệt nhiệt cao cấp sắc nét.',
    fullDescription: 'Áo đấu Real Madrid sân nhà 2024/25 mang sắc trắng truyền thống kết hợp các đường may tinh tế màu vàng kim và đen. Thiết kế tôn vinh lịch sử hào hùng cùng 15 chiếc cúp Champions League danh giá.\n\nVải dệt Jacquard họa tiết Houndstooth chìm độc đáo, công nghệ thấm hút mồ hôi siêu tốc giúp các cầu thủ và người hâm mộ luôn khô ráo, tự tin dù thi đấu hay cổ vũ trên khán đài.',
    specifications: [
      'Thương hiệu: Adidas chính hãng (Bản Player)',
      'Chất liệu: 100% Polyester tái chế cao cấp bảo vệ môi trường',
      'Công nghệ: HEAT.RDY làm mát và thông gió tối đa',
      'Huy hiệu CLB: Ép nhiệt 3D siêu nhẹ chống bong tróc',
      'Màu sắc: Trắng Hoàng Gia phối chỉ vàng kim'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Trắng Hoàng Gia'],
    rating: 5,
    reviewsCount: 38,
    stock: 20,
    weight: '160g (Size L)',
    sku: 'AD-RM25-WHT-L',
    reviews: [
      { author: 'Nguyễn Văn Hùng', rating: 5, comment: 'Áo chính hãng Adidas chất vải rất mát và xịn, logo in nổi cực đẹp. Đã in số 9 Mbappe!' },
      { author: 'Đặng Tuấn Anh', rating: 5, comment: 'Form áo chuẩn châu Á, mặc đi đá bóng hay đi cafe cuối tuần đều rất phong cách.' }
    ]
  },
  {
    id: 3,
    name: 'Giày Thể Thao Adidas Ultraboost Light 23',
    category: 'running',
    categoryName: 'Chạy Bộ',
    brand: 'Adidas',
    price: 3600000,
    originalPrice: 4200000,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Thế hệ Ultraboost nhẹ nhất từ trước đến nay với đệm Light BOOST giảm 30% trọng lượng, hoàn trả năng lượng tối thượng cho từng bước chân.',
    fullDescription: 'Trải nghiệm năng lượng bùng nổ cùng Adidas Ultraboost Light hoàn toàn mới. Thân giày vải dệt PRIMEKNIT+ ôm khít bàn chân như một đôi tất, vừa vặn nâng đỡ vòm chân và gót chân.\n\nHệ thống đĩa đệm Linear Energy Push (LEP) được tích hợp trong đế giúp tăng độ cứng khi uốn cong, hỗ trợ lực bật về phía trước hiệu quả hơn trong mỗi chu kỳ sải chân.',
    specifications: [
      'Thương hiệu: Adidas',
      'Công nghệ đệm: Hạt Light BOOST độc quyền nhẹ hơn 30%',
      'Thân giày: Adidas PRIMEKNIT+ co giãn sinh học',
      'Đế ngoài: Cao su Continental™ Rubber bám đường cả khi trời mưa',
      'Độ chênh lệch gót - mũi: 10 mm'
    ],
    sizes: ['40', '41', '42', '43'],
    colors: ['Trắng Đen', 'Xám Bạc'],
    rating: 5,
    reviewsCount: 32,
    stock: 18,
    weight: '293g (Size 42)',
    sku: 'AD-UBL23-WHT-42',
    reviews: [
      { author: 'Phạm Đức Long', rating: 5, comment: 'Đế Boost đi êm như bước trên mây, form ôm chân rất thích. Đi cả ngày không bị mỏi.' }
    ]
  },
  {
    id: 4,
    name: 'Vợt Cầu Lông Yonex Astrox 88D Pro',
    category: 'badminton',
    categoryName: 'Cầu Lông',
    brand: 'Yonex',
    price: 3950000,
    originalPrice: 4500000,
    image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Vũ khí tấn công cầu sau hủy diệt của thương hiệu Yonex Nhật Bản. Công nghệ Rotational Generator System gia tăng độ dốc và lực cắm cầu uy lực.',
    fullDescription: 'Yonex Astrox 88D Pro là cây vợt đỉnh cao được các vận động viên đôi nam hàng đầu thế giới tin dùng. Được thiết kế chuyên biệt cho vị trí đánh cầu sau sân với đầu vợt đầm, thân cứng và độ phục hồi cực nhanh sau mỗi cú đập cầu.\n\nChất liệu Namd phủ kín toàn bộ thân vợt mang lại cảm giác đập cầu chắc tay, gia tăng tốc độ smash lên thêm 7.1% so với các dòng vợt thông thường.',
    specifications: [
      'Thương hiệu: Yonex (Made in Japan)',
      'Độ cứng đũa: Cứng (Stiff)',
      'Điểm cân bằng: Nặng đầu (Head Heavy - 301mm)',
      'Trọng lượng / Chu vi cán: 3U-G5 (88g) / 4U-G5 (83g)',
      'Mức căng dây tối đa: 28 lbs (~12.5 kg)'
    ],
    sizes: ['4U-G5', '3U-G5'],
    colors: ['Đen Vàng Lạc Hồng'],
    rating: 5,
    reviewsCount: 29,
    stock: 12,
    weight: '83g (4U)',
    sku: 'YN-AX88DP-4UG5',
    reviews: [
      { author: 'Hoàng Minh Quân', rating: 5, comment: 'Đập cầu cực kỳ cắm và thoát tay. Cây vợt tấn công số 1 cho anh em đánh đôi!' }
    ]
  },
  {
    id: 5,
    name: 'Áo Ba Lỗ Tập Gym Under Armour HeatGear',
    category: 'gym',
    categoryName: 'Gym & Fitness',
    brand: 'Under Armour',
    price: 550000,
    originalPrice: 690000,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Thiết kế form Stringer khoét sâu tôn dáng ngực và cơ xô khi tập thể hình. Chất vải HeatGear siêu nhẹ co giãn 4 chiều, khử mùi và kháng khuẩn.',
    fullDescription: 'Áo ba lỗ thể hình Under Armour HeatGear là lựa chọn lý tưởng cho các buổi tập gym cường độ cao (Leg day, Push day, Cardio). Thiết kế nách khoét rộng tối đa hóa tầm vận động của khớp vai khi đẩy tạ hoặc kéo xà.\n\nVải công nghệ thoát ẩm tức thì, giúp cơ thể luôn khô thoáng và mát mẻ ngay cả khi đẩy tạ nặng mồ hôi đầm đìa.',
    specifications: [
      'Thương hiệu: Under Armour',
      'Chất liệu: 90% Polyester, 10% Elastane',
      'Công nghệ: HeatGear siêu nhẹ & Anti-odor kháng mùi',
      'Kiểu dáng: Sleeveless Stringer Gym Fit',
      'Tính năng: Khô siêu tốc trong 15 phút'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: ['Đen Nhám', 'Xanh Navy'],
    rating: 5,
    reviewsCount: 16,
    stock: 35,
    weight: '120g (Size L)',
    sku: 'UA-HG-TK-BLK-L',
    reviews: [
      { author: 'Lê Tuấn Vũ (Gymmer)', rating: 5, comment: 'Chất vải mát rượi, khoét nách chuẩn không bị vướng khi đẩy ngực. Mua 2 cái mặc luân phiên rất ưng ý.' }
    ]
  },
  {
    id: 6,
    name: 'Giày Bóng Rổ Cổ Thấp Nike Precision 6',
    category: 'basketball',
    categoryName: 'Bóng Rổ',
    brand: 'Nike',
    price: 1990000,
    originalPrice: 2390000,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Kiểm soát tốc độ và đổi hướng đột ngột trên sân bóng rổ. Đế cao su vân xương cá bám sân siêu dính cho cả sân gỗ và sân bê tông ngoài trời.',
    fullDescription: 'Nike Precision 6 cho phép các cầu thủ thi đấu nhanh nhẹn, linh hoạt kiểm soát vị trí và bứt tốc vượt qua đối thủ. Cổ giày cắt thấp kết hợp lớp đệm cổ chân dày dặn giúp xoay trở mắt cá chân tự nhiên mà vẫn đảm bảo độ an toàn cao.\n\nĐế giữa bọt mềm giảm chấn hiệu quả khi tiếp đất sau các pha bật nhảy ném rổ hoặc tranh bóng bật bảng.',
    specifications: [
      'Thương hiệu: Nike',
      'Kiểu cổ: Low-top (Cổ thấp linh hoạt)',
      'Mặt đế: Cao su mô hình xương cá cải tiến chống mòn sân Outdoor',
      'Hệ thống dây giày: Đan chéo khóa chặt mu bàn chân',
      'Màu sắc: Xanh Phantom phối Đen Trắng'
    ],
    sizes: ['41', '42', '43'],
    colors: ['Xanh Phantom', 'Đen Trắng'],
    rating: 4.8,
    reviewsCount: 21,
    stock: 15,
    weight: '340g (Size 42)',
    sku: 'NK-PRC6-BLU-42',
    reviews: [
      { author: 'Ngô Quốc Bảo', rating: 5, comment: 'Đế bám sân bê tông cực kỳ tốt, thắng gấp không bị trượt té. Giá tốt cho một đôi giày bóng rổ chính hãng.' }
    ]
  },
  {
    id: 7,
    name: 'Giày Đá Banh Nike Mercurial Vapor 15 TF',
    category: 'football',
    categoryName: 'Bóng Đá',
    brand: 'Nike',
    price: 2190000,
    originalPrice: 2490000,
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Chiến hài sân cỏ nhân tạo có đệm Air Zoom ở 3/4 chiều dài gót chân. Đinh dăm cao su tròn tăng tốc và bứt tốc ngoạn mục trong từng pha bóng.',
    fullDescription: 'Thống trị mặt sân cỏ nhân tạo cùng Nike Mercurial Vapor 15 Academy TF. Lần đầu tiên trong lịch sử, Nike phát triển bộ đệm Zoom Air chuyên biệt cho bóng đá, cung cấp thêm một mức độ phản hồi nảy dưới bàn chân giúp bạn di chuyển nhanh hơn vào những khoảnh khắc quyết định của trận đấu.\n\nPhần thân trên NikeSkin vân nổi ma sát cao giúp kiểm soát và vuốt bóng xoáy chính xác ở tốc độ cao.',
    specifications: [
      'Thương hiệu: Nike Football (Chính hãng)',
      'Loại đinh: TF (Turf - chuyên sân cỏ nhân tạo 5-7 người)',
      'Đệm: Đệm khí Air Zoom độc quyền',
      'Thân giày: Lớp phủ NikeSkin tăng độ cảm giác bóng',
      'Form chân: Thon gọn, ôm sát bàn chân'
    ],
    sizes: ['40', '41', '42', '43'],
    colors: ['Vàng Đồng', 'Đỏ Đồng'],
    rating: 5,
    reviewsCount: 42,
    stock: 22,
    weight: '240g (Size 41)',
    sku: 'NK-VAP15-GLD-41',
    reviews: [
      { author: 'Đinh Tuấn Kiệt', rating: 5, comment: 'Đôi giày đá bóng ngon nhất từng đi. Đệm Air Zoom êm gót chân, sút bóng rất đầm và chuẩn.' }
    ]
  },
  {
    id: 8,
    name: 'Quần Chạy Bộ 2 Lớp Puma Run Ultraweave',
    category: 'running',
    categoryName: 'Chạy Bộ',
    brand: 'Puma',
    price: 790000,
    originalPrice: 950000,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Thiết kế 2 lớp chuyên dụng (lớp ngoài siêu nhẹ, lớp lót trong co giãn ôm cơ đùi) chống cọ xát rát da khi chạy cự ly dài. Ngăn túi zip tiện lợi.',
    fullDescription: 'Quần chạy bộ Puma Run Ultraweave 2-in-1 được chế tạo từ chất liệu vải Ultraweave siêu nhẹ độc quyền của Puma. Quần lót nén cơ bên trong giúp giảm rung cơ đùi, chống chấn thương và ngăn ngừa hiện tượng cọ rát da đùi khi chạy 10km đến 42km.\n\nTích hợp ngăn túi chống thấm nước có khóa kéo ở lưng quần, thoải mái đựng điện thoại, chìa khóa hoặc gel năng lượng mà không bị xóc nảy khi chạy.',
    specifications: [
      'Thương hiệu: Puma Running',
      'Cấu trúc: 2 lớp (Lớp ngoài 5 inch xẻ tà, lớp trong boxer nén cơ)',
      'Công nghệ: dryCELL hút ẩm và Ultraweave siêu nhẹ',
      'Tiện ích: Túi sau có zip chống nước đựng smartphone',
      'Chi tiết an toàn: Logo và vạch phản quang phát sáng trong đêm'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: ['Đen Classic', 'Xám Than'],
    rating: 5,
    reviewsCount: 19,
    stock: 28,
    weight: '145g (Size M)',
    sku: 'PM-ULTW-SH-BLK-M',
    reviews: [
      { author: 'Võ Minh Trí', rating: 5, comment: 'Quần 2 lớp mặc chạy 21km không hề bị cọ rát đùi. Túi sau đựng vừa iPhone 15 Pro rất êm.' }
    ]
  }
];

// 2. HELPER FUNCTIONS: TIỀN TỆ & LOCAL STORAGE
function formatVND(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return '0 ₫';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

function getCart() {
  try {
    const raw = localStorage.getItem('organi_sports_cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('organi_sports_cart', JSON.stringify(cart));
  updateHeaderCartUI();
}

function getWishlist() {
  try {
    const raw = localStorage.getItem('organi_sports_wishlist');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  localStorage.setItem('organi_sports_wishlist', JSON.stringify(list));
  updateHeaderCartUI();
}

// 3. TOAST NOTIFICATION
function showToast(message, type = 'success') {
  let box = document.getElementById('toast-box');
  if (!box) {
    box = document.createElement('div');
    box.id = 'toast-box';
    document.body.appendChild(box);
  }

  const toast = document.createElement('div');
  toast.className = 'organi-toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color: #7fad39; font-size: 18px;"></i>
    <span>${message}</span>
  `;
  box.appendChild(toast);

  // Play audio sound if available
  try {
    const audio = new Audio('Sounds/notification.mp3');
    audio.play().catch(() => {});
  } catch (e) {}

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 4. HEADER CART & WISHLIST UI
function updateHeaderCartUI() {
  const cart = getCart();
  const wishlist = getWishlist();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartBadge = document.querySelector('.header__cart ul li:nth-child(2) a span');
  const cartPrice = document.querySelector('.header__cart__price span');
  const wishBadge = document.querySelector('.header__cart ul li:nth-child(1) a span');

  if (cartBadge) cartBadge.innerText = cartCount;
  if (cartPrice) cartPrice.innerText = formatVND(cartTotal);
  if (wishBadge) wishBadge.innerText = wishlist.length;
}

// 5. THÊM VÀO GIỎ HÀNG (ADD TO CART)
function addToCart(productId, quantity = 1, size = null, color = null) {
  const product = SPORTS_PRODUCTS.find(p => p.id === Number(productId));
  if (!product) return;

  const chosenSize = size || product.sizes[0];
  const chosenColor = color || product.colors[0];

  const cart = getCart();
  const existingIndex = cart.findIndex(
    item => item.id === product.id && item.size === chosenSize && item.color === chosenColor
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: chosenSize,
      color: chosenColor,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Đã thêm "${product.name} (${chosenSize}, ${chosenColor})" vào giỏ hàng!`);
}

// 6. TOGGLE WISHLIST
function toggleWishlist(productId) {
  const product = SPORTS_PRODUCTS.find(p => p.id === Number(productId));
  if (!product) return;

  let wishlist = getWishlist();
  const index = wishlist.findIndex(id => id === product.id);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Đã xóa "${product.name}" khỏi danh sách yêu thích.`);
  } else {
    wishlist.push(product.id);
    showToast(`Đã thêm "${product.name}" vào danh sách yêu thích!`);
  }
  saveWishlist(wishlist);
}

// 7. XỬ LÝ KHỞI TẠO DOM (DOM CONTENT LOADED)
document.addEventListener('DOMContentLoaded', () => {
  updateHeaderCartUI();

  // A. Toggle Categories Menu Dropdown
  const categoriesBtn = document.querySelector('.hero__categories__all');
  const categoriesMenu = document.querySelector('.hero__categories ul');
  if (categoriesBtn && categoriesMenu) {
    // If not homepage, hide by default
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';
    if (!isHomePage && !window.location.href.includes('index.html')) {
      categoriesMenu.style.display = 'none';
    }

    categoriesBtn.addEventListener('click', () => {
      categoriesMenu.style.display = categoriesMenu.style.display === 'none' ? 'block' : 'none';
    });
  }

  // B. Featured Products Filter Tabs
  const filterTabs = document.querySelectorAll('.featured__controls ul li');
  const featuredItems = document.querySelectorAll('.featured__filter .col-lg-3');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      featuredItems.forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // C. Product Details Page Dynamic Initialization
  if (document.querySelector('.product-details')) {
    initProductDetailsPage();
  }

  // D. Shopping Cart Page: Render & Manage Items
  if (document.querySelector('.shoping__cart__table tbody')) {
    renderShoppingCartPage();
  }

  // E. Checkout Page: Render Order Summary
  if (document.querySelector('.checkout__order')) {
    renderCheckoutPageOrder();
  }

  // F. Search Input Global Listener
  const searchForm = document.querySelector('.hero__search__form form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = searchForm.querySelector('input');
      const term = input ? input.value.trim() : '';
      if (term) {
        window.location.href = `shop-grid.html?search=${encodeURIComponent(term)}`;
      }
    });
  }
});

// 8. RENDER SHOPPING CART PAGE
function renderShoppingCartPage() {
  const tbody = document.querySelector('.shoping__cart__table tbody');
  if (!tbody) return;

  const cart = getCart();
  if (cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 40px; color: #888;">
          Giỏ hàng của bạn đang trống. <a href="shop-grid.html" style="color: var(--primary); font-weight: 700;">Mua sắm ngay!</a>
        </td>
      </tr>
    `;
    updateCartTotals(0, 0);
    return;
  }

  let subtotal = 0;
  tbody.innerHTML = cart.map((item, index) => {
    const lineTotal = item.price * item.quantity;
    subtotal += lineTotal;
    return `
      <tr>
        <td class="shoping__cart__item">
          <a href="shop-details.html?id=${item.id}"><img src="${item.image}" alt="${item.name}"></a>
          <div>
            <h5><a href="shop-details.html?id=${item.id}" style="color: inherit; text-decoration: none;">${item.name}</a></h5>
            <small style="color: #888;">Size: ${item.size} | Màu: ${item.color}</small>
          </div>
        </td>
        <td class="shoping__cart__price">
          ${formatVND(item.price)}
        </td>
        <td class="shoping__cart__quantity">
          <div class="quantity">
            <div class="pro-qty">
              <span class="dec qtybtn" onclick="changeCartQty(${index}, -1)">-</span>
              <input type="text" value="${item.quantity}" readonly>
              <span class="inc qtybtn" onclick="changeCartQty(${index}, 1)">+</span>
            </div>
          </div>
        </td>
        <td class="shoping__cart__total">
          ${formatVND(lineTotal)}
        </td>
        <td class="shoping__cart__item__close">
          <span class="icon_close" onclick="removeCartItem(${index})"><i class="fa-solid fa-xmark"></i></span>
        </td>
      </tr>
    `;
  }).join('');

  // Check discount
  let discount = 0;
  const appliedCoupon = sessionStorage.getItem('organi_coupon');
  if (appliedCoupon === 'SPORTS10') {
    discount = subtotal * 0.1;
  } else if (appliedCoupon === 'SALE50K') {
    discount = 50000;
  } else if (appliedCoupon === 'FREESHIP') {
    discount = 30000;
  }

  updateCartTotals(subtotal, discount);
}

function changeCartQty(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    renderShoppingCartPage();
  }
}

function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderShoppingCartPage();
  showToast('Đã xóa sản phẩm khỏi giỏ hàng.');
}

function updateCartTotals(subtotal, discount = 0) {
  const subtotalEl = document.querySelector('.shoping__checkout ul li:nth-child(1) span');
  const totalEl = document.querySelector('.shoping__checkout ul li:nth-child(2) span');

  const grandTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.innerText = formatVND(subtotal);
  if (totalEl) totalEl.innerText = formatVND(grandTotal);
}

// Coupon apply
function applyCoupon() {
  const input = document.querySelector('.shoping__discount form input');
  const code = input ? input.value.trim().toUpperCase() : '';

  if (code === 'SPORTS10' || code === 'SALE50K' || code === 'FREESHIP') {
    sessionStorage.setItem('organi_coupon', code);
    showToast(`Áp dụng mã giảm giá "${code}" thành công!`);
    renderShoppingCartPage();
  } else {
    alert('Mã giảm giá không hợp lệ. Hãy thử: SPORTS10, FREESHIP hoặc SALE50K');
  }
}

// 9. RENDER CHECKOUT PAGE ORDER SUMMARY
function renderCheckoutPageOrder() {
  const cart = getCart();
  const productsList = document.querySelector('.checkout__order ul');
  const subtotalEl = document.querySelector('.checkout__order__subtotal span');
  const totalEl = document.querySelector('.checkout__order__total span');

  if (!productsList) return;

  if (cart.length === 0) {
    productsList.innerHTML = '<li>Giỏ hàng trống!</li>';
    return;
  }

  let subtotal = 0;
  productsList.innerHTML = cart.map(item => {
    const lineTotal = item.price * item.quantity;
    subtotal += lineTotal;
    return `
      <li>${item.name} (${item.size}) x${item.quantity} <span>${formatVND(lineTotal)}</span></li>
    `;
  }).join('');

  let discount = 0;
  const appliedCoupon = sessionStorage.getItem('organi_coupon');
  if (appliedCoupon === 'SPORTS10') discount = subtotal * 0.1;
  else if (appliedCoupon === 'SALE50K') discount = 50000;
  else if (appliedCoupon === 'FREESHIP') discount = 30000;

  const grandTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.innerText = formatVND(subtotal);
  if (totalEl) totalEl.innerText = formatVND(grandTotal);
}

function handlePlaceOrder(e) {
  e.preventDefault();
  const cart = getCart();
  if (cart.length === 0) {
    alert('Giỏ hàng trống! Vui lòng chọn sản phẩm trước khi đặt hàng.');
    return;
  }

  const orderCode = 'SP-6651071010-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  alert(`🎉 CHÚC MỪNG!\nĐơn hàng ${orderCode} đã được đặt thành công!\nCảm ơn bạn đã mua sắm tại Sports Shop.\nSinh viên thực hiện: Ngô Thuận Dương - MSSV: 6651071010`);

  // Clear cart
  saveCart([]);
  sessionStorage.removeItem('organi_coupon');
  window.location.href = 'index.html';
}

// 10. TRANG CHI TIẾT SẢN PHẨM ĐỘNG (DYNAMIC PRODUCT DETAILS BY ID)
function initProductDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const prodId = parseInt(urlParams.get('id'), 10) || 1;
  const product = SPORTS_PRODUCTS.find(p => p.id === prodId) || SPORTS_PRODUCTS[0];

  // Document Title
  document.title = `${product.name} - Chi Tiết Sản Phẩm | Ngô Thuận Dương (6651071010)`;

  // Breadcrumb
  const bcCat = document.getElementById('detail-bc-cat');
  const bcTitle = document.getElementById('detail-bc-title');
  if (bcCat) {
    bcCat.textContent = product.categoryName;
    bcCat.href = `shop-grid.html?cat=${product.category}`;
  }
  if (bcTitle) {
    bcTitle.textContent = product.name;
  }

  // Main Image
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
    mainImg.onerror = function () {
      this.onerror = null;
      this.src = `Images/product-${product.id}.svg`;
    };
  }

  // Thumbnails Slider
  const thumbsContainer = document.getElementById('detail-thumbs');
  if (thumbsContainer && product.gallery && product.gallery.length > 0) {
    thumbsContainer.innerHTML = '';
    product.gallery.forEach((imgUrl, idx) => {
      const thumb = document.createElement('img');
      thumb.src = imgUrl;
      thumb.alt = `${product.name} - ảnh ${idx + 1}`;
      if (idx === 0) thumb.classList.add('active');
      thumb.onerror = function () {
        this.onerror = null;
        this.src = `Images/product-${product.id}.svg`;
      };
      thumb.addEventListener('click', function () {
        thumbsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        if (mainImg) {
          mainImg.src = this.src;
          mainImg.onerror = function () {
            this.onerror = null;
            this.src = `Images/product-${product.id}.svg`;
          };
        }
      });
      thumbsContainer.appendChild(thumb);
    });
  }

  // Title
  const titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.textContent = product.name;

  // Rating
  const ratingEl = document.getElementById('detail-rating');
  if (ratingEl) {
    let starsHtml = '';
    const fullStars = Math.floor(product.rating || 5);
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if ((product.rating || 5) % 1 !== 0) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    starsHtml += ` <span>(${product.reviewsCount || 25} đánh giá của khách hàng)</span>`;
    ratingEl.innerHTML = starsHtml;
  }

  // Price
  const priceEl = document.getElementById('detail-price');
  if (priceEl) {
    let priceHtml = `${formatVND(product.price)}`;
    if (product.originalPrice && product.originalPrice > product.price) {
      priceHtml += ` <span style="font-size: 18px; color: #94a3b8; text-decoration: line-through; margin-left: 12px; font-weight: 500;">${formatVND(product.originalPrice)}</span>`;
    }
    priceEl.innerHTML = priceHtml;
  }

  // Short Description
  const descEl = document.getElementById('detail-desc');
  if (descEl) descEl.textContent = product.description;

  // Sizes
  const sizesContainer = document.getElementById('detail-sizes');
  let selectedSize = (product.sizes && product.sizes.length > 0) ? product.sizes[0] : 'Tiêu chuẩn';
  if (sizesContainer && product.sizes) {
    sizesContainer.innerHTML = '';
    product.sizes.forEach((size, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sidebar__item__size';
      btn.style.cssText = 'border:none; background:none; cursor:pointer; padding: 0; margin-right: 6px;';
      const lbl = document.createElement('label');
      lbl.textContent = size;
      if (idx === 0) lbl.classList.add('active');
      btn.appendChild(lbl);
      btn.addEventListener('click', () => {
        sizesContainer.querySelectorAll('label').forEach(l => l.classList.remove('active'));
        lbl.classList.add('active');
        selectedSize = size;
      });
      sizesContainer.appendChild(btn);
    });
  }

  // Colors
  const colorsContainer = document.getElementById('detail-colors');
  let selectedColor = (product.colors && product.colors.length > 0) ? product.colors[0] : 'Mặc định';
  if (colorsContainer && product.colors) {
    colorsContainer.innerHTML = '';
    product.colors.forEach((color, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sidebar__item__color';
      btn.style.cssText = 'border:none; background:none; cursor:pointer; padding: 0; margin-right: 6px;';
      const lbl = document.createElement('label');
      lbl.textContent = color;
      if (idx === 0) lbl.classList.add('active');
      btn.appendChild(lbl);
      btn.addEventListener('click', () => {
        colorsContainer.querySelectorAll('label').forEach(l => l.classList.remove('active'));
        lbl.classList.add('active');
        selectedColor = color;
      });
      colorsContainer.appendChild(btn);
    });
  }

  // Quantity Counter
  const proQty = document.querySelector('.pro-qty');
  const qtyInput = document.getElementById('detail-qty');
  if (proQty && qtyInput) {
    const decBtn = proQty.querySelector('.dec');
    const incBtn = proQty.querySelector('.inc');
    if (decBtn) {
      decBtn.onclick = () => {
        let val = parseInt(qtyInput.value, 10) || 1;
        if (val > 1) qtyInput.value = val - 1;
      };
    }
    if (incBtn) {
      incBtn.onclick = () => {
        let val = parseInt(qtyInput.value, 10) || 1;
        qtyInput.value = val + 1;
      };
    }
  }

  // Add to Cart Button
  const addBtn = document.getElementById('detail-add-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      addToCart(product.id, qty, selectedSize, selectedColor);
    };
  }

  // Wishlist Heart Icon
  const wishBtn = document.getElementById('detail-wish-btn');
  if (wishBtn) {
    wishBtn.onclick = (e) => {
      e.preventDefault();
      toggleWishlist(product.id);
    };
  }

  // Widget specs: Stock, Weight, SKU
  const stockEl = document.getElementById('detail-stock');
  if (stockEl) stockEl.textContent = `Còn hàng (${product.stock || 20} sản phẩm)`;
  const weightEl = document.getElementById('detail-weight');
  if (weightEl) weightEl.textContent = product.weight || '300g';
  const skuEl = document.getElementById('detail-sku');
  if (skuEl) skuEl.textContent = product.sku || `SP-${product.id}`;

  // Tabs (Description / Specs / Reviews)
  const tabLinks = document.querySelectorAll('.nav-tabs li a');
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabLinks.forEach(link => {
    link.onclick = function (e) {
      e.preventDefault();
      tabLinks.forEach(l => l.parentElement.classList.remove('active'));
      this.parentElement.classList.add('active');

      const targetId = this.getAttribute('href').replace('#', '');
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    };
  });

  // Tab 1: Full Description
  const tabDesc = document.getElementById('detail-tab-desc');
  if (tabDesc && product.fullDescription) {
    const paras = product.fullDescription.split('\n\n');
    tabDesc.innerHTML = '<h6>Thông tin chi tiết</h6>' + paras.map(p => `<p>${p}</p>`).join('');
  }

  // Tab 2: Specifications
  const tabSpecs = document.getElementById('detail-tab-specs');
  if (tabSpecs && product.specifications) {
    tabSpecs.innerHTML = '<h6>Thông số kỹ thuật sản phẩm</h6><ul style="padding-left: 20px; line-height: 28px; color: #475569;">' +
      product.specifications.map(s => `<li>• ${s}</li>`).join('') +
      '</ul>';
  }

  // Tab 3: Customer Reviews
  const tabReviews = document.getElementById('detail-tab-reviews');
  if (tabReviews && product.reviews) {
    let revHtml = `<h6>Đánh giá từ khách hàng (${product.reviews.length})</h6>`;
    product.reviews.forEach(r => {
      revHtml += `
        <div style="background: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 12px; border: 1px solid #ebebeb;">
          <div style="font-weight: 700; color: #1c1c1c;">${r.author}</div>
          <div style="color: #edbb0e; font-size: 13px; margin: 4px 0;">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p style="margin: 0; font-size: 14px; color: #475569;">${r.comment}</p>
        </div>
      `;
    });
    tabReviews.innerHTML = revHtml;
  }

  // Related Products Section
  const relatedRow = document.getElementById('detail-related-row');
  if (relatedRow) {
    let relatedList = SPORTS_PRODUCTS.filter(p => p.id !== product.id && p.category === product.category);
    if (relatedList.length < 4) {
      const others = SPORTS_PRODUCTS.filter(p => p.id !== product.id && p.category !== product.category);
      relatedList = relatedList.concat(others).slice(0, 4);
    } else {
      relatedList = relatedList.slice(0, 4);
    }

    relatedRow.innerHTML = '';
    relatedList.forEach(rel => {
      const col = document.createElement('div');
      col.className = 'col-lg-3 col-md-4 col-sm-6';
      col.innerHTML = `
        <div class="featured__item">
          <div class="featured__item__pic" style="background-image: url('${rel.image}');" onclick="window.location.href='shop-details.html?id=${rel.id}'">
            <ul class="featured__item__pic__hover" onclick="event.stopPropagation()">
              <li><a href="javascript:void(0)" onclick="toggleWishlist(${rel.id})" title="Yêu thích"><i class="fa-solid fa-heart"></i></a></li>
              <li><a href="shop-details.html?id=${rel.id}" title="Xem chi tiết"><i class="fa-solid fa-retweet"></i></a></li>
              <li><a href="javascript:void(0)" onclick="addToCart(${rel.id})" title="Thêm vào giỏ"><i class="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
          </div>
          <div class="featured__item__text">
            <h6><a href="shop-details.html?id=${rel.id}">${rel.name}</a></h6>
            <h5>${formatVND(rel.price)}</h5>
          </div>
        </div>
      `;
      relatedRow.appendChild(col);
    });
  }
}
