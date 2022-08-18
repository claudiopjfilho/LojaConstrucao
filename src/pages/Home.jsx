import { Header } from "../components/Header";
import { Main } from "../components/Main";

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
      </div>
    </div>
  );
}
