import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-sm font-semibold text-[hsl(var(--arctic))] uppercase tracking-[0.2em] block mb-3">
            Об исследовании
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            О проекте
          </h2>

          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
            Данный проект посвящён роли русских путешественников и учёных в изучении природы Арктики.
            Представлены ключевые экспедиции XIX–XX веков, которые внесли фундаментальный вклад
            в географическую науку и расширили границы человеческого знания о Крайнем Севере.
          </p>

          <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
            От санных походов Врангеля по льду Северного Ледовитого океана до дрейфующей станции
            «Северный полюс-1» — каждая экспедиция стала важной вехой в истории освоения Арктики
            и продемонстрировала мужество и научную целеустремлённость русских полярных исследователей.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-[hsl(var(--snow))] rounded-lg">
              <Icon name="BookOpen" size={28} className="mx-auto text-[hsl(var(--arctic))] mb-3" />
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Достоверность</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Материалы основаны на исторических источниках и научных публикациях
              </p>
            </div>
            <div className="p-6 bg-[hsl(var(--snow))] rounded-lg">
              <Icon name="Globe" size={28} className="mx-auto text-[hsl(var(--arctic))] mb-3" />
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">География</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Интерактивная карта маршрутов с географическими данными экспедиций
              </p>
            </div>
            <div className="p-6 bg-[hsl(var(--snow))] rounded-lg">
              <Icon name="Users" size={28} className="mx-auto text-[hsl(var(--arctic))] mb-3" />
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Люди</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Биографии и роли участников ключевых арктических экспедиций
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="font-sans text-xs text-muted-foreground">
              © 2026 · Роль русских путешественников в изучении природы Арктики
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
