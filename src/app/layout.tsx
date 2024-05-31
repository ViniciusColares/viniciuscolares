import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VC'AI",
  description: "Vinicius Colares' Artificial Intelligence",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="h-full bg-gradient-radial from-purple-950 to-purple-dark"
    >
      <body className="h-full flex flex-col bg-opacity-50">{children}</body>
    </html>
  );
}
