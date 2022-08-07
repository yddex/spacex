import {  useState } from "react";
import burger from "../../img/burger.png";
import close from "../../img/close.png";
import "./style.scss";
export function Nav({ links }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = (state) => {
    setOpen(state);
  };

  return (
    <>
      <img
        src={burger}
        alt="MENU"
        className={`nav__open ${open && "hidden"}`}
        onClick={() => {
          toggleOpen(true);
        }}
      />
      <nav className={`nav ${open && "open"}`}>
        <img
          src={close}
          alt="CLOSE"
          className="nav__close"
          onClick={() => {
            toggleOpen(false);
          }}
        />
        {/* Дивы, вместо тегов линка, чтобы не делать заглушки, которые обновят SPA */}
        {links.map((link, i) => {
          return (
            <div className="nav__link" key={i}>
              {link}
            </div>
          );
        })}
      </nav>
    </>
  );
}
