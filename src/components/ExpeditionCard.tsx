import Icon from "@/components/ui/icon";

interface ExpeditionCardProps {
  year: string;
  title: string;
  leader: string;
  description: string;
  achievements: string[];
  icon: string;
  photo?: string;
  leaderName?: string;
}

const ExpeditionCard = ({ year, title, leader, description, achievements, icon, photo, leaderName }: ExpeditionCardProps) => {
  return (
    <div className="group bg-white border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {photo && (
        <div className="flex items-center gap-4 mb-5">
          <img
            src={photo}
            alt={leaderName || leader}
            className="w-20 h-20 rounded-full object-cover border-2 border-[hsl(var(--arctic-light))] shadow-sm"
          />
          <div>
            <span className="font-sans text-sm font-semibold text-[hsl(var(--arctic))] tracking-wide uppercase">
              {year}
            </span>
            <h3 className="font-serif text-xl font-bold text-foreground mt-1">{title}</h3>
            <p className="font-sans text-sm text-muted-foreground">{leader}</p>
          </div>
        </div>
      )}

      {!photo && (
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 w-12 h-12 rounded-lg bg-[hsl(var(--arctic-light))] flex items-center justify-center text-[hsl(var(--arctic))]">
            <Icon name={icon} size={24} />
          </div>
          <div>
            <span className="font-sans text-sm font-semibold text-[hsl(var(--arctic))] tracking-wide uppercase">
              {year}
            </span>
            <h3 className="font-serif text-xl font-bold text-foreground mt-1">{title}</h3>
            <p className="font-sans text-sm text-muted-foreground">{leader}</p>
          </div>
        </div>
      )}

      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      <div className="space-y-2">
        {achievements.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <Icon name="CheckCircle" size={16} className="shrink-0 text-[hsl(var(--arctic))] mt-0.5" />
            <span className="font-sans text-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpeditionCard;
