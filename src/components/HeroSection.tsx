const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center arctic-gradient text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://cdn.poehali.dev/projects/c1009d06-e7b0-4add-9ede-190a7806a354/files/be6bf7a7-e9f0-4167-98c8-9ba3ed10bd9d.jpg"
          alt="Арктический пейзаж"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-sm md:text-base uppercase tracking-[0.3em] text-blue-200 mb-6 fade-in" style={{ animationDelay: "0.2s" }}>
          Исследование • История • Наука
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in-up" style={{ animationDelay: "0.4s" }}>
          Роль русских путешественников <br className="hidden sm:block" />
          в изучении природы Арктики
        </h1>

        <p className="font-sans text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10 fade-in-up" style={{ animationDelay: "0.6s" }}>
          Ключевые экспедиции XIX–XX веков, открывшие миру тайны Северного Ледовитого океана
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-sans fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
            <div className="text-blue-200 mt-1">лет исследований</div>
          </div>
          <div className="w-px bg-blue-300/30 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">5</div>
            <div className="text-blue-200 mt-1">ключевых экспедиций</div>
          </div>
          <div className="w-px bg-blue-300/30 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">2000+</div>
            <div className="text-blue-200 mt-1">км дрейфа СП-1</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
