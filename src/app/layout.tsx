import type { Metadata } from "next";
import { Manrope, Montserrat, Red_Hat_Display } from "next/font/google";

import "./globals.css";
import { AppProviders } from "@/providers/Providers";
import { StyledComponentsRegistry } from "@/lib/registry";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-base",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-red-hat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acolher Vale do Aço",
  description:
    "Projeto social de apoio a pessoas no Vale do Aço - MG, ainda há muito o que fazer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${montserrat.variable} ${redHatDisplay.variable}`}
      >
        <StyledComponentsRegistry>
          <AppProviders>{children}</AppProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
