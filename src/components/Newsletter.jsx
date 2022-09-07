import Check from "../assets/images/check.svg";

export function Newsletter() {
  return (
    <div className=" mt-16 w-full h-12">
      <div className="flex flex-row content-evenly">
        <h2 className="my-auto ml-20 font-poppins text-lg">Newsletter</h2>

        <p>Receba nossas ofertas por e-mail</p>

        <input
          type="email"
          name="email"
          value=""
          placeholder="Digite seu e-mail"
        />
        <img src={Check} alt="" className="bg-black p-1" />
      </div>
    </div>
  );
}
