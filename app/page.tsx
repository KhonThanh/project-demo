import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <p>hello world</p>
      </main>
      <Footer />
    </>
  );
}