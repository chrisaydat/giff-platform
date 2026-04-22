import type { Metadata } from "next";
import { Noto_Serif, Public_Sans } from "next/font/google";
import "./globals.css";
import AppFrame from "./components/AppFrame";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GIFF Digital Platform",
  description: "Ghana Institute of Freight Forwarders – Digital Administration Platform by Semper Fidum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${publicSans.variable}`}>
      <body>
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}
