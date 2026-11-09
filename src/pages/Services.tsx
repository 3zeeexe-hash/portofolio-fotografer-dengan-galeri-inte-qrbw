import { Link } from "react-router-dom";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { PACKAGES } from "@/data/photos";

export default function Services() {
  const faqs = [
    {
      q: "Kapan saya akan menerima hasil edit akhir?",
      a: "Proses kurasi dan penyuntingan profesional biasanya memakan waktu 7 hingga 14 hari kerja tergantung pada paket layanan yang Anda ambil."
    },
    {
      q: "Apakah diperbolehkan melakukan pemotretan luar kota?",
      a: "Tentu saja! Kami sangat menyukai petualangan baru. Namun, biaya akomodasi dan transportasi fotografer akan dibebankan kepada klien."
    },
    {
      q: "Bagaimana cara memesan tanggal sesi foto?",
      a: "Anda dapat memilih paket di bawah ini, klik tombol booking, lalu Anda akan diarahkan ke WhatsApp untuk mendiskusikan tanggal dan melakukan pembayaran DP 30%."
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
      
      {/* Intro Header */}
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Paket & Investasi</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          Layanan & Paket Biaya
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm sm:text-base">
          Investasi berharga untuk mengabadikan kenangan terbaik sekali seumur hidup dengan kualitas artistik kelas dunia.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col justify-between rounded-2xl p-8 border ${
              pkg.isPopular
                ? "border-accent bg-accent/[0.03] shadow-lg shadow-accent/5"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            {pkg.isPopular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-bold tracking-widest uppercase text-accent-foreground">
                Paling Populer
              </span>
            )}

            <div>
              <h3 className="font-display text-2xl font-bold text-white">{pkg.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">{pkg.duration}</p>
              
              <div className="mt-5 border-b border-white/5 pb-5">
                <span className="font-display text-3xl font-bold text-white">{pkg.price}</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-3.5 text-sm">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="size-4 shrink-0 text-accent mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Lumina%20Photography,%20saya%20tertarik%20untuk%20booking%20paket%20${encodeURIComponent(pkg.name)}`}
                target="_blank"
                rel="noreferrer"
                className={`block w-full rounded-lg py-3.5 text-center text-xs font-bold tracking-widest uppercase transition-all ${
                  pkg.isPopular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Pesan Paket Ini
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl border-t border-white/5 pt-20">
        <h2 className="font-display text-2xl font-bold text-center text-white sm:text-3xl">Pertanyaan Sering Diajukan</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <div className="flex gap-3 items-start">
                <HelpCircle className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-base">{faq.q}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct CTA */}
      <div className="text-center rounded-2xl bg-gradient-to-r from-accent/10 to-transparent p-8 border border-accent/20">
        <h3 className="font-display text-xl font-bold text-white">Ingin Konsep Kustom di Luar Paket?</h3>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Jika Anda memiliki visi kreatif atau konsep editorial khusus, diskusikan langsung bersama kami. Kami akan merealisasikannya secara personal.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-accent hover:underline"
        >
          Kirim Pesan Kustom <ArrowRight className="size-4" />
        </Link>
      </div>

    </div>
  );
}
