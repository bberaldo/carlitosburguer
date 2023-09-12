import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white flex flex-col py-2">
      <a href="/" className="max-w-[5rem] mx-auto">
        <img src="/img/logo-carlitos.png" />
      </a>
      <div className="max-w-xl w-full mx-auto mt-3 ">
        <div className="flex place-content-between w-full font-freestyle font-bold uppercase text-zinc-700 text-lg tracking-wide px-3">
          <div>
            <Link href="/login">Login</Link>
          </div>
          <div>
            <Link href="/">Cardápio</Link>
          </div>
          <div>
            <Link href="">WhatsApp</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
