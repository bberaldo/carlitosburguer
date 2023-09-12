import FormLogin from "@/components/common/Form/Login";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="bg-brand-200 min-h-screen">
      <section>
        <div className="row">
          <div className="container">
            <h1 className="uppercase tracking-widest text-center font-bold font-sphere text-xl text-brand-100">
              Olá, Carlos!
            </h1>
          </div>
        </div>
      </section>
      <div className="w-full">
        <img src="/img/quadriculado.png" alt="" className="w-full" />
      </div>
      <section className="font-sphere">
        <div className="row">
          <div className="container">
            <h3 className="uppercase tracking-widest text-center font-bold font-sphere text-xl text-brand-100">
              Seus Pedidos
            </h3>

            <div className="flex flex-wrap md:flex-nowrap gap-3 place-content-center md:place-content-between mt-3 sm:justify-between bg-brand-100/80 pt-3 pb-5 px-5 rounded-md shadow-xl">
              <div className="flex gap-x-2 w-full md:w-fit">
                <div className="max-w-[7rem]">
                  <img src="/img/carrinho.png" alt="" />
                </div>
                <div className="flex flex-col justify-end leading-none">
                  <h2 className="text-brand-300 text-lg leading-tight">
                    1X ONION BURGUER
                  </h2>
                  <p className="text-brand-200">R$ 43,00</p>
                  <p className="text-brand-300 uppercase">Adicionais</p>
                  <p className="uppercase text-brand-300/50 text-sm">
                    Cream Cheese
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center mt-5">
              <div className="w-2 h-2 bg-brand-400/60 rounded-full"></div>
              <div className="w-full h-1 bg-brand-400/60"></div>
              <div className="w-2 h-2 bg-brand-400/60 rounded-full"></div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-3 place-content-center md:place-content-between mt-3 sm:justify-between bg-brand-400/80 pt-3 pb-5 px-5 rounded-md shadow-xl">
              <div className="flex gap-x-2 w-full md:w-fit">
                <div className="max-w-[7rem]">
                  <img src="/img/carrinho.png" alt="" />
                </div>
                <div className="flex flex-col justify-end leading-none">
                  <h2 className="text-brand-300 text-lg leading-tight">
                    1X MINEIRINHO
                  </h2>
                  <p className="text-brand-200">R$ 43,00</p>
                  <p className="text-brand-300 uppercase">Adicionais</p>
                  <p className="uppercase text-brand-300/50 text-sm">
                    Cream Cheese
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
