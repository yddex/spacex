import { Logo } from "../Logo";
import {Nav} from "../Nav";
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
      <Nav links={links}/>
    </header>
  );
}
