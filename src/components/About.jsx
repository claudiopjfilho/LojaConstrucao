export function About() {
  return (
    <div className="flex w-full h-36 bg-black text-white p-2">
      <div className="flex flex-row mx-auto mt-4">
        <div className="flex flex-row justify-center">
          <ul>
            <li>
              <h2 className="font-poppins text-xs">Categorias</h2>
            </li>
            <li>
              <p>
                Casa inteligente • Interruptores • Tomadas • Relé • Hubs •
                Sensores • Lâmpadas • Controles
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <h2 className="font-poppins text-xs">Institucional</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
