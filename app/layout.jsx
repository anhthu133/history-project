import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CVLS",
  description: "Trang Web Lich su",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1000px] mx-auto`}>
        <Navbar />
        <main className="md:p-20 p-10 ">{children}</main>
      </body>
    </html>
  );
}
