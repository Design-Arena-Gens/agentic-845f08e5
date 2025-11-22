import { Logo } from "@/components/Logo";

const palette = [
  { name: "Nebula Green", hex: "#00FFD1", description: "طاقة كهرومغناطيسية" },
  { name: "Sky Pulse", hex: "#00AFFF", description: "سرعة هوائية ديناميكية" },
  { name: "Ultra Violet", hex: "#7A00FF", description: "ثقة متفردة" },
  { name: "Midnight Slate", hex: "#030712", description: "ثبات وتركيز" }
];

const values = [
  {
    title: "أداء عالي",
    description:
      "تصاميم مصممة هندسياً لدعم الحركة الرياضية المتقدمة دون التضحية بالأناقة."
  },
  {
    title: "تقنيات ذكية",
    description:
      "حياكة هجينة ومواد مبرّدة توفر تحكماً حرارياً مثالياً في كل موسم."
  },
  {
    title: "هوية جريئة",
    description:
      "هوية مرئية مستقبلية تعكس نبض المدينة وروح المغامرة في كل قطعة."
  }
];

const collections = [
  {
    title: "سلسلة الطيف الديناميكي",
    subtitle: "Dynamic Spectrum Series",
    description:
      "مجموعة تمزج بين القماش المقاوم للعرق وعناصر عاكسة لضمان رؤية ليلية واضحة."
  },
  {
    title: "برستيج التدريب النخبوي",
    subtitle: "Elite Training Prestige",
    description:
      "توازن بين القصّات الضاغطة والدعم البنيوي لتمارين القوة والسرعة."
  },
  {
    title: "خط السفر الرياضي",
    subtitle: "Athletic Transit Line",
    description:
      "ملابس متعددة الاستخدامات للرياضيين المتنقلين مع وحدات تخزين خفية."
  }
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="absolute -top-20 -right-32 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/80 via-sky-500/60 to-indigo-700/70" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-700/70 via-sky-600/60 to-teal-400/70" />
      </div>
      <div className="relative z-10">
        <section className="grain-overlay">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24">
            <header className="flex flex-col items-center text-center">
              <Logo className="justify-center drop-shadow-[0_12px_40px_rgba(0,255,209,0.35)]" />
              <p className="mt-8 text-lg text-slate-300 md:max-w-2xl">
                أطلق طاقتك القصوى مع علامة الملابس الرياضية{" "}
                <span className="font-semibold text-cyan-300">OUBERG</span> حيث
                تلتقي العلوم الحيوية بالتصميم الجريء لصناعة تجربة أداء لا
                تُنسى.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#identity"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-950 transition hover:scale-105"
                >
                  الهوية المرئية
                </a>
                <a
                  href="#collections"
                  className="rounded-full border border-cyan-300/40 px-8 py-3 text-sm font-semibold tracking-[0.2em] text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-50"
                >
                  مجموعات العلامة
                </a>
              </div>
            </header>
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-lg lg:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-cyan-200">
                  شعارات تحفيزية
                </h2>
                <p className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  نبض الحركة يبدأ من الدافع الداخلي. OUBERG هي شرارة الانطلاق
                  لكل إنجاز رياضي.
                </p>
                <div className="mt-8 grid gap-6 text-slate-300 md:grid-cols-2">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-3xl border border-white/5 bg-slate-950/60 p-5"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-300">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-3xl border border-cyan-300/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 text-slate-200">
                <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                  سلسلة الطموح
                </h3>
                <p className="text-2xl font-bold text-white">
                  {"\""}انطلق بسرعة الضوء، وارتدِ ثقة المستقبل{"\""}
                </p>
                <p className="text-sm text-slate-300">
                  شعار التسويق: <span className="text-cyan-300">#PulseTheFuture</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="identity" className="py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr,1fr]">
            <div className="rounded-3xl border border-cyan-300/20 bg-slate-900/50 p-10 backdrop-blur-xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                النظام اللوني
              </h2>
              <p className="mt-4 text-3xl font-bold text-white">
                لوحات لون تمنح العلامة حضوراً كهربائياً حيوياً.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {palette.map((entry) => (
                  <div
                    key={entry.hex}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/60 p-5"
                  >
                    <div
                      className="h-14 w-14 rounded-xl border border-white/10 shadow-lg"
                      style={{ background: entry.hex }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {entry.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {entry.hex}
                      </p>
                      <p className="mt-2 text-xs text-slate-300">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-10 backdrop-blur-xl">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                  الخط الرسمي
                </h3>
                <p className="mt-3 text-lg text-slate-300">
                  استخدام خط Sora مع تنويعات الوزن 400، 600، 700 يمنح القيم
                  الرياضية رصانة مستقبلية.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-7 text-center">
                <Logo className="mx-auto flex-col gap-6" hideWordmark />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.6em] text-cyan-200">
                  نبض الأداء
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="collections"
          className="border-t border-white/5 bg-slate-950/70 py-24 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
                  مجموعات مميزة
                </h2>
                <p className="mt-4 text-3xl font-bold text-white">
                  تشكيلات مبتكرة تلائم كل مشهد رياضي.
                </p>
              </div>
              <p className="text-sm text-slate-400 md:max-w-sm">
                يركز تصميم كل مجموعة على توازن الأداء والتعبير الشخصي، مع مواد
                صديقة للبيئة وتفاصيل متقدمة لتقليل الاحتكاك وتحسين التحرك.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {collections.map((collection) => (
                <article
                  key={collection.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition hover:border-cyan-300/40 hover:bg-slate-900/80"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-purple-600/20 blur-3xl transition group-hover:scale-125" />
                  <h3 className="text-lg font-bold text-white">
                    {collection.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.5em] text-cyan-200">
                    {collection.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-slate-300">
                    {collection.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                    رؤية 360°
                    <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/60 via-sky-400/60 to-purple-500/60" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-slate-950/80 py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-sm text-slate-400">
            <Logo className="justify-center" />
            <p>
              تصميم الهوية الرياضية لـ{" "}
              <span className="font-semibold text-cyan-200">OUBERG</span>، علامة
              تنطق بلغة المستقبل وترفع سقف الأداء لكل رياضي.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
