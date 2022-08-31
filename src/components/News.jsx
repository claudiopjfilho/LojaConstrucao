import Interruptor1 from "../assets/images/interruptor1_sonoff.png";
import Interruptor2 from "../assets/images/interruptor2_sonoff.png";
import TomadaSemFio from "../assets/images/tomadasemfio_sonoff.png";
import Interruptor3 from "../assets/images/interruptor3_sonoff.png";
import "./news.css";
export function News() {
  return (
    <div>
      <div className="flex justify-center text-center">
        <h2 className="font-poppins text-xl mb-6">Lançamentos</h2>
      </div>

      <section className="m-12 flex flex-row justify-around">
        <div class="box-news">
          <div className="mx-8">
            <span className="flex p-2 w-14 h-8  mb-2 font-poppins text-center text-white bg-orange-300">
              10% OFF
            </span>
            <img
              className="w-48 h-48 mx-auto"
              src={Interruptor1}
              alt="foto interruptor inteligente sonoff Mini R2"
            />

            <p className="mt-2 mb-2">
              Interruptor inteligente Sonoff Mini R2 - Wifi - Automação
              Residencial
            </p>

            <span className="mb-2 text-zinc-500 "> 5x de R$ 13,58</span>

            <p className=" mt-2 font-bold text-xs">R$ 67,90</p>

            <button className=" mt-4 w-48 h-14 rounded-md text-gray-50 text-sm bg-orange-400">
              Ver mais
            </button>
          </div>
        </div>
        <div class="box-news">
          <div className="mx-8">
            <span className="flex p-2 w-14 h-8  mb-2 font-poppins text-center text-white bg-orange-300">
              10% OFF
            </span>
            <img
              className="w-32 h-48 mx-auto"
              src={Interruptor2}
              alt="foto interruptor inteligente sonoff Mini R2"
            />

            <p className=" mt-2 mb-2">
              Interruptor inteligente Sonoff Mini R2 - Wifi - Automação
              Residencial
            </p>

            <span className="mb-2 text-zinc-500 "> 5x de R$ 13,58</span>

            <p className=" mt-2 font-bold text-xs">R$ 67,90</p>

            <button className=" mt-4 w-48 h-14 rounded-md text-gray-50 text-sm bg-orange-400">
              Ver mais
            </button>
          </div>
        </div>

        <div class="box-news">
          <div className="mx-8">
            <span className="flex p-2 w-14 h-8  mb-2 font-poppins text-center text-white bg-orange-300">
              10% OFF
            </span>
            <img
              className="w-32 h-48 mx-auto"
              src={TomadaSemFio}
              alt="foto interruptor inteligente sonoff Mini R2"
            />

            <p className=" mt-2 mb-2">
              Interruptor inteligente Sonoff Mini R2 - Wifi - Automação
              Residencial
            </p>

            <span className="mb-2 text-zinc-500 "> 5x de R$ 13,58</span>

            <p className=" mt-2 font-bold text-xs">R$ 67,90</p>

            <button className=" mt-4 w-48 h-14 rounded-md text-gray-50 text-sm bg-orange-400">
              Ver mais
            </button>
          </div>
        </div>
        <div class="box-news">
          <div className="mx-8">
            <span className="flex p-2 w-14 h-8  mb-2 font-poppins text-center text-white bg-orange-300">
              10% OFF
            </span>
            <img
              className="w-32 h-48 mx-auto"
              src={Interruptor3}
              alt="foto interruptor inteligente sonoff Mini R2"
            />

            <p className=" mt-2 mb-2">
              Interruptor inteligente Sonoff Mini R2 - Wifi - Automação
              Residencial
            </p>

            <span className="mb-2 text-zinc-500 "> 5x de R$ 13,58</span>

            <p className=" mt-2 font-bold text-xs">R$ 67,90</p>

            <button className=" mt-4 w-48 h-14 rounded-md text-gray-50 text-sm bg-orange-400">
              Ver mais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
