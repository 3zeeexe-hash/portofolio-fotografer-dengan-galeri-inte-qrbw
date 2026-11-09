export interface Photo {
  id: string;
  title: string;
  category: "portrait" | "landscape" | "wedding" | "street";
  imageUrl: string;
  location: string;
  year: string;
  story: string;
}

export const CATEGORIES = [
  { id: "all", label: "Semua Karya" },
  { id: "portrait", label: "Potret (Portrait)" },
  { id: "landscape", label: "Bentang Alam" },
  { id: "wedding", label: "Pernikahan & Event" },
  { id: "street", label: "Sisi Jalanan" },
];

export const PHOTOS: Photo[] = [
  {
    id: "1",
    title: "Golden Hour Serenade",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    location: "Bali, Indonesia",
    year: "2023",
    story: "Menangkap ekspresi alami di tengah paparan cahaya keemasan sore hari di tepi pantai Canggu."
  },
  {
    id: "2",
    title: "The Misty Ridge of Bromo",
    category: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c27e?auto=format&fit=crop&q=80&w=1000",
    location: "Tengger, Jawa Timur",
    year: "2024",
    story: "Kabut pagi menyelimuti kaldera Bromo sesaat sebelum matahari pertama menembus dinginnya udara."
  },
  {
    id: "3",
    title: "An Eternal Promise",
    category: "wedding",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000",
    location: "Yogyakarta, Indonesia",
    year: "2023",
    story: "Momen intim ketika kedua mempelai bertukar janji suci berlatar arsitektur klasik Jawa kuno."
  },
  {
    id: "4",
    title: "Cyberpunk Alleyways",
    category: "street",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000",
    location: "Shinjuku, Tokyo",
    year: "2023",
    story: "Interaksi neon terang, genangan air hujan, dan kesibukan malam kota Tokyo yang padat."
  },
  {
    id: "5",
    title: "Melancholic Gaze",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    location: "Bandung, Jawa Barat",
    year: "2024",
    story: "Studi kedalaman bayangan dan sorot mata emosional dalam balutan pencahayaan studio minimalis."
  },
  {
    id: "6",
    title: "Majestic Komodo Horizon",
    category: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000",
    location: "Labuan Bajo, NTT",
    year: "2022",
    story: "Bentuk berliku khas Pulau Padar berpadu dengan jernihnya gradasi air laut kepulauan Komodo."
  },
  {
    id: "7",
    title: "Laughter in the Rain",
    category: "wedding",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    location: "Seminyak, Bali",
    year: "2023",
    story: "Gerimis mendadak tidak menghalangi keceriaan resepsi semi-outdoor ini, melahirkan refleksi air yang memesona."
  },
  {
    id: "8",
    title: "Shadows of Heritage",
    category: "street",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
    location: "Kota Tua, Jakarta",
    year: "2024",
    story: "Seorang pesepeda tua melintasi bayangan bangunan peninggalan kolonial di tengah hari terik."
  },
  {
    id: "9",
    title: "Lost in Autumn Woods",
    category: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000",
    location: "Kyoto, Jepang",
    year: "2023",
    story: "Pancaran warna merah menyala daun mapel yang jatuh berbaur harmonis dengan aliran sungai kecil."
  }
];

export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PACKAGES: Package[] = [
  {
    id: "portrait",
    name: "Personal Portrait Session",
    price: "Rp 1.850.000",
    duration: "2 Jam Sesi",
    description: "Sangat cocok untuk portofolio personal, branding profesional, atau koleksi foto pribadi.",
    features: [
      "1 Fotografer Profesional",
      "2 Pilihan Kostum (Sendiri)",
      "20 Foto Edit Berkualitas Tinggi",
      "Semua File Mentah (RAW/JPEG)",
      "Penyimpanan Cloud selama 6 Bulan"
    ]
  },
  {
    id: "wedding",
    name: "Intimate Wedding & Event",
    price: "Rp 7.500.000",
    duration: "Full-day Event",
    description: "Abadikan seluruh momen magis pernikahan istimewa Anda dengan pendekatan dokumenter sinematik.",
    features: [
      "2 Fotografer + 1 Asisten",
      "Hingga 8 Jam Liputan",
      "80 Foto Edit Masterpiece",
      "1 Exclusive Album Fisik (Premium Book)",
      "Gratis Sesi Mini Pre-wedding",
      "Flashdisk Premium berisi semua File"
    ],
    isPopular: true
  },
  {
    id: "commercial",
    name: "Commercial & Editorial",
    price: "Hubungi Kami",
    duration: "Fleksibel",
    description: "Kebutuhan visual komersial produk, fashion brand, lookbook, atau arsitektur properti.",
    features: [
      "Konsultasi Konsep Kreatif",
      "Peralatan Studio Lengkap & Lighting",
      "Retouch Profesional Kelas Tinggi",
      "Lisensi Komersial Penuh",
      "Format Output Sesuai Kebutuhan Media"
    ]
  }
];
