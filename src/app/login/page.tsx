import FormLogin from "@/components/common/Form/Login";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="bg-brand-200 min-h-screen">
      <div className="w-full">
        <img src="/img/quadriculado.png" alt="" className="w-full" />
      </div>
      <section className="">
        <div className="row">
          <div className="container">
            <div className="max-w-lg px-3 sm:px-8 py-8 sm:py-16 mx-auto bg-brand-400 shadow-xl rounded-lg">
              <div className="text-brand-200 text-7xl flex place-content-center">
                <FaUserCircle />
              </div>
              <h1></h1>
              <FormLogin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
