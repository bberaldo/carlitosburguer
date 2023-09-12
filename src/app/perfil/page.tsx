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
              Olá, João!
            </h1>
          </div>
        </div>
      </section>
      <div className="w-full">
        <img src="/img/quadriculado.png" alt="" className="w-full" />
      </div>
      <section>
        <div className="row">
          <div className="container">
            <h3 className="uppercase tracking-widest text-center font-bold font-sphere text-xl text-brand-100">
              Seus Pedidos
            </h3>

            <div className="mt-10 flex flex-col gap-y-3 font-sphere">
              <div className="bg-brand-100/70 flex flex-wrap md:flex-nowrap place-content-between justify-end md:justify-between">
                <div className="flex flex-wrap md:flex-nowrap">
                  <div className="w-full md:max-w-[9rem]">
                    <img src="/img/lanche.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-center px-5">
                    <h2 className="text-lg text-brand-200">ONION BURGUER</h2>
                    <ul className="list-disc list-inside text-brand-300/80">
                      <li>Ao ponto</li>
                      <li>Bacon</li>
                      <li>Cheddar</li>
                    </ul>
                  </div>
                </div>

                <div className="flex place-content-end md:items-end">
                  <p className="text-lg text-brand-200 mr-3 ">2x</p>
                </div>
              </div>
              <div className="bg-brand-400/80 flex">
                <div className="max-w-[9rem]">
                  <img src="/img/lanche.png" alt="" />
                </div>
                <div className="flex flex-col justify-center px-5">
                  <h2 className="text-lg text-brand-200">ONION BURGUER</h2>
                  <ul className="list-disc list-inside text-brand-300/80">
                    <li>Ao ponto</li>
                    <li>Bacon</li>
                    <li>Cheddar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
