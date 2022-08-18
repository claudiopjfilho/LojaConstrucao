import Pic from "../assets/images/card.png";
import { NavBar } from "../components/NavBar";

export function Header() {
  return (
    <div>
      <NavBar />
      <div>
        <img src={Pic} alt="" />
      </div>

      <div></div>
    </div>
  );
}
