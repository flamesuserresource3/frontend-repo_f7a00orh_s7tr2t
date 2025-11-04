import { Check, Sparkles } from "lucide-react";

const features = [
  {
    title: "Sablon Cup Kustom",
    desc: "Cetak logo atau desain brand Anda pada berbagai ukuran cup (cold & hot).",
    icon: Sparkles,
  },
  {
    title: "Desain Sesuai Keinginan",
    desc: "Bawa desain sendiri atau minta tim kami bantu wujudkan konsep Anda.",
    icon: Check,
  },
  {
    title: "Layanan Cepat & Ramah",
    desc: "Proses responsif, komunikasi jelas, dan hasil tepat waktu.",
    icon: Check,
  },
  {
    title: "Harga Bersahabat",
    desc: "Kualitas tetap utama dengan penawaran yang kompetitif.",
    icon: Check,
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Mengapa pilih Anugrah Cup?</h2>
          <p className="mt-3 text-stone-600">Solusi sablon cup andalan bisnis minuman Anda di Pontianak.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
