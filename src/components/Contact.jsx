import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Hubungi Kami</h2>
          <p className="mt-3 text-stone-600">Siap bantu konsultasi desain, estimasi, hingga pemesanan.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Phone className="h-5 w-5" /></div>
            <h3 className="mt-4 font-semibold text-stone-900">Telepon/WA</h3>
            <p className="mt-1 text-sm text-stone-600">Kami responsif di jam kerja.</p>
            <p className="mt-2 font-medium text-stone-800">+62 ••• ••••</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Mail className="h-5 w-5" /></div>
            <h3 className="mt-4 font-semibold text-stone-900">Email</h3>
            <p className="mt-1 text-sm text-stone-600">Kirim kebutuhan desain dan spesifikasi.</p>
            <p className="mt-2 font-medium text-stone-800">halo@anugrahcup.id</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><MapPin className="h-5 w-5" /></div>
            <h3 className="mt-4 font-semibold text-stone-900">Lokasi</h3>
            <p className="mt-1 text-sm text-stone-600">Pontianak, Kalimantan Barat</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-medium text-amber-700 hover:underline"
            >Lihat di Google Maps</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              form.reset();
              alert("Terima kasih! Pesan Anda sudah terkirim.");
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-stone-700">Nama</label>
              <input required type="text" className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200" placeholder="Nama Anda" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-stone-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200" placeholder="email@contoh.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-700">Pesan</label>
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200" placeholder="Ceritakan kebutuhan Anda"></textarea>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 font-medium text-white shadow-md shadow-amber-600/30 transition hover:bg-amber-700">
                <Send className="h-5 w-5" />
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
