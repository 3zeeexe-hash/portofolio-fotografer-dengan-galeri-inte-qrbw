import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, MapPin, ExternalLink } from "lucide-react";
import { PHOTOS } from "@/data/photos";

export default function Home() {
  // Ambil 3 foto teratas sebagai featured
  const featuredPhotos = PHOTOS.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-end px-4 py-16 sm:px-6 lg:px-8">
        {/* Background Image with Dark Vignette overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1800"
            alt="Photographer holding professional camera"
            className="h-full w-full object-cover brightness-[0.35] grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
            <Sparkles className="size-3.5 fill-accent" />
            Lumina Fine Art Photography
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Mengabadikan Keaslian <br className="hidden sm:inline" />
            Dalam Setiap <span className="italic font-serif text-accent font-normal">Semburat Cahaya</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Kami mengubah momen biasa menjadi kenangan visual yang luar biasa, memadukan seni murni dengan emosi yang jujur dan tulus.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-widest uppercase text-accent-foreground transition-all hover:bg-accent/90"
            >
              Lihat Galeri <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Layanan & Biaya
            </Link>
          </div>
        </div>
      </section>

      {/* Stats and Value Proposition */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center md:border-r md:border-white/5">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">5+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Tahun Berkarya</p>
            </div>
            <div className="text-center md:border-r md:border-white/5">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">150+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Klien Bahagia</p>
            </div>
            <div className="text-center md:border-r md:border-white/5">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">12k+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Foto Diproduksi</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-accent sm:text-5xl">99%</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Klien Puas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Masterpieces Gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sorotan Karya Unggulan
            </h2>
            <p className="mt-3 text-muted-foreground">
              Sekilas intipan dari kisah-kisah penuh pesona yang berhasil kami abadikan baru-baru ini.
            </p>
          </div>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider uppercase text-accent"
          >
            Lihat Semua Foto <ExternalLink className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Grid Images */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPhotos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-xl bg-muted border border-white/5 aspect-[4/5]">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">{photo.category}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">{photo.title}</h3>
                <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 text-accent" /> {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-accent stroke-[1]" />
              ))}
            </div>
            <p className="mt-8 font-display text-xl italic leading-relaxed text-white sm:text-2xl">
              "Bekerja sama dengan Lumina Photography adalah keputusan terbaik untuk hari pernikahan kami. Mereka berhasil menangkap ekspresi-ekspresi murni yang bahkan kami tidak sadar itu terjadi. Hasil fotonya sungguh puitis dan berkelas!"
            </p>
            <div className="mt-8">
              <p className="font-bold text-white tracking-wide">Amalia & Rendy</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Sesi Pernikahan Intim, Bali</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-accent px-6 py-12 text-center text-accent-foreground sm:px-12 sm:py-20">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Siap Menceritakan Kisah Anda?
            </h2>
            <p className="mt-4 text-black/80">
              Diskusikan konsep visual impian Anda, baik itu portofolio personal, resepsi intim, maupun kampanye komersial brand Anda.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-black px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-white hover:bg-black/90 transition-all"
              >
                Hubungi Sekarang
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-black/25 bg-transparent px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-black hover:bg-black/10 transition-all"
              >
                Lihat Katalog Harga
              </Link>
            </div>
          </div>
          {/* Decorative faint camera aperture icon in BG */}
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full border-4 border-black/5 pointer-events-none" />
        </div>
      </section>

    </div>
  );
}
