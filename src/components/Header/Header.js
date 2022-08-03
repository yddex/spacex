import { Logo } from "../Logo";
import "./style.scss";

export function Header() {
  const links = [
    "Главная",
    "Технологии",
    "График полетов",
    "Гарантии",
    "Контакты",
  ];
  return (
    <header className="header center">
      <Logo />
      <nav className="nav">
        {/* Дивы, вместо тегов линка, чтобы не делать заглушки, которые обновят SPA */}
        {links.map((link, i) => {
          return (
            <div className="nav__link" key={i}>
              {link}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
