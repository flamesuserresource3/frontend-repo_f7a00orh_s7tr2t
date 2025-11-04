import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { CupSoda } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 text-white">
              <CupSoda className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-bold">Anugrah Cup</p>
              <p className="text-xs text-stone-500">Sablon Cup Pontianak</p>
            </div>
          </a>
          <nav className="hidden gap-6 sm:flex">
            <a href="#services" className="text-sm text-stone-700 hover:text-stone-900">Layanan</a>
            <a href="#galeri" className="text-sm text-stone-700 hover:text-stone-900">Galeri</a>
            <a href="#contact" className="text-sm text-stone-700 hover:text-stone-900">Kontak</a>
          </nav>
          <a href="#contact" className="hidden rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 sm:inline-block">Konsultasi</a>
        </div>
      </header>

      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <Gallery />
        <Contact />
      </main>

      <footer className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-stone-600 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Anugrah Cup • Pontianak. Semua hak dilindungi.
          </p>
          <p className="text-stone-500">
            Spesialis sablon cup kustom • Ramah • Cepat • Harga bersahabat
          </p>
        </div>
      </footer>
    </div>
  );
}
