import { Metadata } from "next";
import { ReactNode } from "react";

import Header from "./Header";
import Chat from "./components/Chat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinicius Colares' Artificial Intelligence",
  description:
    "I am an AI assistant designed to provide information, and answer questions related to the my career. My function is to offer support and guidance to users visiting my website.",
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
