"use client";

import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import ReactInputMask from "react-input-mask";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useState, Fragment } from "react";

type Inputs = {
  nome: string;
  email: string;
};

const FormCadastro = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  let [isOpen, setIsOpen] = useState(false);
  const [mouse, setMouse] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msgPP, setMsgPP] = useState("hidden");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <form className="flex flex-col gap-y-3 max-w-xl w-full justify-center font-sphere">
      <div className="flex flex-col">
        <label htmlFor="" className={`text-brand-200 text-sm `}>
          Nome:
        </label>
        <div className={`relative `}>
          <div
            className={`absolute w-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-200 z-10 text-lg ${
              errors.nome && "text-brand-200"
            } transition duration-500`}
          >
            <FaUser />
          </div>
          <input
            placeholder="Seu nome."
            type="text"
            {...register("nome", {
              required: "Nome é obrigatório",
            })}
            className="py-2 pl-10 pr-3 bg-zinc-50 outline-none rounded-lg relative w-full"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="" className={`text-brand-200 text-sm `}>
          CPF:
        </label>
        <div className={`relative `}>
          <div
            className={`absolute w-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-200 z-10 text-lg ${
              errors.nome && "text-brand-200"
            } transition duration-500`}
          >
            <FaUser />
          </div>
          <input
            placeholder="Seu nome."
            type="text"
            {...register("nome", {
              required: "Nome é obrigatório",
            })}
            className="py-2 pl-10 pr-3 bg-zinc-50 outline-none rounded-lg relative w-full"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="" className={`text-brand-200 text-sm `}>
          Senha:
        </label>
        <div className={`relative `}>
          <div
            className={`absolute w-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-200 z-10 text-lg ${
              errors.nome && "text-brand-200"
            } transition duration-500`}
          >
            <FaUser />
          </div>
          <input
            placeholder="Sua senha."
            type="password"
            className="py-2 pl-10 pr-3 bg-zinc-50 outline-none rounded-lg relative w-full"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className={`text-brand-200 text-sm `}>
          Senha:
        </label>
        <div className={`relative `}>
          <div
            className={`absolute w-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-200 z-10 text-lg ${
              errors.nome && "text-brand-200"
            } transition duration-500`}
          >
            <FaUser />
          </div>
          <input
            placeholder="Confirme sua senha."
            type="password"
            className="py-2 pl-10 pr-3 bg-zinc-50 outline-none rounded-lg relative w-full"
          />
        </div>
      </div>
      <p className="text-brand-200 font-medium">
        Já tem cadastro?{" "}
        <a href="/login" className="underline">
          Faça login!
        </a>
      </p>

      {Object.keys(errors).length !== 0 && (
        <p className="text-white text-sm">
          Os campos obrigatórios estão em vermelho.
        </p>
      )}
      <div className="flex place-content-center">
        <button className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-brand-400 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-brand-200 rounded-md border border-brand-100"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-brand-100 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-brand-100 transition-colors duration-200 ease-in-out delay-100 group-hover:text-brand-200">
            Cadastrar
          </span>
        </button>
      </div>
    </form>
  );
};

export default FormCadastro;
