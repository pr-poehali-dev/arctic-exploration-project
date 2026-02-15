import ExpeditionCard from "@/components/ExpeditionCard";

const expeditions = [
  {
    year: "1820–1824",
    title: "Колымская экспедиция",
    leader: "Руководитель: Фердинанд Петрович Врангель",
    icon: "Compass",
    description:
      "Масштабная экспедиция по исследованию северо-восточного побережья Сибири. Врангель предпринял несколько санных походов по льду Северного Ледовитого океана, стремясь достичь неизвестной земли, о которой рассказывали чукчи.",
    achievements: [
      "Описал побережье от устья Колымы до Колючинской губы",
      "Предсказал существование острова, позже названного его именем",
      "Провёл ценные наблюдения за климатом и льдами Арктики",
      "Собрал этнографические сведения о коренных народах Севера",
    ],
  },
  {
    year: "1842–1845",
    title: "Сибирская экспедиция",
    leader: "Руководитель: Александр Фёдорович Миддендорф",
    icon: "Mountain",
    description:
      "Первое комплексное научное исследование полуострова Таймыр и обширных территорий Сибири. Миддендорф провёл систематическое изучение вечной мерзлоты, флоры, фауны и геологии региона.",
    achievements: [
      "Первое научное описание вечной мерзлоты и её влияния на природу",
      "Достиг крайней северной точки Таймыра",
      "Описал более 600 видов растений сибирской тундры и тайги",
      "Заложил основы изучения мерзлотоведения как науки",
    ],
  },
];

const SectionXIX = () => {
  return (
    <section id="xix" className="section-padding bg-[hsl(var(--snow))]">
      <div className="container-narrow">
        <div className="mb-12 md:mb-16">
          <span className="font-sans text-sm font-semibold text-[hsl(var(--arctic))] uppercase tracking-[0.2em] block mb-3">
            Эпоха великих открытий
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Экспедиции XIX века
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl leading-relaxed">
            В XIX веке Российская империя организовала ряд масштабных экспедиций для изучения
            арктических территорий, которые существенно расширили знания о географии и природе Крайнего Севера.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expeditions.map((exp) => (
            <ExpeditionCard key={exp.year} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionXIX;
