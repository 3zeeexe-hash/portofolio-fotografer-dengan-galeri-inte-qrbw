import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    package: "custom",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi pengiriman form klien
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        package: "custom",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Intro Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent font-semibold">Hubungi Kami</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          Mari Memulai Cerita
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm sm:text-base">
          Gunakan formulir di bawah ini untuk mengamankan slot sesi foto Anda atau menanyakan penawaran kustom.
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-5 items-start">
        
        {/* Contact Info Column (2/5) */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">Informasi Studio</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Silakan mampir ke galeri pameran cetak fisik kami atau jadwalkan pertemuan konsultasi kopi secara gratis.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-accent">
                <MapPin className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Lokasi Studio</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Jl. Cendrawasih No. 24, Kuta, Bali, Indonesia 80361
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-accent">
                <Phone className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Hubungi Langsung</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  WhatsApp: +62 812-3456-7890
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-accent">
                <Mail className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Surat Elektronik</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  contact@lumina-photo.com
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-video bg-white/5 flex items-center justify-center text-center p-4">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=500')" }} />
            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Peta Studio Kuta</span>
              <p className="text-[11px] text-muted-foreground mt-1">2 Menit Jalan Kaki dari Pantai Kuta</p>
            </div>
          </div>
        </div>

        {/* Contact Form Column (3/5) */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">Terima Kasih Banyak!</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                Pesan atau data booking Anda telah berhasil kami terima. Fotografer kami akan segera menghubungi Anda melalui WhatsApp atau Email dalam 1x24 jam ke depan.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 rounded-full bg-accent px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Kirim Pesan Baru
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Contoh: Rian Pratama"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white">Email Aktif</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="08123456xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-xs font-bold uppercase tracking-wider text-white">Pilih Paket Layanan</label>
                  <select
                    id="package"
                    value={formState.package}
                    onChange={(e) => setFormState({ ...formState, package: e.target.value })}
                    className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="portrait" className="bg-black">Personal Portrait Session</option>
                    <option value="wedding" className="bg-black">Intimate Wedding / Event</option>
                    <option value="commercial" className="bg-black">Commercial & Editorial</option>
                    <option value="custom" className="bg-black">Kustom Sesi Sendiri</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white">Ceritakan Konsep Impian Anda</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  placeholder="Ceritakan rencana lokasi, warna gaun/kostum, ide moodboard, atau jam terbaik yang Anda harapkan..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-xs font-bold tracking-widest uppercase text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50"
              >
                {isLoading ? (
                  "Mengirim data..."
                ) : (
                  <>
                    Kirim Permintaan Booking <Send className="size-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
