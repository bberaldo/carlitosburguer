"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white flex flex-col py-2">
      <a href="/" className="max-w-[5rem] mx-auto">
        <img src="/img/logo-carlitos.png" />
      </a>
      <div className="max-w-xl w-full mx-auto mt-3 ">
        <div className="flex place-content-between w-full font-freestyle font-bold uppercase text-zinc-700 text-lg tracking-wide px-5">
          {pathname == "/perfil" ? (
            <div>
              <Link href="/perfil">Pedidos</Link>
            </div>
          ) : (
            <div>
              <Link href="/login">Login</Link>
            </div>
          )}
          <div>
            <Link href="/">Cardápio</Link>
          </div>
          <div>
            <Link href="/carrinho">Carrinho</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
