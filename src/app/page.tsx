import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-brand-200 min-h-screen">
      <section>
        <div className="row">
          <div className="container">
            <h1 className="uppercase tracking-widest text-center font-bold font-sphere text-xl text-brand-100">
              FAÇA SEU PEDIDO!
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
            <h2 className="uppercase tracking-widest text-center font-medium font-sphere text-lg text-brand-100">
              É só clicar e se deliciar
            </h2>

            <div className="mt-5 grid md:grid-cols-3 gap-8 font-sphere tracking-wide">
              <a href="/product" className="relative">
                <div className="absolute w-full h-full inset-0 flex items-end justify-center z-10">
                  <div className="w-fit px-3 py-1 rounded-full text-brand-100 bg-brand-200 shadow-md mb-3">
                    <p className="text-center">ONION BURGUER</p>
                  </div>
                </div>
                <img src="/img/lanche.png" className="relative" alt="" />
              </a>
              <a href="/product" className="relative">
                <div className="absolute w-full h-full inset-0 flex items-end justify-center z-10">
                  <div className="w-fit px-3 py-1 rounded-full text-brand-100 bg-brand-200 shadow-md mb-3">
                    <p className="text-center">ONION BURGUER</p>
                  </div>
                </div>
                <img src="/img/lanche.png" className="relative" alt="" />
              </a>
              <a href="/product" className="relative">
                <div className="absolute w-full h-full inset-0 flex items-end justify-center z-10">
                  <div className="w-fit px-3 py-1 rounded-full text-brand-100 bg-brand-200 shadow-md mb-3">
                    <p className="text-center">ONION BURGUER</p>
                  </div>
                </div>
                <img src="/img/lanche.png" className="relative" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}