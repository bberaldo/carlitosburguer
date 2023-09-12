"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
	const pathname = usePathname();
	return (
		<div className="bg-brand-400 flex flex-wrap sm:flex-nowrap text-brand-200 py-1.5 leading-none text-sm font-sphere font-medium place-content-center">
			<p className="text-center">&copy; 2023. Carlitos Burguer. </p>
			<p className="text-center">Todos os direitos reservados.</p>
		</div>
	);
};

export default Footer;
