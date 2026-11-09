import { useState } from "react";
import { Camera, MapPin, X, ZoomIn, Calendar } from "lucide-react";
import { CATEGORIES, PHOTOS, Photo } from "@/data/photos";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  // Filter foto berdasarkan kategori yang dipilih
  const filteredPhotos = selectedCategory === "all"
    ? PHOTOS
    : PHOTOS.filter(photo => photo.category === selectedCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Karya Seni Visual</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          Galeri Interaktif
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm sm:text-base">
          Jelajahi karya-karya terpilih kami mulai dari keintiman portrait manusia, keindahan alam bentala, hingga estetika jalanan perkotaan.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all ${
              selectedCategory === category.id
                ? "bg-accent text-accent-foreground"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid Masonry-like layout */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-card aspect-[4/5]"
          >
            {/* Image */}
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="rounded-full bg-accent p-2 text-accent-foreground">
                  <ZoomIn className="size-4" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {photo.category}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold text-white leading-snug">
                  {photo.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" /> {photo.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Detail Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-fade-in">
          {/* Close Overlay Area */}
          <div className="absolute inset-0" onClick={() => setActivePhoto(null)} />

          <div className="relative z-10 flex max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#09090b] border border-white/10 md:flex-row shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition-colors"
              aria-label="Tutup Detail"
            >
              <X className="size-5" />
            </button>

            {/* Photo Column */}
            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            {/* Detail Column */}
            <div className="p-8 md:w-2/5 flex flex-col justify-between">
              <div>
                <span className="rounded bg-accent/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  {activePhoto.category}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-white leading-tight">
                  {activePhoto.title}
                </h2>
                
                <div className="mt-4 space-y-2.5 text-xs text-muted-foreground border-b border-white/5 pb-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-accent shrink-0" />
                    <span>{activePhoto.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-accent shrink-0" />
                    <span>Diambil pada tahun {activePhoto.year}</span>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Cerita di Balik Lensa</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activePhoto.story}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="size-4 text-accent" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground">Sony Alpha Series &bull; Fine-Art Prime</span>
                </div>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="text-xs font-semibold text-accent hover:underline"
                >
                  Tutup
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
