
import type { Metadata } from "next";
import "./globals.css";
import AppBar from "./component/AppBar";

export const metadata: Metadata = {
  title: "Exchange",
  description: "Exchange App",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-[#212121] text-white">
        <AppBar/>
        { children }
      </body>
    </html>
  );
}
