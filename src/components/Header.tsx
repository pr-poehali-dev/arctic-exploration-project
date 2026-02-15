import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { id: "hero", label: "Главная" },
  { id: "xix", label: "XIX век" },
  { id: "xx", label: "XX век" },
  { id: "sp1", label: "Северный полюс-1" },
  { id: "map", label: "Карта" },
  { id: "about", label: "О проекте" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-serif text-lg font-bold text-foreground tracking-tight">
          Арктика
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3 py-2 text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
        >
          <Icon name={isOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-border px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-3 py-2.5 text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
