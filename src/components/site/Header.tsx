import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Camera } from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/gallery", label: "Galeri Karya" },
  { to: "/services", label: "Paket Layanan" },
  { to: "/contact", label: "Hubungi" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform group-hover:scale-105">
            <Camera className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="font-display text-xl font-bold tracking-widest text-white uppercase">
            Lumina
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-sm hover:text-accent",
                  isActive ? "text-accent bg-white/5" : "text-muted-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 rounded-full bg-accent px-5 py-2 text-xs font-bold tracking-widest uppercase text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Booking Sesi
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden hover:bg-white/5 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-white/10 bg-background px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 text-base font-medium uppercase tracking-wider rounded-md hover:bg-white/5",
                    isActive ? "text-accent font-semibold" : "text-muted-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-md bg-accent py-3 text-center text-sm font-bold tracking-widest uppercase text-accent-foreground hover:bg-accent/90 transition-all"
            >
              Booking Sesi Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
