import { Metadata } from "next";
import { ReactNode } from "react";

import Header from "./components/Header/Header";
import Chat from "./components/Chat";
import "./globals.css";

export const metadata: Metadata = {
	title: "Vinicius Colares",
	description:
		"Explore meu portfólio! Sou Vinícius Colares, desenvolvedor front-end com mais de 14 anos de experiência, especializado em React e tecnologias modernas. Ofereço soluções inovadoras para interfaces de usuário e aplicativos web. Descubra como posso ajudar você a criar suas próprias soluções tecnológicas com inteligência artificial. Vamos transformar suas ideias em realidade!",
};

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className="h-full">
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
				<Chat />
			</body>
		</html>
	);
}
