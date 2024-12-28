import { ReactNode } from "react";

import "@/styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-[100dvh]">
      <body className="min-h-[100dvh] flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
