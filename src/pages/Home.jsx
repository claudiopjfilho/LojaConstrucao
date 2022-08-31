import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { News } from "../components/News";

export function Home() {
  return (
    <div className="w-full h-screen bg-zinc-50">
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <News />
        </div>
      </div>
    </div>
  );
}
