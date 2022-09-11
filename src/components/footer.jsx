import Selo from "../assets/images/site-protegido.png";
import Logo from "../assets/images/logo-home.png";
import Elo from "../assets/images/payment/elo.png";
import Hipercard from "../assets/images/payment/hipercard.png";
import Mastercard from "../assets/images/payment/mastercard.png";
import AmericanExpress from "../assets/images/payment/american-express.png";
import Boleto from "../assets/images/payment/boleto.png";
import Visa from "../assets/images/payment/visa.png";

export function Footer() {
  return (
    <div className="mt-4 bg-slate-50 w-full h-40">
      <section className="ml-4 font-poppins text-lg flex">
        <div className=" font-poppins text-md">
          <h2 className="">Pague com:</h2>
          <div className="grid grid-cols-3 mt-2 gap-2 ">
            <img src={AmericanExpress} alt="" />
            <img src={Elo} alt="" />
            <img src={Visa} alt="" />
            <img src={Hipercard} alt="" />
            <img src={Mastercard} alt="" />
            <img src={Boleto} alt="" />
          </div>
        </div>
        <div className="mx-auto text-center w-64">
          <div className="flex flex-col">
            <h2 className="mb-4 flex -left-3">Selos:</h2>

            <img src={Selo} alt="" className="w-52" />
          </div>
        </div>
      </section>
      <hr className="mt-8 w-full border-gray-400" />
      <section className="w-full bg-slate-50 flex flex-col">
        <p className="mx-auto mt-4 text-center">
          © Copyright 2022 homemaster – Todos os direitos reservados | Solução
          TI Treinamentos e Produtos de Informática Ltda Me | 10.831.650/0001-32
        </p>
        <img src={Logo} alt="logo empresa" className="w-32 mx-auto " />
      </section>
    </div>
  );
}
