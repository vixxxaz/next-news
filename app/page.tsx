import Image from "next/image";
import IndexPage from "./components/IndexPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Article from "./components/Article";
import { Metadata } from 'next'

 
export const metadata: Metadata = {
  title: 'Next-News',
}

export default function Home() {
  return (
    <>
      <IndexPage />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <Nav />
        <Article />
        <Footer />     
      </main>
    </>
  );
}
