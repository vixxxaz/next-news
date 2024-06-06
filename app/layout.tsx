import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from './context/AuthProvider'
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexPage from "./components/IndexPage";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-News",
  description: "Blog information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
      {/* <IndexPage /> */}
        <body className={inter.className}>
            <Header />
            <Nav />
          <AuthProvider>                 
            <main className="flex justify-center items-start p-6 min-h-screen">
              {children}
            </main>
            <Footer /> 
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
