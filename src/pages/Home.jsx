import React from "react";

import { About } from "../components/About";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { News } from "../components/News";
import { Newsletter } from "../components/Newsletter";

export function Home() {
  return (
    <div className="w-full  h-full bg-zinc-50">
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
        <div>
          <Newsletter />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
