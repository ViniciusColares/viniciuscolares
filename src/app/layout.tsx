import { Metadata } from "next";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Vinicius Colares",
  description: "Where I hide my singularity.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-[100dvh]">
      <head>
        <meta name="apple-mobile-web-app-title" content="VnClrs" />
      </head>
      <body className="h-[100dvh] overflow-hidden flex flex-col">
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
