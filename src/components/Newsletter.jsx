import Check from "../assets/images/check.svg";

export function Newsletter() {
  return (
    <div>
      <hr className="mt-8 w-full border-orange-400" />
      <div className=" mt-8  w-full">
        <div className="flex flex-row my-auto justify-between">
          <h2 className=" ml-20 font-poppins text-lg">Newsletter</h2>
          <div className=" mb-8 flex flex-row">
            <p className=" my-auto mr-52 font-poppins ">
              Receba nossas ofertas por e-mail
            </p>

            <div className="mr-20 flex flex-row border-2  border-black rounded-md">
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                className=" w-44 h-8 p-1 my-auto "
              />
              <img src={Check} alt="" className="bg-black p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
