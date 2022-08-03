import { Angles } from "./Angles";
import logo from "../../img/logo.png";
import "./style.scss";

export function Logo() {
  return (
    <section className="logo" onClick={()=>{console.log("SpaceX!")}}>
      <img src={logo} alt="SpaceX" className="logo__img" />
      <Angles/>
    </section>
  );
}
