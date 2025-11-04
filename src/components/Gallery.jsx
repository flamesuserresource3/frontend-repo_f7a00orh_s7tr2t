import { Image } from "lucide-react";

const items = [
  { title: "Logo Monokrom", from: "from-amber-200", to: "to-rose-200" },
  { title: "Logo Warna", from: "from-orange-200", to: "to-amber-100" },
  { title: "Cup Ukuran 12oz", from: "from-rose-200", to: "to-amber-200" },
  { title: "Cup Ukuran 16oz", from: "from-amber-100", to: "to-orange-200" },
  { title: "Desain Minimalis", from: "from-amber-200", to: "to-emerald-200" },
  { title: "Desain Pattern", from: "from-sky-200", to: "to-amber-200" },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Contoh Hasil Sablon</h2>
          <p className="mt-3 text-stone-600">Sekilas galeri karya kami. Siap menampilkan brand Anda sebaik mungkin.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br ${it.from} ${it.to} p-5`}
            >
              <div className="flex h-40 items-center justify-center rounded-xl bg-white/60 backdrop-blur">
                <Image className="h-10 w-10 text-stone-500" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="font-medium text-stone-800">{it.title}</p>
                <span className="text-xs text-stone-500">Preview</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
