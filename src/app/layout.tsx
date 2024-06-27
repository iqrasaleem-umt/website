import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce website",
  description: "Generated iqra frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <Header/>
      <main className="px-12 "> 

      {children} 
      <Footer/>
      </main>
     
      </body>
    </html>
  );
}
