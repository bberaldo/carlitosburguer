"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { HiPlusSm } from "react-icons/hi";

export default function Product() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-brand-200 min-h-[90vh]">
      <div className="w-full">
        <img src="/img/quadriculado.png" alt="" className="w-full" />
      </div>
      <section>
        <div className="row">
          <div className="container grid sm:grid-cols-2 gap-5">
            <div className="max-w-md mx-auto">
              <img src="/img/lanche.png" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="">
                <div className="flex place-content-center">
                  <div className="pt-1 pb-2 px-3 font-sphere bg-brand-100 text-brand-200 w-fit rounded-2xl">
                    <h1 className="text-center text-4xl tracking-widest">
                      ONION BURGUER
                    </h1>
                  </div>
                </div>
                <p className="text-brand-400 font-medium tracking-wide leading-relaxed mt-7 text-justify">
                  Pão brioche selado na manteiga, 1 hamburger de 180grs
                  artesanal, queijo gouda derretido no maçarico, anéis de cebola
                  enrolados no bacon, alface, tomate, cebolinha fresca, molho
                  barbecue e maionese temperada. (acompanha batata frita)
                </p>
              </div>
              <div className="flex place-content-center">
                <div className="pt-1 pb-2 px-3 font-sphere bg-brand-100 text-brand-200 w-fit rounded-md">
                  <p>R$ 40, 00</p>
                </div>
              </div>

              <div className="mt-5 flex place-content-center">
                <button
                  onClick={openModal}
                  className="w-fit px-3 py-1 pb-1.5 rounded-full bg-brand-300 text-brand-100 uppercase font-sphere"
                >
                  Adicionar ao Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="max-w-7xl mx-auto bg-brand-100 h-36"></div> */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-sm bg-brand-100 p-6 text-left align-middle shadow-xl transition-all relative font-sphere">
                  <div className="flex flex-col gap-y-2">
                    <div className="bg-brand-200 py-1 flex px-2 gap-2">
                      <div className="max-w-[2rem]">
                        <img src="/img/carlitos-amarelo.png" alt="" />
                      </div>
                      <div className="flex items-center">
                        <h2 className="text-brand-100  sm:text-lg tracking-wider uppercase">
                          escolha o ponto da carne*
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ul className="mt-3 flex flex-col gap-y-2">
                      <li className="px-2 py-1 flex place-content-between bg-brand-200/20">
                        <h3 className="text-brand-200 uppercase">
                          Mal passada
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-400/50">
                        <h3 className="text-brand-200 uppercase">ao ponto</h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-200/20">
                        <h3 className="text-brand-200 uppercase">
                          Bem passada
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-y-2 mt-8">
                    <div className="bg-brand-200 py-1 flex px-2 gap-2">
                      <div className="max-w-[2rem]">
                        <img src="/img/carlitos-amarelo.png" alt="" />
                      </div>
                      <div className="flex items-center">
                        <h2 className="text-brand-100  sm:text-lg tracking-wider uppercase">
                          Adicionais (Escolha até 3 opções)*
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ul className="mt-3 flex flex-col gap-y-2">
                      <li className="px-2 py-1 flex place-content-between bg-brand-200/20">
                        <h3 className="text-brand-200 uppercase">
                          Hamburguer 180g
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-400/50">
                        <h3 className="text-brand-200 uppercase">Bacon</h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-200/20">
                        <h3 className="text-brand-200 uppercase">Catupiry</h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-400/50">
                        <h3 className="text-brand-200 uppercase">
                          Cream Cheese
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-200/20">
                        <h3 className="text-brand-200 uppercase">
                          Queijo Prata
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-400/50">
                        <h3 className="text-brand-200 uppercase">
                          Queijo Brie
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                      <li className="px-2 py-1 flex place-content-between bg-brand-200/20">
                        <h3 className="text-brand-200 uppercase">
                          Cebola Crispy
                        </h3>
                        <div className="rounded-full bg-brand-200 p-1 text-lg text-brand-100 flex place-content-center items-center">
                          <HiPlusSm />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 flex place-content-center">
                    <button className="w-fit px-3 py-1 pb-1.5 rounded-full bg-brand-300 text-brand-100 uppercase font-sphere">
                      Adicionar ao Pedido
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
