import Icon from "@/components/ui/icon";

const crewMembers = [
  {
    name: "Иван Дмитриевич Папанин",
    role: "Начальник станции",
    description: "Руководил всей деятельностью станции, координировал научную работу и бытовое обеспечение экспедиции.",
    icon: "Star",
  },
  {
    name: "Евгений Константинович Фёдоров",
    role: "Геофизик, метеоролог",
    description: "Вёл систематические наблюдения за магнитным полем Земли, проводил астрономические определения координат.",
    icon: "Cloud",
  },
  {
    name: "Эрнст Теодорович Кренкель",
    role: "Радист",
    description: "Обеспечивал бесперебойную радиосвязь с Большой землёй, передавая научные данные и метеосводки.",
    icon: "Radio",
  },
  {
    name: "Пётр Петрович Ширшов",
    role: "Гидробиолог, океанограф",
    description: "Исследовал органическую жизнь Северного Ледовитого океана, проводил гидрохимические анализы воды.",
    icon: "Waves",
  },
];

const stats = [
  { value: "274", label: "дня дрейфа", icon: "Calendar" },
  { value: "2 000+", label: "км пройдено", icon: "Route" },
  { value: "21 мая", label: "1937 — высадка", icon: "Plane" },
  { value: "19 фев.", label: "1938 — эвакуация", icon: "Ship" },
];

const SectionSP1 = () => {
  return (
    <section id="sp1" className="section-padding bg-[hsl(var(--arctic-dark))] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="mb-12 md:mb-16">
          <span className="font-sans text-sm font-semibold text-blue-300 uppercase tracking-[0.2em] block mb-3">
            Историческое достижение
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Экспедиция «Северный полюс-1»
          </h2>
          <p className="font-sans text-base text-blue-200 max-w-3xl leading-relaxed">
            Первая в мире дрейфующая научная станция на Северном полюсе. 21 мая 1937 года четвёрка
            отважных полярников была высажена на льдину вблизи Северного полюса. Начался беспрецедентный
            научный дрейф, который длился 274 дня. За это время станция прошла более 2000 километров,
            продрейфовав от полюса к берегам Гренландии.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-5 text-center"
            >
              <Icon name={stat.icon} size={20} className="mx-auto text-blue-300 mb-2" />
              <div className="font-serif text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="font-sans text-xs md:text-sm text-blue-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-bold text-white mb-8">Состав экспедиции</h3>

        <div className="grid md:grid-cols-2 gap-5">
          {crewMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <Icon name={member.icon} size={18} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">{member.name}</h4>
                  <p className="font-sans text-sm font-medium text-blue-300 mb-2">{member.role}</p>
                  <p className="font-sans text-sm text-blue-100/80 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
          <h4 className="font-serif text-lg font-bold text-white mb-3">Научные результаты</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Доказана возможность жизни и работы на дрейфующих льдах",
              "Измерена глубина океана у Северного полюса — более 4000 метров",
              "Обнаружено тёплое подводное течение Атлантики подо льдами Арктики",
              "Установлено, что органическая жизнь существует вплоть до самого полюса",
              "Проведены уникальные магнитные и гравиметрические наблюдения",
              "Собраны ценнейшие метеорологические данные за 9 месяцев",
            ].map((result, i) => (
              <div key={i} className="flex items-start gap-2">
                <Icon name="Snowflake" size={14} className="shrink-0 text-blue-300 mt-1" />
                <span className="font-sans text-sm text-blue-100">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSP1;
