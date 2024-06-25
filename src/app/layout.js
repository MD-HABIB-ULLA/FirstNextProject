import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber/Navber";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navber />
        <div>{children}</div>
      </body>
    </html>
  );
}
