import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

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
    <html lang="en">
      <body>
        <Sidebar />
        <div className="main-content">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  );
}
