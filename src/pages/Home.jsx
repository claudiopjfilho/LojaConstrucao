import React from "react";

import { Nav } from "../components/Nav";
import { About } from "../components/About";
import { Footer } from "../components/footer";
import { News } from "../components/News";

export function Home() {
  return (
    <div className="w-full  h-full bg-zinc-50">
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <News />
        </div>
        <div>
          <About />
        </div>
        <Footer />
      </div>
    </div>
  );
}
