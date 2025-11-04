import { Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-sm text-amber-700 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Kreasi kemasan minuman yang memikat</span>
            </div>
            <h1 className="mt-6 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-stone-900 to-stone-700">
              Anugrah Cup – Pontianak
            </h1>
            <p className="mt-5 text-lg text-stone-600">
              Spesialis sablon cup kustom. Desain sesuai keinginan, layanan ramah dan cepat,
              harga bersahabat. Wujudkan brand minuman Anda dengan hasil sablon yang rapi,
              tajam, dan tahan lama.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-white shadow-md shadow-amber-600/30 transition hover:bg-amber-700"
              >
                Konsultasi Sekarang
              </a>
              <a
                href="#galeri"
                className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white px-5 py-3 text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
              >
                Lihat Galeri
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-1 text-amber-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
              ))}
              <span className="ml-2 text-sm text-stone-600">Pelanggan puas di Pontianak</span>
            </div>
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-200/40 via-rose-200/40 to-orange-200/40 blur-3xl" />
      </div>
    </section>
  );
}
