import React from "react";

import Facebook from "../assets/images/facebook-ico.svg";
import Instagram from "../assets/images/instagram-ico.svg";
import Twitter from "../assets/images/twitter-ico.svg";
import Youtube from "../assets/images/youtube-ico.svg";
import Pinterest from "../assets/images/pinterest-ico.svg";

export function About() {
  return (
    <div className="flex  w-full h-64 bg-black text-white p-2 font-poppins flex-col">
      <div className="flex flex-row mx-auto mt-4">
        <div className="flex flex-row  gap-52 ">
          <div>
            <h2 className="text-xs">Institucional</h2>
            <ul className="mt-4 gap-8 text-gray-200">
              <li className=" mb-2">
                <a href="">• Fale Conosco</a>
              </li>
              <li className=" mb-2    ">
                <a href="">• Política de Privacidade</a>
              </li>
              <li className=" mb-2    ">
                <a href="">• Quem Somos</a>
              </li>
              <li className="">
                <a href="">• Troca e Devolução</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-left text-xs ">Contato</h2>
            <ul className="list-inside text-left">
              <li className=" mt-4     text-gray-200">
                <p className=" mb-2    ">Telefone +55 XX XXXXXXXXX</p>
                <p className=" mb-2    ">Whatsapp +55 XX XXXXXXXXX</p>
                <p>E-mail nome@empresa.com</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-left text-xs">Atendimento</h2>
            <p className=" mt-4     text-gray-200">
              Seg à Sáb das 8h00 às 18h00
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12  w-full flex flex-row justify-center  content-center">
        <hr className="flex mt-3 ml-0  w-96 border-gray-400 " />
        <div className="flex flex-row  mx-auto gap-16">
          <a href="https://facebook.com" target="_blank">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src={Youtube} alt="" />
          </a>

          <a href="https://pinterest.com" target="_blank">
            <img src={Pinterest} alt="" />
          </a>
        </div>
        <hr className="flex mt-3 mr-0 w-96 border-gray-400 justify-center" />
      </div>
    </div>
  );
}
