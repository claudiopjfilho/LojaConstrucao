export function About() {
  return (
    <div className="flex w-full h-36 bg-black text-white p-2 font-poppins">
      <div className="flex flex-row mx-auto mt-4">
        <div className="flex flex-row  gap-16 ">
          <div>
            <h2 className="text-left text-xs">Categorias</h2>
            <ul>
              <li className=" mt-4 grid grid-cols-2 gap-1 w-42 items-start text-gray-200">
                <a href="">• Casa inteligente</a>
                <a href="">• Interruptores</a>
                <a href="">• Tomadas</a>
                <a href="">• Sensores</a>
                <a href="">• Lâmpadas</a>
                <a href="">•Controles</a>
                <a href="">• Relé</a>
                <a href="">• Hubs</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-left text-xs">Institucional</h2>
            <ul className="list-inside">
              <li className=" mt-4     text-gray-200">
                <a href="">• Fale Conosco</a>
                <a href="">• Política de Privacidade</a>
                <a href="">• Quem Somos</a>
                <a href="">• Troca e Devolução</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-left text-xs">Contato</h2>
            <ul className="list-inside text-left">
              <li className=" mt-4     text-gray-200">
                <a href="">Telefone +55 XX XXXXXXXXX</a>
                <a href="">Whatsapp +55 XX XXXXXXXXX</a>
                <a href="">E-mail nome@empresa.com</a>
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
    </div>
  );
}
