import type { Metadata } from "next";
import { Lato, Baloo_2 } from "next/font/google"; // Baloo_2 como alternativa redondeada
import "./globals.css";

const lato = Lato({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const baloo = Baloo_2({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Chequea tu voto",
  description: "Pagina dedicada ayudar a la población boliviana a verificar su voto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${baloo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
