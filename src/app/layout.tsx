import { Metadata } from "next";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";

import Header from "./components/Header/Header";
import Chat from "./components/Chat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinicius Colares",
  description:
    "Sou Vinícius Colares, desenvolvedor web com mais de 14 anos de experiência, especializado em desenvolvimento de interfaces e experiências. Ofereço soluções inovadoras para interfaces de usuário e aplicativos web. Descubra como posso ajudar você a criar suas próprias soluções tecnológicas com inteligência artificial. Vamos transformar suas ideias em realidade!",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en" className="h-[100dvh]">
      <body className="min-h-[100dvh] flex flex-col">
        <main>
          <Header />
          {children}
          <Chat />
          <Analytics />
          <SpeedInsights />
          {shouldInjectToolbar && <VercelToolbar />}
        </main>
      </body>
    </html>
  );
}
