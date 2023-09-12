import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Carlitos Burguer",
	description: "Carlitos burguer",
	icons: {
		icon: "/img/carlitos-amarelo.png",
		shortcut: "/img/carlitos-amarelo.png",
		apple: "/img/carlitos-amarelo.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/img/carlitos-amarelo.png",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
