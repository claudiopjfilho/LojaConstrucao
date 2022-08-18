import { Main } from "../components/Header";
import { NavBar } from "../components/NavBar";

export function Home() {
  return (
    <div className="w-full h-screen bg-slate-700">
      <div>
        <NavBar />
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
}
