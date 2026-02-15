import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Expedition {
  id: string;
  name: string;
  years: string;
  leader: string;
  color: string;
  points: { x: number; y: number; label: string }[];
  description: string;
}

const expeditions: Expedition[] = [
  {
    id: "wrangel",
    name: "Экспедиция Врангеля",
    years: "1820–1824",
    leader: "Ф.П. Врангель",
    color: "#E67E22",
    points: [
      { x: 78, y: 52, label: "Нижнеколымск" },
      { x: 82, y: 42, label: "Побережье Чукотки" },
      { x: 85, y: 35, label: "Остров Врангеля" },
    ],
    description: "Исследование северо-восточного побережья Сибири, от устья Колымы до Колючинской губы.",
  },
  {
    id: "middendorf",
    name: "Экспедиция Миддендорфа",
    years: "1842–1845",
    leader: "А.Ф. Миддендорф",
    color: "#27AE60",
    points: [
      { x: 52, y: 62, label: "Красноярск" },
      { x: 55, y: 48, label: "Таймыр" },
      { x: 53, y: 38, label: "Мыс Челюскин" },
    ],
    description: "Первое комплексное научное исследование полуострова Таймыр и Сибири.",
  },
  {
    id: "sedov",
    name: "Экспедиция Седова",
    years: "1912–1914",
    leader: "Г.Я. Седов",
    color: "#E74C3C",
    points: [
      { x: 30, y: 60, label: "Архангельск" },
      { x: 32, y: 45, label: "Новая Земля" },
      { x: 34, y: 32, label: "Земля Франца-Иосифа" },
      { x: 38, y: 22, label: "К Северному полюсу" },
    ],
    description: "Героическая попытка достичь Северного полюса на судне «Святой Фока».",
  },
  {
    id: "ushakov",
    name: "Экспедиция Ушакова",
    years: "1930–1932",
    leader: "Г.А. Ушаков",
    color: "#9B59B6",
    points: [
      { x: 45, y: 55, label: "Диксон" },
      { x: 50, y: 35, label: "Северная Земля (юг)" },
      { x: 52, y: 28, label: "Северная Земля (север)" },
    ],
    description: "Полная картографическая съёмка архипелага Северная Земля.",
  },
  {
    id: "sp1",
    name: "Северный полюс-1",
    years: "1937–1938",
    leader: "И.Д. Папанин",
    color: "#3498DB",
    points: [
      { x: 40, y: 12, label: "Северный полюс (старт)" },
      { x: 35, y: 18, label: "Дрейф на юг" },
      { x: 25, y: 30, label: "Продолжение дрейфа" },
      { x: 18, y: 42, label: "Гренландское море" },
      { x: 15, y: 50, label: "Эвакуация" },
    ],
    description: "Первая дрейфующая станция: 274 дня, более 2000 км от полюса к Гренландии.",
  },
];

