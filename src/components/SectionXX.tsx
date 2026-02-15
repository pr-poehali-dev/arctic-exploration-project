import ExpeditionCard from "@/components/ExpeditionCard";

const expeditions = [
  {
    year: "1912–1914",
    title: "Экспедиция к Северному полюсу",
    leader: "Руководитель: Георгий Яковлевич Седов",
    icon: "Flag",
    description:
      "Героическая попытка достичь Северного полюса на судне «Святой великомученик Фока». Несмотря на трагический исход — Седов погиб на пути к полюсу — экспедиция внесла значительный вклад в изучение Новой Земли и Земли Франца-Иосифа.",
    achievements: [
      "Исследование побережья Новой Земли и Земли Франца-Иосифа",
      "Ценные метеорологические и гидрографические наблюдения",
      "Стал символом мужества русских полярных исследователей",
      "Собранные материалы использовались учёными десятилетия",
    ],
  },
  {
    year: "1930–1932",
    title: "Освоение Северной Земли",
    leader: "Руководитель: Георгий Алексеевич Ушаков",
    icon: "Map",
    description:
      "Блестяще организованная экспедиция по исследованию и картографированию архипелага Северная Земля — последнего крупного неисследованного участка суши на планете. Группа из четырёх человек за два года обследовала весь архипелаг.",
    achievements: [
      "Полная картографическая съёмка архипелага Северная Земля",
      "Определение точных очертаний островов и проливов",
      "Открытие и наименование множества географических объектов",
      "Завершение эпохи великих географических открытий на Земле",
    ],
  },
];

const SectionXX = () => {
  return (
    <section id="xx" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="mb-12 md:mb-16">
          <span className="font-sans text-sm font-semibold text-[hsl(var(--arctic))] uppercase tracking-[0.2em] block mb-3">
            Советская эра
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Экспедиции XX века
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl leading-relaxed">
            XX век ознаменовался героическими подвигами советских полярников,
            которые покоряли Арктику во имя науки и расширения границ человеческих знаний.
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

export default SectionXX;
