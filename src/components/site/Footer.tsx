import { Link } from "react-router-dom";
import { Camera, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand Intro */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <Camera className="h-6 w-6 text-accent" />
              <span className="font-display text-xl font-bold tracking-wider uppercase">Lumina</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mengabadikan cahaya, emosi, dan cerita otentik di balik setiap senyuman, keindahan alam, serta kisah cinta abadi Anda melalui lensa profesional sejak 2018.
            </p>
            <div className="mt-6 flex gap-4 text-white">
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-accent transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:halo@lumina.com" className="hover:text-accent transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-xs mb-4">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Galeri Karya</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Paket & Biaya</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Hubungi Kami</Link>
              </li>
            </ul>
          </div>

          {/* Studio Info */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase text-xs mb-4">Studio</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Jl. Cendrawasih No. 24, Kuta, Bali, Indonesia</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>contact@lumina-photo.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Lumina Photography. Hak Cipta Dilindungi.</p>
          <p className="mt-2 sm:mt-0">Didesain khusus untuk ekspresi visual berkualitas tinggi.</p>
        </div>
      </div>
    </footer>
  );
}