const ArcticMap = () => {
  const [activeExpedition, setActiveExpedition] = useState<string | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const active = expeditions.find((e) => e.id === activeExpedition);

  return (
    <section id="map" className="section-padding bg-[hsl(var(--snow))]">
      <div className="container-narrow">
        <div className="mb-12 md:mb-16">
          <span className="font-sans text-sm font-semibold text-[hsl(var(--arctic))] uppercase tracking-[0.2em] block mb-3">
            География открытий
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Карта экспедиций
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl leading-relaxed">
            Интерактивная карта маршрутов ключевых арктических экспедиций. Нажмите на экспедицию, чтобы увидеть маршрут.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-b from-[hsl(210,40%,92%)] to-[hsl(200,30%,85%)] rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <svg viewBox="0 0 100 75" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="polar" cx="40" cy="12" r="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="hsl(200, 30%, 95%)" />
                    <stop offset="100%" stopColor="hsl(210, 35%, 88%)" />
                  </radialGradient>
                </defs>

                <rect width="100" height="75" fill="url(#polar)" />

                {/* Океан */}
                <ellipse cx="40" cy="12" rx="35" ry="30" fill="hsl(210, 40%, 82%)" opacity="0.5" />

                {/* Континенты — упрощённые */}
                {/* Евразия */}
                <path
                  d="M0,65 L5,60 L15,58 L20,62 L28,58 L35,60 L42,57 L50,60 L58,55 L65,58 L72,54 L78,56 L85,52 L92,55 L100,52 L100,75 L0,75 Z"
                  fill="hsl(45, 15%, 72%)"
                  stroke="hsl(45, 10%, 60%)"
                  strokeWidth="0.3"
                />

                {/* Новая Земля */}
                <path d="M30,42 L32,38 L33,44 Z" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.2" />

                {/* Земля Франца-Иосифа */}
                <circle cx="34" cy="30" r="2" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.2" />

                {/* Северная Земля */}
                <path d="M49,30 L52,27 L54,32 L50,34 Z" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.2" />

                {/* Таймыр */}
                <path d="M48,52 L53,42 L58,50 Z" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.2" />

                {/* Остров Врангеля */}
                <circle cx="85" cy="38" r="1.5" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.2" />

                {/* Шпицберген */}
                <circle cx="22" cy="35" r="1.5" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.2" />

                {/* Гренландия */}
                <path d="M8,25 L15,20 L18,30 L15,50 L10,48 L5,38 Z" fill="hsl(45, 15%, 72%)" stroke="hsl(45, 10%, 60%)" strokeWidth="0.3" />

                {/* Северный полюс */}
                <circle cx="40" cy="12" r="0.8" fill="none" stroke="hsl(0, 0%, 50%)" strokeWidth="0.2" strokeDasharray="0.5" />
                <text x="42" y="13" fontSize="2.5" fill="hsl(0, 0%, 45%)" fontFamily="sans-serif">
                  С. полюс
                </text>

                {/* Маршруты */}
                {expeditions.map((exp) => {
                  const isActive = activeExpedition === exp.id || !activeExpedition;
                  const opacity = activeExpedition && activeExpedition !== exp.id ? 0.15 : 1;

                  const pathD = exp.points
                    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
                    .join(" ");

                  return (
                    <g key={exp.id} opacity={opacity} className="transition-opacity duration-300">
                      <path
                        d={pathD}
                        fill="none"
                        stroke={exp.color}
                        strokeWidth={isActive && activeExpedition ? "1" : "0.6"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={exp.id === "sp1" ? "1.5 0.8" : "none"}
                      />

                      {exp.points.map((point, i) => (
                        <g key={`${exp.id}-${i}`}>
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={activeExpedition === exp.id ? "1.2" : "0.8"}
                            fill={exp.color}
                            stroke="white"
                            strokeWidth="0.3"
                            className="cursor-pointer transition-all duration-200"
                            onMouseEnter={() => setHoveredPoint(`${exp.id}-${i}`)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />
                          {hoveredPoint === `${exp.id}-${i}` && (
                            <g>
                              <rect
                                x={point.x + 2}
                                y={point.y - 4}
                                width={point.label.length * 1.6 + 2}
                                height="5"
                                rx="1"
                                fill="hsl(215, 25%, 15%)"
                                opacity="0.9"
                              />
                              <text
                                x={point.x + 3}
                                y={point.y - 0.5}
                                fontSize="2.2"
                                fill="white"
                                fontFamily="sans-serif"
                              >
                                {point.label}
                              </text>
                            </g>
                          )}
                        </g>
                      ))}
                    </g>
                  );
                })}

                {/* Подписи к географическим объектам */}
                <text x="6" y="37" fontSize="2" fill="hsl(0, 0%, 50%)" fontFamily="sans-serif">Гренландия</text>
                <text x="22" y="33" fontSize="1.5" fill="hsl(0, 0%, 50%)" fontFamily="sans-serif">Шпицберген</text>
                <text x="25" y="46" fontSize="1.5" fill="hsl(0, 0%, 50%)" fontFamily="sans-serif">Новая Земля</text>
                <text x="41" y="35" fontSize="1.5" fill="hsl(0, 0%, 50%)" fontFamily="sans-serif">Сев. Земля</text>
                <text x="48" y="50" fontSize="1.5" fill="hsl(0, 0%, 50%)" fontFamily="sans-serif">Таймыр</text>
                <text x="82" y="43" fontSize="1.5" fill="hsl(0, 0%, 50%)" fontFamily="sans-serif">о. Врангеля</text>
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">
              Выберите экспедицию
            </p>
            {expeditions.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExpedition(activeExpedition === exp.id ? null : exp.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  activeExpedition === exp.id
                    ? "bg-white shadow-md border-border"
                    : "bg-transparent border-transparent hover:bg-white/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: exp.color }}
                  />
                  <div>
                    <div className="font-sans text-sm font-semibold text-foreground">{exp.name}</div>
                    <div className="font-sans text-xs text-muted-foreground">{exp.years} • {exp.leader}</div>
                  </div>
                </div>
                {activeExpedition === exp.id && (
                  <p className="font-sans text-xs text-muted-foreground mt-2 ml-6 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </button>
            ))}

            {!activeExpedition && (
              <div className="mt-4 p-3 bg-[hsl(var(--arctic-light))] rounded-lg">
                <div className="flex items-center gap-2 text-[hsl(var(--arctic))]">
                  <Icon name="Info" size={14} />
                  <span className="font-sans text-xs">Нажмите на экспедицию для подробностей</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcticMap;
